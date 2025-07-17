"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, PenTool } from "lucide-react"


const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Website Development",
      description:
        "Custom, responsive websites built with the latest technologies to deliver exceptional user experiences that drive results.",
      color: "#FFA726",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description:
        "Intuitive, high-performance mobile applications designed to engage users and solve real-world problems.",
      color: "#1C1C2D",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Ad Creation",
      description:
        "Eye-catching digital and graphic designs that communicate your brand message and captivate your audience.",
      color: "#FFA726",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C2D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFA726]">Services</span>
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
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full -z-10"></div>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 text-white`}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C1C2D] mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.div
                className="w-12 h-1 bg-[#FFA726] mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
