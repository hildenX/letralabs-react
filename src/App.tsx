import { useEffect } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import About from './components/About'
import Contact from './components/Contact'
import Process from './components/Process'
import Pricing from './components/Pricing'
import TechStack from './components/TechStack'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    const observe = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el))
    }
    observe()
    const t = setInterval(observe, 500)
    setTimeout(() => clearInterval(t), 5000)
    return () => { obs.disconnect(); clearInterval(t) }
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <About />
      <Contact />
      <Process />
      <Pricing />
      <TechStack />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
