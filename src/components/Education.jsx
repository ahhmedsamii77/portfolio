import { motion } from 'framer-motion'
import './Education.css'

const education = [
  {
    degree: 'Bachelor of Computer Science & Artificial Intelligence (FCAI)',
    institution: 'Sadat Academy for Management Sciences – Information Systems',
    location: 'Sadat City, Egypt',
    period: 'Expected 2026',
    icon: '🎓',
    color: '#a855f7',
    type: 'Degree',
  },
]

const certifications = [
  {
    title: 'Front-End React.js Developer Certification',
    issuer: 'Route Academy',
    icon: '⚛️',
    color: '#60a5fa',
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Route Academy',
    icon: '🚀',
    color: '#6366f1',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
})

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// my background</span>
          <h2 className="section-title">Education & <span className="gradient-text">Certifications</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="edu__layout">
          {/* Education */}
          <div className="edu__section">
            <h3 className="edu__section-title">
              <span>🎓</span> Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="edu-card glass-card"
                style={{ '--edu-color': edu.color }}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
              >
                <div className="edu-card__top-bar" />
                <div className="edu-card__inner">
                  <div className="edu-card__icon-wrap">
                    <span className="edu-card__icon">{edu.icon}</span>
                  </div>
                  <div className="edu-card__info">
                    <div className="edu-card__header-row">
                      <span className="edu-card__type" style={{ color: edu.color, borderColor: `${edu.color}30`, background: `${edu.color}10` }}>
                        {edu.type}
                      </span>
                      <span className="edu-card__period">{edu.period}</span>
                    </div>
                    <h4 className="edu-card__degree">{edu.degree}</h4>
                    <p className="edu-card__institution">{edu.institution}</p>
                    <p className="edu-card__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="edu__section">
            <h3 className="edu__section-title">
              <span>🏆</span> Certifications
            </h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="cert-card glass-card"
                style={{ '--cert-color': cert.color }}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -4 }}
              >
                <div className="cert-card__top-bar" />
                <div className="cert-card__inner">
                  <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                    <span>{cert.icon}</span>
                  </div>
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
