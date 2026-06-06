import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    label: 'Languages & Core',
    icon: '⚡',
    color: '#f59e0b',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frontend',
    icon: '⚛️',
    color: '#60a5fa',
    skills: [
      'React.js', 'Next.js', 'React Router', 'Framer Motion',
      'Zustand', 'Redux Toolkit', 'React Query (TanStack)',
      'React Hook Form', 'shadcn/ui', 'Tailwind CSS',
      'Context API', 'Bootstrap', 'Axios',
    ],
  },
  {
    label: 'Backend & Database',
    icon: '🛢️',
    color: '#68d391',
    skills: [
      'Node.js', 'Express.js', 'RESTful APIs',
      'MongoDB', 'SQL', 'JWT Authentication',
      'Middleware', 'Redis Caching', 'MVC Architecture',
    ],
  },
  {
    label: 'Tools & Workflow',
    icon: '🛠️',
    color: '#a78bfa',
    skills: ['Git', 'GitHub', 'Postman', 'Responsive Web Design'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
}

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } }
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// what I use</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="skill-category__header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category__title" style={{ color: cat.color }}>{cat.label}</h3>
              </div>
              <motion.div
                className="skill-badges"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    style={{ '--badge-color': cat.color }}
                    variants={item}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
