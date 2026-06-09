import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
  })
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="section-label">// who I am</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <div className="divider" />

            <p className="about__text">
              I'm a <strong>Full-Stack MERN Developer</strong> with hands-on experience building
              scalable and secure web applications using Node.js, Express.js, MongoDB, and React.
            </p>
            <p className="about__text">
              Developed production-level projects including a social media platform and a food delivery
              system supporting <span className="highlight">500+ concurrent users</span>. Skilled in
              RESTful API design, JWT authentication, and database optimization — reducing load times
              by <span className="highlight">80%</span>.
            </p>
            <p className="about__text">
              Seeking a <span className="highlight">Junior Backend or Full-Stack Developer</span>{' '}
              role where I can contribute to impactful products and keep growing.
            </p>

            <div className="about__info-grid">
              {[
                { icon: '📧', label: 'Email', value: 'ahhmddsamii77@gmail.com' },
                { icon: '📱', label: 'Phone', value: '01028628297' },
                { icon: '💻', label: 'GitHub', value: 'github.com/ahhmedsamii77' },
                { icon: '🎓', label: 'Graduation', value: '2026 — FCAI, CS & AI' },
              ].map((item) => (
                <div key={item.label} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1utdoGeBQcp2j8ejNNiUi01b5OHFz58me/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-cv about__cv-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download My CV
            </a>
          </motion.div>

          <motion.div
            className="about__right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
          >
            <div className="about__card-stack">
              <div className="code-card glass-card">
                <div className="code-card__header">
                  <div className="dot red" /><div className="dot yellow" /><div className="dot green" />
                  <span className="code-card__filename">ahmed.js</span>
                </div>
                <pre className="code-card__body">{`const ahmed = {
  role: "Full Stack Developer",
  stack: ["React", "Node.js",
          "MongoDB", "Express"],
  tools: ["TypeScript", "JWT",
          "Redis", "Framer Motion"],
  passion: "backend systems",
  status: "open to work 🚀",
  coffee: Infinity,
};

export default ahmed;`}</pre>
              </div>
              <motion.div className="floating-badge badge-node" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>⚡ Node.js</motion.div>
              <motion.div className="floating-badge badge-react" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>⚛️ React</motion.div>
              <motion.div className="floating-badge badge-mongo" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}>🍃 MongoDB</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
