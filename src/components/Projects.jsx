import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    name: 'FoodDel',
    tagline: 'E-Commerce Food Delivery Application',
    description: 'Full-stack food delivery platform supporting 500+ concurrent users. Features a Stripe payment gateway, interactive menu dashboard, JWT-based user authentication, and automatic order verification email alerts.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe Payments', 'React Query', 'Zustand', 'Tailwind CSS', 'Nodemailer'],
    color: '#f59e0b',
    icon: '🍔',
    highlights: ['Stripe payment integration', 'Nodemailer email alerts', 'React Query server state'],
    github: 'https://github.com/ahhmedsamii77/food_del_fe0',
    demo: 'https://food-del-fe0.vercel.app/',
  },
  {
    name: 'Socialite',
    tagline: 'Full-Stack Social Media Platform',
    description: 'A rich social network featuring real-time messaging and notifications via Socket.io, high-performance image uploads to AWS S3, and Google OAuth & JWT authentication for seamless user onboarding.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Google OAuth', 'React Query', 'Tailwind CSS v4'],
    color: '#6366f1',
    icon: '💬',
    highlights: ['Real-time Socket.io chat', 'AWS S3 image uploads', 'Google OAuth login'],
    github: 'https://github.com/ahhmedsamii77/socialite_ui',
    demo: 'https://socialite-ui.vercel.app/',
  },
  {
    name: 'DriveEase',
    tagline: 'Full-Stack Vehicle Booking Solution',
    description: 'A comprehensive car rental web application with secure customer validation using Joi/Formik/Yup, image uploading via Cloudinary, and real-time vehicle booking status with automatic mail confirmations.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Formik & Yup', 'React Query', 'Tailwind CSS v4', 'Nodemailer'],
    color: '#22d3ee',
    icon: '🚗',
    highlights: ['Cloudinary image hosting', 'Robust Formik & Joi validation', 'Automated email confirmations'],
    github: 'https://github.com/ahhmedsamii77/car_rental_fullStack',
    demo: 'https://car-rental-seven-flame.vercel.app/',
  },
  {
    name: 'ShopCart',
    tagline: 'Digital E-Commerce Storefront',
    description: 'A fast and responsive client-side shopping application utilizing React 19 and Tailwind CSS v4, featuring robust forms validation via React Hook Form & Zod, and state management via Zustand.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'React Router', 'Zustand', 'React Query', 'React Hook Form', 'Zod', 'Axios'],
    color: '#ec4899',
    icon: '🛒',
    highlights: ['Zustand cart management', 'React Hook Form + Zod', 'Tailwind CSS v4 styling'],
    github: 'https://github.com/ahhmedsamii77/SHOPCART',
    demo: 'https://shopcart-kappa-six.vercel.app/',
  },
  {
    name: 'Klimate',
    tagline: 'Real-Time Weather Platform',
    description: 'A responsive weather dashboard built with React 18, utilizing Tailwind CSS v4 and Recharts. Implements Clerk for user access control, and React Query with Axios for caching API weather data.',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS v4', 'React Query', 'Axios', 'React Router', 'Recharts', 'Clerk Auth'],
    color: '#68d391',
    icon: '🌤️',
    highlights: ['Clerk User Authentication', 'Recharts weather trends', 'React Query state caching'],
    github: 'https://github.com/ahhmedsamii77/klimate',
    demo: 'https://klimate-ywkn.vercel.app/',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// what I've built</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="project-card glass-card"
              style={{ '--project-color': project.color }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__top-bar" />

              <div className="project-card__header">
                <div className="project-icon-wrap" style={{ background: `${project.color}18`, border: `1px solid ${project.color}35` }}>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" title="GitHub">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link icon-link--demo" style={{ '--link-color': project.color }} title="Live Demo">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              <h3 className="project-name" style={{ color: project.color }}>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map(h => (
                  <span key={h} className="project-highlight">
                    <span className="highlight-dot" style={{ background: project.color }} />
                    {h}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="project-tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
