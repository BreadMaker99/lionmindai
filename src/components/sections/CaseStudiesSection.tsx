'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Quote } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export default function CaseStudiesSection() {
  const { tr } = useLanguage()
  const c = tr.cases

  return (
    <section id="results" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-14 space-y-3"
        >
          <motion.p variants={fadeUp} className="section-label">
            {c.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-headline font-800 text-white"
          >
            {c.title}
          </motion.h2>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Top strip */}
              <div className="px-8 pt-7 pb-5 border-b border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-grey text-xs font-body font-600 tracking-widest uppercase mb-1">
                      {item.tag}
                    </p>
                    <h3 className="text-white font-headline font-700 text-xl">{item.type}</h3>
                    <p className="text-grey text-sm font-body mt-0.5">📍 {item.location}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-body font-600 text-gold/70 bg-gold/8 border border-gold/15 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.system}
                  </span>
                </div>
              </div>

              {/* Results */}
              <div className="px-8 py-6 space-y-3">
                {item.results.map((result, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm font-body">{result}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              {item.hasQuote && item.quote && (
                <div className="mx-6 mb-6 p-5 rounded-xl bg-gold/5 border border-gold/15 relative">
                  <Quote size={16} className="text-gold/40 absolute top-3 left-3" />
                  <p className="text-grey text-sm font-body leading-relaxed italic pl-4">
                    {item.quote}
                  </p>
                </div>
              )}

              {/* No quote placeholder */}
              {!item.hasQuote && (
                <div className="mx-6 mb-6 p-5 rounded-xl bg-white/3 border border-white/5">
                  <p className="text-grey/50 text-xs font-body italic">
                    — Resultaten spreken voor zich.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #111118, #0e0e14)',
            border: '1px solid rgba(212,175,55,0.12)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
            {c.stats.map((stat, i) => (
              <div key={i} className="px-8 py-7 text-center">
                <p className="text-3xl font-headline font-800 text-gold mb-1">{stat.num}</p>
                <p className="text-grey text-xs font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
