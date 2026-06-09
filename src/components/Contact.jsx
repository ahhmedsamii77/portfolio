import { motion } from 'framer-motion'
import './Contact.css'

const contactLinks = [
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
    label: 'Email',
    value: 'ahhmddsamii77@gmail.com',
    href: 'mailto:ahhmddsamii77@gmail.com',
    color: '#6366f1',
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
    label: 'Phone',
    value: '01028628297',
    href: 'tel:+201028628297',
    color: '#22d3ee',
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>),
    label: 'GitHub',
    value: 'github.com/ahhmedsamii77',
    href: 'https://github.com/ahhmedsamii77',
    color: '#a855f7',
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>),
    label: 'Download CV',
    value: 'View My Resume',
    href: 'https://drive.google.com/file/d/1utdoGeBQcp2j8ejNNiUi01b5OHFz58me/view?usp=sharing',
    color: '#f59e0b',
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact__header"
        >
          <span className="section-label">// get in touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="contact__layout">
          <div className="contact__cards">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card glass-card"
                style={{ '--c-color': link.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="contact-card__icon" style={{ background: `${link.color}15`, border: `1px solid ${link.color}30`, color: link.color }}>
                  {link.icon}
                </div>
                <div className="contact-card__info">
                  <span className="contact-card__label">{link.label}</span>
                  <span className="contact-card__value">{link.value}</span>
                </div>
                <div className="contact-card__arrow" style={{ color: link.color }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="contact__cta-panel glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cta-panel__glow" />
            <div className="cta-status">
              <div className="status-dot" />
              <span>Available for work</span>
            </div>
            <h3 className="cta-panel__title">Ready to build something <span className="gradient-text">amazing?</span></h3>
            <p className="cta-panel__desc">
              I'm currently seeking a <strong>Junior Backend or Full-Stack Developer</strong> role.
              Let's discuss how I can contribute to your team's success.
            </p>
            <div className="cta-panel__actions">
              <a href="mailto:ahhmddsamii77@gmail.com" className="btn btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Send Email
              </a>
              <a
                href="https://drive.google.com/file/d/1utdoGeBQcp2j8ejNNiUi01b5OHFz58me/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-cv"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
            </div>
            <div className="cta-panel__skills-strip">
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Next.js'].map(s => (
                <span key={s} className="strip-badge">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
