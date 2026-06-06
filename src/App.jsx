import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>Designed & Built by <span className="gradient-text">Ahmed Samy Kamal</span></p>
          <p className="footer-sub">Full Stack Developer · MERN Stack</p>
        </div>
      </footer>
    </div>
  )
}

export default App
