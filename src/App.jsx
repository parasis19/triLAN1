"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundAnimation from "./components/BackgroundAnimation"
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel"

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <BackgroundAnimation />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <HorizontalScrollCarousel/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
