export type Lang = 'nl' | 'en'

const t = {
  nl: {
    nav: {
      services: 'Services',
      results: 'Resultaten',
      process: 'Aanpak',
      about: 'Over ons',
      faq: 'FAQ',
      cta: 'Boek een gesprek',
    },
    hero: {
      badge: 'AI Automation · Benelux',
      h1_line1: "Jouw concurrent antwoordt",
      h1_line2: "al om 3 uur 's nachts.",
      sub: 'LionMindAI bouwt AI-systemen die leads kwalificeren, afspraken boeken en klanten opvolgen — terwijl jij slaapt. Geen hype. Geen bullshit. Alleen resultaten.',
      cta_primary: 'Boek een gesprek',
      cta_secondary: 'Bekijk onze resultaten',
      proof: ['3 actieve klanten', 'Gemiddeld €297/mo', 'Benelux-specialist'],
      dashboard: {
        header: 'AI SYSTEEM — LIVE',
        waiting: 'Wacht op oproepen...',
        incoming_label: 'Inkomende oproep',
        incoming_time: '22:47',
        caller: 'Jan Peeters',
        service: 'Loodgieter · Antwerpen',
        processing: 'AI kwalificeert lead...',
        results: [
          'Lead gekwalificeerd',
          'Afspraak: morgen 09:00',
          'Eigenaar genotificeerd',
          '+€480 vastgelegd',
        ],
        caption: 'Terwijl jij sliep.',
        restart: 'Nieuwe oproep...',
      },
    },
    problem: {
      label: 'De realiteit',
      title: 'Wat jouw bedrijf nu kost.',
      hook: 'Terwijl jij dit leest, pakt een concurrent die lead op.',
      stats: [
        { stat: '62%', desc: 'van zakelijke oproepen na 18:00 gaat naar voicemail' },
        { stat: '€480', desc: 'gemiddelde waarde van een gemiste lead in de dienstensector' },
        { stat: '4.2u', desc: 'verliest een ondernemer per dag aan handmatige opvolging' },
      ],
    },
    services: {
      label: 'Wat we bouwen',
      title: 'Wat wij bouwen.',
      subtitle: 'Geen generieke software. Systemen die werken voor jóuw bedrijf.',
      more: 'Meer info',
      items: [
        {
          title: 'AI Chatbot & Intake Systeem',
          desc: 'Vangt leads op 24/7, stelt kwalificatievragen en plant afspraken rechtstreeks in jouw agenda — volledig automatisch.',
          tag: 'Bewezen · €297/mo',
        },
        {
          title: 'AI Telefoonbeantwoording',
          desc: 'Een voice AI die je telefoon opneemt na sluitingstijd, leads kwalificeert en urgente gevallen doorstuurt. Nooit meer een gemiste oproep.',
          tag: 'Populair bij tandartsen & loodgieters',
        },
        {
          title: 'Automatische Klantenopvolging',
          desc: 'E-mail- en SMS-sequenties die leads warm houden, offertes opvolgen en herboekingen triggeren — zonder dat jij een vinger uitsteekt.',
          tag: 'Email & SMS',
        },
        {
          title: 'Custom AI Tools',
          desc: 'Dashboards, beslissingstools en workflow-automaties op maat gebouwd voor jouw specifieke bedrijfsproces.',
          tag: 'Op maat gebouwd',
        },
      ],
    },
    cases: {
      label: 'Bewezen resultaten',
      title: 'Echte resultaten. Echte bedrijven.',
      items: [
        {
          type: 'Loodgietersbedrijf',
          location: 'Antwerpen regio',
          system: 'AI Chatbot + Google Calendar Intake',
          tag: 'Chatbot & Intake',
          results: [
            'Leads na 18:00 automatisch gevangen',
            'Afspraken geboekt zonder tussenkomst',
            '€297/mo recurring — geen extra kosten',
          ],
          quote: '"We hadden vorige week 4 nieuwe aanvragen via de chatbot. Allemaal geboekt zonder dat ik één bericht hoefde te sturen."',
          hasQuote: true,
        },
        {
          type: 'Tandartspraktijk',
          location: 'Benelux',
          system: 'AI Voice Answering Service',
          tag: 'Voice AI',
          results: [
            'Spoedgevallen automatisch gekwalificeerd',
            'Urgente slots automatisch geboekt',
            'Eigenaar slaapt ongestoord',
          ],
          quote: null,
          hasQuote: false,
        },
      ],
      stats: [
        { num: '3', label: 'actieve klanten' },
        { num: '€297/mo', label: 'gemiddeld per systeem' },
        { num: '<1 week', label: 'implementatietijd' },
        { num: '0', label: "gemiste leads 's nachts" },
      ],
    },
    process: {
      label: 'Hoe het werkt',
      title: 'Van gesprek tot systeem in minder dan een week.',
      steps: [
        {
          num: '01',
          title: 'Intake gesprek',
          subtitle: '30 minuten · Gratis',
          desc: 'We praten over jouw bedrijf, de bottlenecks en welk systeem de meeste impact heeft. Geen verplichtingen.',
        },
        {
          num: '02',
          title: 'Bouw & configuratie',
          subtitle: '3–5 werkdagen',
          desc: 'We bouwen het systeem op basis van jouw processen. Jij ziet het live vóór het getest wordt op klanten.',
        },
        {
          num: '03',
          title: 'Live & schaalbaar',
          subtitle: 'Continu',
          desc: 'Je systeem gaat live. We monitoren, optimaliseren en schalen zodra de resultaten er zijn.',
        },
      ],
    },
    about: {
      label: 'De oprichter',
      title: 'Gebouwd door iemand die het begrijpt.',
      paragraphs: [
        'Ik ben Cédric. Ik heb op de productievloer gewerkt bij Toyota. Ik weet hoe het voelt als je te druk bent om bij te houden, te weinig mensen hebt en elk gemist telefoontje geld kost.',
        'LionMindAI bouwt geen oplossingen voor VC-backed startups. We bouwen voor loodgieters die om 22:00 nog bereikbaar willen zijn. Voor tandartsen die nooit meer een spoedgeval willen missen. Voor ondernemers die écht willen groeien.',
        'Geen groot agencyteam. Geen overhead. Alleen systemen die werken.',
      ],
      skills: ['AI Product Scoping', 'Python & Data Tools', 'Voice AI', 'Benelux Market', 'Dutch/Flemish', 'Rapid MVP Building'],
      proof: 'Actief trader · Toyota production floor ervaring · Benelux AI-specialist',
    },
    tech: {
      label: 'Technologie',
      title: 'Gebouwd op tools die werken.',
      tools: ['n8n', 'Make', 'VAPI', 'Voiceflow', 'OpenAI', 'Claude AI', 'Google Calendar', 'Twilio', 'Python', 'Vercel'],
    },
    faq: {
      label: 'Veelgestelde vragen',
      title: 'Veelgestelde vragen.',
      items: [
        {
          q: 'Hoe snel kan een systeem live gaan?',
          a: 'In de meeste gevallen zijn we binnen 5 werkdagen live. We hebben al systemen opgeleverd in 3 dagen voor urgente situaties.',
        },
        {
          q: 'Wat kost het?',
          a: 'Instapmodellen starten vanaf €297/maand (recurring). Complexere systemen op offerte. We bespreken dit in het gratis intake-gesprek.',
        },
        {
          q: 'Heb ik technische kennis nodig?',
          a: 'Nul. We bouwen, configureren en onderhouden alles. Jij krijgt een systeem dat gewoon werkt.',
        },
        {
          q: 'Voor welke sectoren werken jullie?',
          a: 'Primair: dienstenbedrijven in de Benelux — loodgieters, elektriciens, tandartsen, schoonmaakbedrijven, lokale horeca. Maar ook breder als de use case klopt.',
        },
        {
          q: 'Wat als het systeem niet werkt voor mijn bedrijf?',
          a: 'We doen een intake-gesprek vóór we iets bouwen. Als het niet de juiste fit is, zeggen we dat eerlijk. We nemen geen projecten aan die we niet kunnen waarmaken.',
        },
      ],
    },
    finalCta: {
      title: 'Klaar om leads te stoppen met missen?',
      sub: 'Boek een gratis intake-gesprek van 30 minuten. Geen verplichtingen. Geen verkooppraat. Gewoon eerlijk advies.',
      cta: 'Boek een gesprek',
      response: '📅 Gemiddelde responstijd: < 24 uur',
    },
    footer: {
      tagline: 'FOCUS. DISCIPLINE. GROWTH.',
      desc: "AI automation voor Benelux KMO's die écht willen groeien.",
      links_title: 'Navigatie',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Resultaten', href: '#results' },
        { label: 'Aanpak', href: '#process' },
        { label: 'Over ons', href: '#about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Boek een gesprek', href: '#book' },
      ],
      contact_title: 'Contact',
      location: 'Gevestigd in België · Benelux-markt',
      email: 'cedrics1804@gmail.com',
      copyright: '© 2026 LionMindAI · Privacy Policy · Alle rechten voorbehouden',
    },
  },
  en: {
    nav: {
      services: 'Services',
      results: 'Results',
      process: 'Process',
      about: 'About',
      faq: 'FAQ',
      cta: 'Book a Call',
    },
    hero: {
      badge: 'AI Automation · Benelux',
      h1_line1: 'Your competitor already',
      h1_line2: 'answers at 3am.',
      sub: 'LionMindAI builds AI systems that qualify leads, book appointments and follow up with clients — while you sleep. No hype. No bullshit. Just results.',
      cta_primary: 'Book a Call',
      cta_secondary: 'See Our Results',
      proof: ['3 active clients', 'Average €297/mo', 'Benelux specialist'],
      dashboard: {
        header: 'AI SYSTEM — LIVE',
        waiting: 'Waiting for calls...',
        incoming_label: 'Incoming call',
        incoming_time: '22:47',
        caller: 'Jan Peeters',
        service: 'Plumber · Antwerp',
        processing: 'AI qualifying lead...',
        results: [
          'Lead qualified',
          'Appointment: tomorrow 09:00',
          'Owner notified',
          '+€480 captured',
        ],
        caption: 'While you were sleeping.',
        restart: 'New incoming call...',
      },
    },
    problem: {
      label: 'The reality',
      title: 'What your business is losing right now.',
      hook: 'While you\'re reading this, a competitor is picking up that lead.',
      stats: [
        { stat: '62%', desc: 'of business calls after 6pm go to voicemail' },
        { stat: '€480', desc: 'average missed lead value in the service sector' },
        { stat: '4.2h', desc: 'lost daily by SMB owners on manual follow-up' },
      ],
    },
    services: {
      label: 'What we build',
      title: 'What we build.',
      subtitle: 'Not generic software. Systems that work for your specific business.',
      more: 'Learn more',
      items: [
        {
          title: 'AI Chatbot & Intake System',
          desc: 'Captures leads 24/7, asks qualifying questions and books appointments directly into your calendar — fully automated.',
          tag: 'Proven · €297/mo',
        },
        {
          title: 'AI Phone Answering',
          desc: 'A voice AI that answers your phone after hours, qualifies leads and escalates urgent cases. Never miss a call again.',
          tag: 'Popular with dentists & plumbers',
        },
        {
          title: 'Automated Client Follow-up',
          desc: 'Email and SMS sequences that keep leads warm, follow up on quotes and trigger rebookings — without you lifting a finger.',
          tag: 'Email & SMS',
        },
        {
          title: 'Custom AI Tools',
          desc: 'Dashboards, decision tools and workflow automations custom-built for your specific business process.',
          tag: 'Built to spec',
        },
      ],
    },
    cases: {
      label: 'Proven results',
      title: 'Real results. Real businesses.',
      items: [
        {
          type: 'Plumbing Company',
          location: 'Antwerp region',
          system: 'AI Chatbot + Google Calendar Intake',
          tag: 'Chatbot & Intake',
          results: [
            'Leads after 6pm captured automatically',
            'Appointments booked without intervention',
            '€297/mo recurring — no extra costs',
          ],
          quote: '"Last week we had 4 new requests through the chatbot. All booked without me sending a single message."',
          hasQuote: true,
        },
        {
          type: 'Dental Practice',
          location: 'Benelux',
          system: 'AI Voice Answering Service',
          tag: 'Voice AI',
          results: [
            'Emergencies qualified automatically',
            'Urgent slots booked automatically',
            'Owner sleeps undisturbed',
          ],
          quote: null,
          hasQuote: false,
        },
      ],
      stats: [
        { num: '3', label: 'active clients' },
        { num: '€297/mo', label: 'average per system' },
        { num: '<1 week', label: 'implementation time' },
        { num: '0', label: 'missed leads at night' },
      ],
    },
    process: {
      label: 'How it works',
      title: 'From conversation to live system in under a week.',
      steps: [
        {
          num: '01',
          title: 'Intake Call',
          subtitle: '30 minutes · Free',
          desc: 'We talk about your business, the bottlenecks and which system will have the most impact. No obligations.',
        },
        {
          num: '02',
          title: 'Build & Configure',
          subtitle: '3–5 working days',
          desc: 'We build the system based on your processes. You see it live before it\'s tested on customers.',
        },
        {
          num: '03',
          title: 'Live & Scalable',
          subtitle: 'Ongoing',
          desc: 'Your system goes live. We monitor, optimise and scale once results are in.',
        },
      ],
    },
    about: {
      label: 'The founder',
      title: 'Built by someone who gets it.',
      paragraphs: [
        "I'm Cédric. I've worked on the production floor at Toyota. I know what it feels like to be too busy to keep up, understaffed, and watching every missed call cost you money.",
        "LionMindAI doesn't build solutions for VC-backed startups. We build for plumbers who want to be reachable at 10pm without giving up their evening. For dentists who never want to miss an emergency. For business owners who actually want to grow.",
        'No big agency team. No overhead. Just systems that work.',
      ],
      skills: ['AI Product Scoping', 'Python & Data Tools', 'Voice AI', 'Benelux Market', 'Dutch/Flemish', 'Rapid MVP Building'],
      proof: 'Active trader · Toyota production floor experience · Benelux AI specialist',
    },
    tech: {
      label: 'Technology',
      title: 'Built on tools that work.',
      tools: ['n8n', 'Make', 'VAPI', 'Voiceflow', 'OpenAI', 'Claude AI', 'Google Calendar', 'Twilio', 'Python', 'Vercel'],
    },
    faq: {
      label: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        {
          q: 'How fast can a system go live?',
          a: "In most cases we're live within 5 working days. We've delivered systems in 3 days for urgent situations.",
        },
        {
          q: 'What does it cost?',
          a: 'Entry models start from €297/month (recurring). Complex systems on quote. We discuss this in the free intake call.',
        },
        {
          q: 'Do I need technical knowledge?',
          a: 'Zero. We build, configure and maintain everything. You get a system that just works.',
        },
        {
          q: 'What sectors do you work with?',
          a: 'Primarily: service businesses in the Benelux — plumbers, electricians, dentists, cleaning companies, local hospitality. But also broader when the use case fits.',
        },
        {
          q: "What if the system doesn't work for my business?",
          a: "We do an intake call before we build anything. If it's not the right fit, we say so honestly. We don't take on projects we can't deliver.",
        },
      ],
    },
    finalCta: {
      title: 'Ready to stop missing leads?',
      sub: 'Book a free 30-minute intake call. No obligations. No sales pitch. Just honest advice.',
      cta: 'Book a Call',
      response: '📅 Average response time: < 24 hours',
    },
    footer: {
      tagline: 'FOCUS. DISCIPLINE. GROWTH.',
      desc: 'AI automation for Benelux SMBs who actually want to grow.',
      links_title: 'Navigation',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Results', href: '#results' },
        { label: 'Process', href: '#process' },
        { label: 'About', href: '#about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Book a Call', href: '#book' },
      ],
      contact_title: 'Contact',
      location: 'Based in Belgium · Serving Benelux',
      email: 'cedrics1804@gmail.com',
      copyright: '© 2026 LionMindAI · Privacy Policy · All rights reserved',
    },
  },
} as const

export type Translations = typeof t.nl
export default t
