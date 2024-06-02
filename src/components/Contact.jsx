import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { }

  const handleSubmit = (e) => { }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.7] bg-black-100 rounded-2xl p-10'
      >
        {/* Title */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        {/* Form */}
        <form
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className='flex flex-col gap-4'>
            <span className='text-white font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary p-5 rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>
          <label className='flex flex-col gap-4'>
            <span className='text-white font-medium'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary p-5 rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>
          <label className='flex flex-col gap-4'>
            <span className='text-white font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary p-5 rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary px-8 py-3 rounded-xl w-fit font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[600px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")