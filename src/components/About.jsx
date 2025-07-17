"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const About = () => {
  const features = [
    "Innovative digital solutions",
    "Expert team of developers and designers",
    "Tailored approach for each project",
    "Commitment to excellence",
    "Cutting-edge technologies",
    "Dedicated support and maintenance",
  ]

  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
            <video
             src="/vidlogo.mp4"
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-auto  shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 rounded-xl"
            />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#FFA726] rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFA726] mb-6">
              About <span className="text-[#000F08]">TRIVINSAI</span>
            </h2>
            <p className="text-gray-600 mb-6">
              TRIVINSAI and Company is a forward-thinking digital agency dedicated to transforming businesses through
              innovative digital solutions. We combine creativity, technical expertise, and strategic thinking to
              deliver exceptional results that help our clients succeed in the digital world.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of passionate professionals is committed to excellence in every project we undertake. We believe
              in building long-term relationships with our clients based on trust, transparency, and outstanding
              service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-[#FFA726] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
           <div className="flex gap-4 mt-8 "> 
            <a href="#contact">
           <button className="rounded-full relative flex h-[50px] w-60 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-60 hover:before:w-60">
             <span className="relative z-10 rounded-lg px-1">Learn more About us </span>
           </button>
           </a>
          </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
