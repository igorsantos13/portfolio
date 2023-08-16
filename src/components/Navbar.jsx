import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav>
      <ul className='flex flex-row items-center justify-between w-[70vw] mb-4'>
        <li><Link activeClass='active' smooth spy to="#projetos">Projetos</Link></li>
        <li><Link activeClass='active' smooth spy to="#tecnologias">Tecnologias</Link></li>
        <li><Link activeClass='active' smooth spy to="#contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar