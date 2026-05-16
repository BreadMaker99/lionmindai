module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { transcript, year } = req.body;
  if (!transcript) return res.status(400).json({ error: 'Geen transcript' });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'API key niet geconfigureerd op de server' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model:      'claude-sonnet-4-20250514',
        max_tokens: 400,
        system: `Je extraheert factuurgegevens uit gesproken tekst van een Belgische loodgieter.
Geef ALLEEN geldige JSON terug zonder markdown of uitleg. Gebruik null voor ontbrekende velden.
Vertaal werkbeschrijvingen naar professioneel Nederlands als ze informeel zijn.
Voor "isB2B": true als de klant een bedrijf is, false als het een privépersoon is, null als onduidelijk.
Voor "buildingOld": true als het gebouw ouder dan 10 jaar is of als een bouwjaar voor ${(year || new Date().getFullYear()) - 10} wordt genoemd, false als het nieuwbouw is of jonger dan 10 jaar, null als onduidelijk.
Voor bedragen: extraheer alleen expliciete getallen, gok nooit.`,
        messages: [{
          role:    'user',
          content: `Extraheer de factuurgegevens uit deze gesproken tekst van een loodgieter:\n\n"${transcript}"\n\nJSON-formaat:\n{"clientName":null,"clientAddress":null,"isB2B":null,"clientVat":null,"buildingOld":null,"workDescription":null,"hours":null,"hourlyRate":null,"materialsCost":null,"materialsDesc":null}`,
        }],
      }),
    });

    if (!response.ok) throw new Error('Anthropic API fout ' + response.status);
    const data = await response.json();
    res.json(data);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
