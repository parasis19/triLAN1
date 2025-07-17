"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "marketing@trivinsai.com",
      link: "mailto:marketing@trivinsai.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 81048 80343",
      link: "tel:91 81048 80343",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Digital Avenue, Tech City",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C2D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get In <span className="text-[#FFA726]">Touch</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#FFA726] mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="mt-6 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:bg-[#1C1C2D] hover:text-white group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFA726]/10 text-[#FFA726] mb-4 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-all duration-300">
                {info.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-all duration-300">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#1C1C2D] mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="bg-[#FFA726] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 167, 38, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className="bg-[#1C1C2D] p-8 lg:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Discuss Your Project</h3>
                <p className="text-gray-300 mb-8">
                  Ready to take your digital presence to the next level? Contact us today to discuss how we can help you
                  achieve your goals.
                </p>
                <ul className="space-y-4">
                  <li className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="text-[#FFA726] w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Free consultation for new projects</span>
                  </li>
                  <li className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="text-[#FFA726] w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Detailed project proposals and timelines</span>
                  </li>
                  <li className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="text-[#FFA726] w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="text-[#FFA726] w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Ongoing support and maintenance options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
