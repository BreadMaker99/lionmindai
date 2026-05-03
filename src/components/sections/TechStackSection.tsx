'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function TechStackSection() {
  const { tr } = useLanguage()
  const tech = tr.tech

  return (
    <section className="py-20 relative">
      {/* Gold divider top */}
      <div className="gold-divider mb-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="text-center mb-12 space-y-2"
        >
          <motion.p variants={fadeUp} className="section-label">
            {tech.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-headline font-700 text-white"
          >
            {tech.title}
          </motion.h2>
        </motion.div>

        {/* Tool badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-3"
        >
          {tech.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={fadeIn}
              className="group px-5 py-2.5 rounded-xl text-sm font-body font-500 text-grey hover:text-white transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              whileHover={{
                borderColor: 'rgba(212,175,55,0.3)',
                background: 'rgba(212,175,55,0.05)',
                color: '#FFFFFF',
              }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Gold divider bottom */}
      <div className="gold-divider mt-20" />
    </section>
  )
}
