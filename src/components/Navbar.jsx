import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Navbar() {

  // const upVariant = 
  return (
    <nav className=''>
      <motion.ul animate={{ y: [-50, 0] }} className='w-[90vw] left-10 md:left-16 flex flex-row items-center justify-around '>
        <li className='cursor-pointer'><Link activeClass='active' smooth spy to="#projetos">Projetos</Link></li>
        <li className='cursor-pointer'><Link activeClass='active' smooth spy to="#tecnologias">Tecnologias</Link></li>
        <li className='cursor-pointer'><Link activeClass='active' smooth spy to="#contato">Contato</Link></li>
      </motion.ul>
    </nav>
  )
}

export default Navbar