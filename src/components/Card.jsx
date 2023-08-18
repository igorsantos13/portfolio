import React from 'react'
import { motion } from 'framer-motion'

function Card(props) {
  return (
    <div className=''>

          <motion.div whileHover={{scale:1.2}} transition={{type: 'spring', stiffness:100}} className='flex flex-col items-center justify-center h-[500px]'>
            <h2 className='text-5xl font-poppins text-[#343a40]'>#{props.name}</h2>
            <img className='h-[250px] m-4 border-solid border-4 rounded-md border-[#343a40] p-2' src={props.img} alt={props.name} />
            <br />
            
            <ul className='flex flex-row items-center gap-4'>
                <li>
                    <a className='p-2 border-4 border-solid border-[#343a40] text-[#343a40]' href={props.project} target='_blank'>Acessar PROJETO</a>

                </li>
                <li>
                    <a className='p-2 border-4 border-solid border-[#343a40] text-[#343a40]' href={props.githubLink} target='_blank'>Ver CÓDIGO</a>

                </li>

            </ul>
          </motion.div>
    </div>
  )
}

export default Card