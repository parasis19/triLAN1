"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-bold text-[#000F08]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="/">
              <span className="text-[#FFA726]">TRIVIN</span>SAI
              </a>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-[#1C1C2D] hover:text-[#FFA726] transition-colors font-medium">
              Templates
            </a>
            <a href="#services" className="text-[#1C1C2D] hover:text-[#FFA726] transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-[#1C1C2D] hover:text-[#FFA726] transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-[#1C1C2D] hover:text-[#FFA726] transition-colors font-medium">
              Contact
            </a>
            <motion.a
              href="#contact"
              className="bg-[#FFA726] text-white px-6 py-2 rounded-full font-medium hover:bg-[#FF9800] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#1C1C2D] focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#services" className="block px-4 py-2 text-[#1C1C2D] hover:bg-gray-100" onClick={toggleMenu}>
              Services
            </a>
            <a href="#about" className="block px-4 py-2 text-[#1C1C2D] hover:bg-gray-100" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="block px-4 py-2 text-[#1C1C2D] hover:bg-gray-100" onClick={toggleMenu}>
              Contact
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-[#FFA726] font-medium hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
