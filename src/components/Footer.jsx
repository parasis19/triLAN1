"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import React from "react"



const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { icon: <Mail className="w-5 h-5" />, url: "#" },
  ]

  return (
    <footer className="bg-[#1C1C2D] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#FFA726]">TRIVIN</span>SAI
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering businesses with innovative digital solutions that drive growth and success in the digital
              landscape.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFA726] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Ad Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">123 Digital Avenue, Tech City</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">info@trivinsai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TRIVINSAI and Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-[#FFA726] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#FFA726] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
