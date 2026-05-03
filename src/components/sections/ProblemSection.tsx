'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const icons = ['📞', '💸', '🕐']

export default function ProblemSection() {
  const { tr } = useLanguage()
  const p = tr.problem

  return (
    <section id="problem" className="py-28 relative">
      {/* Subtle divider */}
      <div className="gold-divider mb-28 hidden" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center mb-16 space-y-4"
        >
          <motion.p variants={fadeUp} className="section-label">
            {p.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-headline font-800 text-white"
          >
            {p.title}
          </motion.h2>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {p.stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative rounded-2xl p-8 card-lift cursor-default"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              <div className="text-3xl mb-5">{icons[i]}</div>
              <div className="text-5xl font-headline font-800 text-gold mb-3">{item.stat}</div>
              <p className="text-grey text-sm font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hook line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center text-xl sm:text-2xl font-headline font-700 text-gold max-w-2xl mx-auto"
        >
          {p.hook}
        </motion.p>
      </div>
    </section>
  )
}
