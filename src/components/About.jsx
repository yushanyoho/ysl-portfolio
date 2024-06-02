/* library */
import React from 'react'
// tilt a component when hover
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

/* local components */
import { styles } from '../styles'
import { services } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'
import { intro } from '../constants/constants'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] green-pink-gradient shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary min-h-[280px] rounded-[20px] px-12 py-5 flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      {/* Intro */}
      <motion.p
        className='mt-4 text-secondary text-[16px]  max-w-3xl leading-[30px]'
      >
        {intro}
      </motion.p>

      {/* Services */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((item, index) => (
          <ServiceCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")