import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="logo-bracket">&lt;</span>
          <span className="gradient-text">AS</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="navbar__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link ${active === href.slice(1) ? 'active' : ''}`}
              >
                {label}
                {active === href.slice(1) && (
                  <motion.span className="link-dot" layoutId="activeDot" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:ahhmddsamii77@gmail.com" className="btn btn-primary navbar__cta">
          Hire Me
        </a>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="mailto:ahhmddsamii77@gmail.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
