import React from 'react'
import { motion } from 'framer-motion'

function SkillCourse() {
  return (
    <motion.div className='skills-courses'>

        {/* skills */}
        <motion.div initial={{x:-100, opacity: 0}} 
        whileInView={{x:0, opacity:1}} 
        viewport={{once: true}}
        transition={{
          duration: 0.4,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}  className="">
          <h1 className='text-6xl text-[#ced4da]'>Habilidades 💻</h1>
          <ul>
            <li className='text-[#dee2e6] mt-1'>ReactJS</li>
            <li className='text-[#dee2e6] mt-1'>NextJS</li>
            <li className='text-[#dee2e6] mt-1'>TailwindCSS</li>
            <li className='text-[#dee2e6] mt-1'>GIT</li>
          </ul>
        </motion.div>

      <br />
      <hr />
      <br />
      
          {/* courses */}
        <motion.div initial={{x:100, opacity: 0}} 
        whileInView={{x:0, opacity:1}} 
        viewport={{once: true}}
        transition={{
          duration: 0.4,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }} className="">
          <h1 className='text-6xl text-[#ced4da]'>Cursos ✍️</h1>
          <ul>
            <li className='text-[#dee2e6] mt-1'>DevMedia</li>
            <li className='text-[#dee2e6] mt-1'>Cod3r (Udemy)</li>
            <li className='text-[#dee2e6] mt-1'>FreeCodeCamp (FronEnd)</li>
          </ul>
        </motion.div>


        </motion.div>
  )
}

export default SkillCourse