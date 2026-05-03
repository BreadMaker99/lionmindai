'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function FounderSection() {
  const { tr } = useLanguage()
  const a = tr.about

  return (
    <section id="about" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.03) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Logo as visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="w-64 h-64 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 0 60px rgba(212,175,55,0.08)',
                }}
              >
                {/* Inner ring */}
                <div
                  className="w-52 h-52 rounded-full flex items-center justify-center"
                  style={{
                    border: '1px solid rgba(212,175,55,0.12)',
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="LionMindAI — Cédric"
                    width={160}
                    height={160}
                    className="w-36 h-36 object-contain"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl text-xs font-body font-600 text-gold"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
              >
                🇧🇪 Belgium · AI Agency
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p variants={fadeUp} className="section-label">
                {a.label}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-headline font-800 text-white"
              >
                {a.title}
              </motion.h2>
            </div>

            <div className="space-y-4">
              {a.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-grey font-body leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Skills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {a.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-body font-600 text-grey hover:text-gold transition-colors duration-200 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Proof line */}
            <motion.div
              variants={fadeUp}
              className="pt-2 border-t border-white/6"
            >
              <p className="text-grey/60 text-sm font-body italic">{a.proof}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
