#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# LionMindAI — Factuur App — Nieuwe klant deployen
# Gebruik: ./deploy-client.sh
# ──────────────────────────────────────────────────────────────────────────────
set -euo pipefail

BLUE='\033[0;34m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'

echo -e "${BLUE}"
echo "╔══════════════════════════════════════════╗"
echo "║   LionMindAI — Nieuwe klant deployen     ║"
echo "╚══════════════════════════════════════════╝"
echo -e "${NC}"

# ── 1. Vereisten checken ───────────────────────────────────────────────────────
if ! command -v vercel &>/dev/null; then
  echo -e "${RED}❌ Vercel CLI niet gevonden. Installeer met: npm i -g vercel${NC}"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_JSON="${SCRIPT_DIR}/.vercel/project.json"

if [ ! -f "$PROJECT_JSON" ]; then
  echo -e "${RED}❌ Geen .vercel/project.json gevonden. Run eerst: vercel link${NC}"
  exit 1
fi

ORG_ID=$(python3 -c "import json; print(json.load(open('${PROJECT_JSON}'))['orgId'])")
ORIGINAL_PROJECT_JSON=$(cat "$PROJECT_JSON")

# ── 2. Klantgegevens invoeren ──────────────────────────────────────────────────
echo -e "${YELLOW}Vul de klantgegevens in:${NC}"
echo ""

# Lees alle input van de terminal (/dev/tty) zodat pipes of subprocessen stdin niet opslokken
read -rp "  Klantnaam slug (bv. janssen-loodgieters): " CLIENT_SLUG </dev/tty
CLIENT_SLUG=$(echo "$CLIENT_SLUG" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
PROJECT_NAME="factuur-${CLIENT_SLUG}"

read -rp "  Bedrijfsnaam: "                                          COMPANY_NAME    </dev/tty
read -rp "  BTW-nummer (bv. BE 0123.456.789): "                     COMPANY_VAT     </dev/tty
read -rp "  IBAN: "                                                  COMPANY_IBAN    </dev/tty
read -rp "  Adres: "                                                 COMPANY_ADDRESS </dev/tty
read -rp "  E-mail (optioneel, enter om over te slaan): "           COMPANY_EMAIL   </dev/tty
read -rp "  Telefoon (optioneel, enter om over te slaan): "         COMPANY_PHONE   </dev/tty
read -rp "  Eigen domein (bv. factuur.klant.be) of enter voor geen: " CUSTOM_DOMAIN </dev/tty

# Haal Anthropic key op van huidig project (stdin veilig via /dev/null)
TMPENV=$(mktemp)
vercel env pull --yes "$TMPENV" </dev/null 2>/dev/null || true
ANTHROPIC_KEY=$(grep '^ANTHROPIC_API_KEY=' "$TMPENV" 2>/dev/null | cut -d= -f2 | tr -d '"' || echo "")
rm -f "$TMPENV"

if [ -z "$ANTHROPIC_KEY" ]; then
  read -rsp "  Anthropic API key (niet zichtbaar): " ANTHROPIC_KEY </dev/tty
  echo ""
fi

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "  Project:  ${GREEN}${PROJECT_NAME}${NC}"
echo -e "  Bedrijf:  ${GREEN}${COMPANY_NAME}${NC}"
echo -e "  BTW:      ${GREEN}${COMPANY_VAT}${NC}"
echo -e "  IBAN:     ${GREEN}${COMPANY_IBAN}${NC}"
[ -n "$CUSTOM_DOMAIN" ] && echo -e "  Domein:   ${GREEN}${CUSTOM_DOMAIN}${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
read -rp "Correct? Doorgaan? (j/n): " CONFIRM </dev/tty
[ "$CONFIRM" != "j" ] && echo "Geannuleerd." && exit 0

# ── 3. Vercel project aanmaken ─────────────────────────────────────────────────
echo ""
echo -e "${BLUE}[1/4] Project aanmaken: ${PROJECT_NAME}${NC}"
vercel project add "$PROJECT_NAME" --yes 2>/dev/null || true

# Project ID ophalen
PROJECT_ID=$(vercel project inspect "$PROJECT_NAME" 2>&1 | grep -i "id" | head -1 | awk '{print $NF}')
if [ -z "$PROJECT_ID" ]; then
  echo -e "${RED}❌ Kon project ID niet ophalen. Probeer opnieuw.${NC}"
  exit 1
fi

# Herstel originele link altijd, ook bij fouten
restore_original() { echo "$ORIGINAL_PROJECT_JSON" > "$PROJECT_JSON"; }
trap restore_original EXIT

# ── 4. Deployen naar nieuw project ────────────────────────────────────────────
echo -e "${BLUE}[2/4] Deployen naar ${PROJECT_NAME}${NC}"

printf '{"projectId":"%s","orgId":"%s","projectName":"%s"}' \
  "${PROJECT_ID}" "${ORG_ID}" "${PROJECT_NAME}" > "$PROJECT_JSON"

vercel --prod --yes

# ── 5. Environment variables instellen ────────────────────────────────────────
echo ""
echo -e "${BLUE}[3/4] Environment variables instellen${NC}"

vercel env add COMPANY_NAME     production --value "$COMPANY_NAME"    --yes --force
vercel env add COMPANY_VAT      production --value "$COMPANY_VAT"     --yes --force
vercel env add COMPANY_IBAN     production --value "$COMPANY_IBAN"    --yes --force
vercel env add COMPANY_ADDRESS  production --value "$COMPANY_ADDRESS" --yes --force
vercel env add ANTHROPIC_API_KEY production --value "$ANTHROPIC_KEY"  --yes --force
[ -n "$COMPANY_EMAIL" ] && vercel env add COMPANY_EMAIL production --value "$COMPANY_EMAIL" --yes --force
[ -n "$COMPANY_PHONE" ] && vercel env add COMPANY_PHONE production --value "$COMPANY_PHONE" --yes --force

# Herdeployeer met env vars actief
echo -e "${BLUE}    Herdeployeer met env vars...${NC}"
vercel --prod --yes

# ── 6. Domein koppelen ────────────────────────────────────────────────────────
if [ -n "$CUSTOM_DOMAIN" ]; then
  echo ""
  echo -e "${BLUE}[4/4] Domein koppelen: ${CUSTOM_DOMAIN}${NC}"
  vercel domains add "$CUSTOM_DOMAIN" "$PROJECT_NAME" || true
fi

# ── 7. Samenvatting ───────────────────────────────────────────────────────────
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✓ Klant succesvol deployed!            ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════╝${NC}"
echo ""
echo -e "  Vercel URL:  ${GREEN}https://${PROJECT_NAME}.vercel.app${NC}"
[ -n "$CUSTOM_DOMAIN" ] && echo -e "  Eigen domein: ${GREEN}https://${CUSTOM_DOMAIN}${NC}"
echo ""

if [ -n "$CUSTOM_DOMAIN" ]; then
  echo -e "${YELLOW}DNS-record toevoegen bij klant zijn hosting:${NC}"
  echo -e "  Type:  A"
  echo -e "  Naam:  $(echo "$CUSTOM_DOMAIN" | cut -d. -f1)"
  echo -e "  Waarde: 76.76.21.21"
  echo ""
fi

echo -e "  Vercel dashboard: ${BLUE}https://vercel.com/cedrics1804-8178s-projects/${PROJECT_NAME}${NC}"
echo ""
