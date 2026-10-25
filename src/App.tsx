import { motion, useScroll } from 'framer-motion'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Work } from './components/sections/Work'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Philosophy } from './components/sections/Philosophy'
import { Contact } from './components/sections/Contact'

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Thin scroll-progress bar fixed above the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <Nav />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
