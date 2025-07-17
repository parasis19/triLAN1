"use client"

import { motion } from "framer-motion"

const Hero = () => {
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(255, 167, 38, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden sm:px-10 " id="home">
      <div className=" container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 mb-12 md:mb-0 pb-60">
            <motion.h1
              className="text-4xl  md:text-5xl lg:text-6xl font-bold leading-tight text-[#000F08]"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
            >
              Empowering Your <span className=" text-[#FFA726] ">Digital Vision</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-md"
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
            >
              We transform ideas into exceptional digital experiences through innovative web development, app creation,
              and captivating design solutions.
            </motion.p>

            {/* <motion.a
              href="#contact"
              className="mt-8 inline-block bg-[#FFA726] text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            > */}
            <div className=" mt-8">
              <a href="/">
           <button className="rounded-full  relative flex h-[60px] w-80 items-center justify-center overflow-hidden bg-[#FFA726] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#000F08] before:duration-500 before:ease-out hover:shadow-[#000F08] hover:before:h-60 hover:before:w-80">
             <span className="relative z-10  rounded-full px-1">Let's Build Something Great </span>
           </button>
           </a>
            </div>  
            {/* </motion.a> */}
          </div>

          <motion.div className="md:w-1/2 relative " initial="hidden" animate="visible" variants={imageVariants}>
            <div className="relative w-500   z-10 ">
              <img
                src="/hero.png?height=500&width=600"
                alt="Digital Services Illustration"
                className="w-full  h-auto rounded-3xl  shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#1C1C2D] rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
