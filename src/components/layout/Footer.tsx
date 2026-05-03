'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { tr } = useLanguage()
  const f = tr.footer

  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="LionMindAI" width={44} height={44} className="w-11 h-11 object-contain" />
              <div>
                <div className="font-headline font-700 text-white text-base leading-tight">
                  LIONMIND<span className="text-gold">AI</span>
                </div>
                <div className="text-gold text-xs font-body font-600 tracking-widest mt-0.5">{f.tagline}</div>
              </div>
            </div>
            <p className="text-grey text-sm font-body leading-relaxed max-w-xs">{f.desc}</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-headline font-600 text-sm mb-5 tracking-wide">{f.links_title}</h4>
            <ul className="space-y-3">
              {f.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-grey hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-headline font-600 text-sm mb-5 tracking-wide">{f.contact_title}</h4>
            <div className="space-y-3">
              <p className="text-grey text-sm font-body flex items-center gap-2">
                <span>🇧🇪</span>
                <span>{f.location}</span>
              </p>
              <a
                href={`mailto:${f.email}`}
                className="text-gold text-sm font-body hover:text-gold/80 transition-colors duration-200 block"
              >
                {f.email}
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-grey text-xs font-body">{f.copyright}</p>
          <p className="text-grey/50 text-xs font-body">
            Built with <span className="text-gold">♦</span> LionMindAI
          </p>
        </div>
      </div>
    </footer>
  )
}
