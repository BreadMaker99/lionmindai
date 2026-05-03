'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

export default function ProcessSection() {
  const { tr } = useLanguage()
  const p = tr.process

  return (
    <section id="process" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.04) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-16 text-center space-y-3"
        >
          <motion.p variants={fadeUp} className="section-label">
            {p.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-headline font-800 text-white max-w-2xl mx-auto"
          >
            {p.title}
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-gold/30 via-gold/15 to-gold/30 pointer-events-none" />

          {p.steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <span className="text-5xl font-headline font-800 text-gold leading-none">
                      {step.num}
                    </span>
                    {/* Connector dot for desktop */}
                    <div className="hidden lg:block absolute -top-[1.35rem] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-black" />
                  </div>
                </div>

                <h3 className="text-white font-headline font-700 text-xl mb-1">{step.title}</h3>
                <p className="text-gold/70 text-xs font-body font-600 tracking-wide mb-4">
                  {step.subtitle}
                </p>
                <p className="text-grey text-sm font-body leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
