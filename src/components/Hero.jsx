import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Hero flexbox row */}
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto w-full flex flex-row items-start gap-5`}>
        {/* dot-line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet-100' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>
        {/* Hero Text */}
        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-violet-100'>Yushan</span></h1>
          <p>I create Web Applications, Product Prototypes, and your backyard gardens : )</p>
        </div>
      </div>

      {/* Three Drei Model */}
      <ComputersCanvas />

      {/* Scroll down icon */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero