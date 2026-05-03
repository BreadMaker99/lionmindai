'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Lang } from '@/lib/translations'

export default function Navbar() {
  const { tr, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: tr.nav.services, href: '#services' },
    { label: tr.nav.results, href: '#results' },
    { label: tr.nav.process, href: '#process' },
    { label: tr.nav.about, href: '#about' },
    { label: tr.nav.faq, href: '#faq' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gold/10'
            : ''
        }`}
        style={
          scrolled
            ? {
                background: 'rgba(11,11,15,0.88)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
              }
            : { background: 'transparent' }
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="LionMindAI"
              width={72}
              height={72}
              className="w-16 h-16 object-contain"
              priority
            />
            <span className="font-headline font-700 text-white text-lg tracking-tight hidden sm:block">
              LIONMIND<span className="text-gold">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-grey hover:text-white transition-colors duration-200 text-sm font-body font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <div className="hidden sm:flex items-center gap-1 text-xs font-body font-600 tracking-widest">
              {(['nl', 'en'] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  <button
                    onClick={() => setLang(l)}
                    className={`transition-colors duration-200 px-1 ${
                      lang === l ? 'text-gold' : 'text-grey hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {i === 0 && <span className="text-grey/40 text-xs">|</span>}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#book"
              className="hidden sm:block btn-gold px-5 py-2.5 rounded-lg text-sm"
            >
              {tr.nav.cta}
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col px-8 py-8"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="LionMindAI" width={64} height={64} className="w-14 h-14 object-contain" />
                <span className="font-headline font-700 text-white text-lg">
                  LIONMIND<span className="text-gold">AI</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-1"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Gold line */}
            <div className="gold-divider mb-10" />

            {/* Links */}
            <div className="flex flex-col gap-7 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="text-3xl font-headline font-700 text-white hover:text-gold transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom */}
            <div className="space-y-4">
              {/* Language */}
              <div className="flex items-center gap-3 text-sm font-body font-600 tracking-widest">
                {(['nl', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`transition-colors ${lang === l ? 'text-gold' : 'text-grey'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="block btn-gold px-6 py-4 rounded-xl text-center text-base"
              >
                {tr.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
