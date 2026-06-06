import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Egypt',
    period: '2024 – Present',
    type: 'Freelance',
    color: '#6366f1',
    points: [
      'Architected and deployed full-stack web applications using TypeScript, React.js, Next.js, and Node.js.',
      'Built dynamic UIs with React Router for client-side navigation and Framer Motion for smooth page transitions and micro-animations.',
      'Managed all HTTP communication via Axios, integrating with RESTful APIs and handling interceptors, error states, and caching.',
      'Implemented JWT authentication, role-based access control, and MVC-structured backend APIs.',
      'Integrated MongoDB and SQL databases with optimized queries and reliable data models.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// where I've worked</span>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline__item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="timeline__line">
                <motion.div
                  className="timeline__dot"
                  style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                <div className="timeline__track" />
              </div>

              <div className="timeline__content glass-card">
                <div className="exp__top">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <div className="exp__meta">
                      <span className="exp__company">{exp.company}</span>
                      <span className="exp__separator">·</span>
                      <span className="exp__location">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="exp__right">
                    <span className="exp__period">{exp.period}</span>
                    <span className="exp__type" style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}10` }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="exp__points">
                  {exp.points.map((pt, j) => (
                    <motion.li
                      key={j}
                      className="exp__point"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08 }}
                    >
                      <span className="exp__bullet" style={{ background: exp.color }} />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
