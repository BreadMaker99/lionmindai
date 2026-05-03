'use client'

import { motion } from 'framer-motion'
import { Bot, Phone, Zap, Wrench, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const icons = [Bot, Phone, Zap, Wrench]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ServicesSection() {
  const { tr } = useLanguage()
  const s = tr.services

  return (
    <section id="services" className="py-28 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.03) 0%, transparent 60%)',
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
            {s.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-headline font-800 text-white"
          >
            {s.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-grey text-lg font-body max-w-xl">
            {s.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {s.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-2xl p-8 card-lift cursor-default overflow-hidden"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Gold top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner glow on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon size={22} className="text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-headline font-700 text-xl mb-3">{item.title}</h3>
                  <p className="text-grey text-sm font-body leading-relaxed mb-5">{item.desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body font-600 text-gold/70 bg-gold/8 border border-gold/15 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <a
                      href="#book"
                      className="flex items-center gap-1 text-xs font-body font-600 text-grey hover:text-gold transition-colors duration-200"
                    >
                      {s.more}
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
