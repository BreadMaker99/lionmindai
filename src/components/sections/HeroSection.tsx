'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type Stage = 'waiting' | 'incoming' | 'processing' | 'done'

function HeroDashboard() {
  const { tr } = useLanguage()
  const d = tr.hero.dashboard
  const [stage, setStage] = useState<Stage>('waiting')
  const [visibleResults, setVisibleResults] = useState(0)

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let t3: ReturnType<typeof setTimeout>
    let t4: ReturnType<typeof setTimeout>
    let t5: ReturnType<typeof setTimeout>
    let t6: ReturnType<typeof setTimeout>
    let t7: ReturnType<typeof setTimeout>

    const run = () => {
      setStage('waiting')
      setVisibleResults(0)
      t1 = setTimeout(() => setStage('incoming'), 1800)
      t2 = setTimeout(() => setStage('processing'), 3500)
      t3 = setTimeout(() => { setStage('done'); setVisibleResults(0) }, 5200)
      t4 = setTimeout(() => setVisibleResults(1), 5700)
      t5 = setTimeout(() => setVisibleResults(2), 6300)
      t6 = setTimeout(() => setVisibleResults(3), 6900)
      t7 = setTimeout(() => setVisibleResults(4), 7500)
    }

    run()
    const interval = setInterval(run, 12000)
    return () => {
      clearInterval(interval)
      ;[t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/20 via-gold/5 to-transparent pointer-events-none" />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: '#0e0e14', border: '1px solid rgba(212,175,55,0.18)' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-body font-600 tracking-widest text-gold">{d.header}</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Body */}
        <div className="p-6 min-h-[280px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {stage === 'waiting' && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 pt-8"
              >
                <span className="text-grey text-sm font-body">{d.waiting}</span>
                <span className="cursor-blink text-gold font-headline font-700 text-sm">▊</span>
              </motion.div>
            )}

            {stage === 'incoming' && (
              <motion.div
                key="incoming"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-sm animate-pulse">
                    📞
                  </div>
                  <div>
                    <p className="text-xs text-grey font-body">{d.incoming_label}</p>
                    <p className="text-white font-headline font-700 text-lg">{d.incoming_time}</p>
                  </div>
                </div>
                <div className="bg-white/4 rounded-xl p-4 border border-white/6 space-y-1">
                  <p className="text-white font-headline font-600 text-base">{d.caller}</p>
                  <p className="text-grey text-sm font-body">{d.service}</p>
                </div>
              </motion.div>
            )}

            {stage === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue/15 flex items-center justify-center text-sm">
                    🤖
                  </div>
                  <p className="text-blue text-sm font-body font-500">{d.processing}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold to-gold/60"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold/30"
                      initial={{ width: '0%' }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {stage === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {d.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={visibleResults > i ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4 }}
                    className={`flex items-center gap-3 ${i === d.results.length - 1 ? 'mt-2' : ''}`}
                  >
                    <CheckCircle2
                      size={16}
                      className={i === d.results.length - 1 ? 'text-gold flex-shrink-0' : 'text-gold flex-shrink-0'}
                    />
                    <span
                      className={`text-sm font-body ${
                        i === d.results.length - 1
                          ? 'text-gold font-headline font-700'
                          : 'text-white'
                      }`}
                    >
                      {result}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Caption */}
          <div className="mt-6 pt-4 border-t border-white/6">
            <p className="text-grey/60 text-xs font-body italic">{d.caption}</p>
          </div>
        </div>
      </div>

      {/* Circuit decoration */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="50" y1="2" x2="50" y2="20" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="50" y1="80" x2="50" y2="98" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="2" y1="50" x2="20" y2="50" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="80" y1="50" x2="98" y2="50" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function HeroSection() {
  const { tr } = useLanguage()
  const h = tr.hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24"
      style={{
        background:
          'radial-gradient(ellipse at 25% 60%, rgba(212,175,55,0.045) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(37,99,235,0.03) 0%, transparent 50%), #0B0B0F',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-body font-600 tracking-widest border border-gold/30 text-gold bg-gold/5">
                🦁 {h.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-1">
              <motion.h1
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl xl:text-7xl font-headline font-800 text-white leading-[1.05] tracking-tight"
              >
                {h.h1_line1}
              </motion.h1>
              <motion.h1
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl xl:text-7xl font-headline font-800 text-gold leading-[1.05] tracking-tight"
              >
                {h.h1_line2}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-grey text-lg font-body leading-relaxed max-w-lg"
            >
              {h.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book"
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base"
              >
                {h.cta_primary}
                <ArrowRight size={17} />
              </a>
              <a
                href="#results"
                className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-xl text-base"
              >
                {h.cta_secondary}
              </a>
            </motion.div>

            {/* Social proof pills */}
            <motion.div
              custom={0.65}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-5"
            >
              {h.proof.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-grey text-sm font-body">
                  <span className="text-gold text-xs">✓</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
      </motion.div>
    </section>
  )
}
