import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div style={{ background: '#0a0c10', minHeight: '100vh' }}>
      <Nav scrolled={scrolled} />
      <Hero />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  )
}
