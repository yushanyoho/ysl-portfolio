import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const TEMPLATE_ID = "template_lo7dvyv";
const SERVICE_ID = "service_cfwosir";
const PUBLIC_KEY = "9HYC9L-Nm4UBYx2CZ";

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setLoading(true);

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Yushan",
        from_email: form.email,
        to_email: "lyushanyoho@gmail.com",
        message: form.message
      },
      PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible!");
      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (err) => {
      setLoading(false);
      console.log(err);
      alert("Somthing went wrong! Please try again.");
    });
  }

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