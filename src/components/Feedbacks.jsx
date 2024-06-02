import { motion } from 'framer-motion'
import React from 'react'


import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants/constants'
import { styles } from '../styles'


const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 xs:w-[320px] w-full rounded-3xl'
  >
    <p className={styles.sectionHeadText}>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wide text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center'>

        <div className='flex-1'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
        </div>

        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />

      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className={`${styles.padding} mt-12 bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div>
        <p className={styles.sectionSubText}>section sub text</p>
        <h2 className={styles.sectionHeadText}>section head text</h2>
      </motion.div>
      <div className={`mt-10 flex flex-wrap gap-7`}>
        {testimonials.map((item, index) => (
          <FeedbackCard
            key={item.name}
            index={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedback")