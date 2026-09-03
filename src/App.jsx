import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import SymptomChecker from './components/SymptomChecker.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-paper font-body text-slate">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main>
        <Hero />
        <Features />
        <SymptomChecker />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </div>
  )
}
