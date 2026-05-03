'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      className="border-b border-white/6 last:border-b-0"
    >
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-headline font-600 text-base group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all duration-200 group-hover:border-gold/60">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-grey font-body text-sm leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const { tr } = useLanguage()
  const faq = tr.faq

  return (
    <section id="faq" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.03) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-12 space-y-3"
        >
          <motion.p variants={fadeUp} className="section-label">
            {faq.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-headline font-800 text-white"
          >
            {faq.title}
          </motion.h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#111118',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '0 2rem',
          }}
        >
          {faq.items.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
