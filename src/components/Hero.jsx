import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React Developer',
  'Backend Engineer',
]

function TypewriterText({ texts }) {
  const [display, setDisplay] = React.useState('')
  const [idx, setIdx] = React.useState(0)
  const [charIdx, setCharIdx] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const current = texts[idx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 40)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    }
    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, texts])

  return (
    <span className="typewriter">
      {display}<span className="cursor">|</span>
    </span>
  )
}

const floatVariants = {
  animate: (i) => ({
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }
  })
}

const shapes = [
  { size: 280, top: '10%', left: '-5%', opacity: 0.07, color: '#6366f1' },
  { size: 200, top: '60%', right: '-3%', opacity: 0.07, color: '#a855f7' },
  { size: 150, top: '30%', right: '10%', opacity: 0.05, color: '#22d3ee' },
  { size: 100, top: '75%', left: '5%', opacity: 0.06, color: '#ec4899' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="hero__orb"
          style={{ width: s.size, height: s.size, top: s.top, left: s.left, right: s.right, background: s.color, opacity: s.opacity }}
          custom={i}
          variants={floatVariants}
          animate="animate"
        />
      ))}

      <div className="container hero__content">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <span className="hero__greeting">
            <span className="greeting-dot" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1 className="hero__name" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Hi, I'm <span className="hero__name-highlight">Ahmed Samy</span>
        </motion.h1>

        <motion.div className="hero__role" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
          <TypewriterText texts={roles} />
        </motion.div>

        <motion.p className="hero__bio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          Full-Stack MERN Developer building scalable, secure web applications with{' '}
          <span className="gradient-text">React, Node.js, MongoDB & TypeScript</span>.
          Passionate about clean architecture and high-performance systems.
        </motion.p>

        <motion.div className="hero__actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}>
          <a href="#projects" className="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1VHDUTTH5DzWDmcr4KbJj1TIRHag9qrhf/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-cv"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
          <a href="https://github.com/ahhmedsamii77" target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Contact
          </a>
        </motion.div>

        <motion.div className="hero__stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}>
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '500+', label: 'Concurrent Users' },
            { value: '80%', label: 'Load Time Reduced' },
            { value: '2026', label: 'CS Graduate' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value gradient-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero__scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}
