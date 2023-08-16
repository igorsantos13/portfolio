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

          <AiFillGithub className='text-6xl'/>
            <li className='mb-4'> <a href="https://github.com/igorsantos13" className='text-2xl'>GitHub</a></li> <br />
          <AiFillLinkedin className='text-6xl'/>
            <li  className='mb-4'> <a href="https://www.linkedin.com/in/igorsantosdev/" className='text-2xl'>LinkedIn</a></li> <br />
            </div>
          </ul>

    </div>
  )
}

export default Contact