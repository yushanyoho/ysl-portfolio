import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary w-full sm:w-[360px] p-5 rounded-2xl"
      >
        {/* Card Media */}
        <div className='relative w-full h-[250px]'>
          {/* Image */}
          <img
            src={image}
            alt={name}
            className='rounded-2xl w-full h-full object-cover'
          />

          {/* Github Badge */}
          <div className='absolute inset-0 m-3 flex justify-end card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className='object-contain w-1/2 h-1/2'
              />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text[14px]'>{description}</p>
        </div>

        {/* Tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      {/* Description */}
      <div className='w-full'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl mt-3 leading-[30px]'
        >
          Following projects showcasees my skills and experience through real-work examples.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((item, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")