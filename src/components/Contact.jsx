import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'


function Contact() {
  return (
    <div className="mt-4">
          <h1 className='text-5xl'>Entre em contato comigo! 🔊</h1>
          <ul className='flex flex-col items-center justify-center w-screen '>
          <AiFillMail className='text-6xl'/>
            <li><a href="mailto:igorsantos9513@outlook.com" className='text-2xl'> igorsantos9513@outlook.com</a></li>
            
          <div className='flex flex-row items-center justify-center gap-4 mt-3'>

            <li className='flex flex-row items-center'>
              <AiFillGithub className='text-6xl'/>
               <a href="https://github.com/igorsantos13" className='text-2xl'>GitHub</a>
            </li> 
            <li  className='flex flex-row items-center'> 
              <AiFillLinkedin className='text-6xl'/>
              <a href="https://www.linkedin.com/in/igorsantosdev/" className='text-2xl'>LinkedIn</a></li>
            </div>
          </ul>

    </div>
  )
}

export default Contact