import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Navbar() {

  // const upVariant = 
  return (
    <nav>
      <motion.ul animate={{ y: [-50, 0] }} className='flex flex-row items-center justify-between w-[70vw] mb-4'>
        <li><Link activeClass='active' smooth spy to="#projetos">Projetos</Link></li>
        <li><Link activeClass='active' smooth spy to="#tecnologias">Tecnologias</Link></li>
        <li><Link activeClass='active' smooth spy to="#contato">Contato</Link></li>
      </motion.ul>
    </nav>
  )
}

export default Navbar