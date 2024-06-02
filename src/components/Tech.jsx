import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((item, index) => (
        <div className='w-28 h-28' key={item.name}>
          <BallCanvas icon={item.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")