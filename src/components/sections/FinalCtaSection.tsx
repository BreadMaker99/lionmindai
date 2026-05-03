'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export default function FinalCtaSection() {
  const { tr } = useLanguage()
  const cta = tr.finalCta

  return (
    <section id="book" className="py-32 relative overflow-hidden">
      {/* Gold radial glow — restrained at 8% opacity max */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 35%, transparent 70%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="space-y-8"
        >
          {/* Gold line accent */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="w-12 h-px bg-gold/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl xl:text-6xl font-headline font-800 text-white leading-[1.08]"
          >
            {cta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-grey text-lg font-body leading-relaxed max-w-xl mx-auto"
          >
            {cta.sub}
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4">
            <a
              href="mailto:cedrics1804@gmail.com?subject=Intake gesprek LionMindAI"
              className="btn-gold inline-flex items-center gap-2.5 px-10 py-5 rounded-xl text-lg animate-pulse-gold"
            >
              {cta.cta}
              <ArrowRight size={19} />
            </a>

            <p className="text-grey/60 text-sm font-body block">{cta.response}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
