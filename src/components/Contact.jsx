import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'


function Contact() {
  return (
    <div className="contact">
          <h1>Entre em contato comigo! 😄</h1>

          <a href="https://github.com/igorsantos13"><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/igorsantosdev/"><AiFillLinkedin/></a>
          <a href="mailto:igorsantos9513@outlook.com"><AiOutlineMail/></a>
          <p>igorsantos9513@outlook.com</p>

    </div>
  )
}

export default Contact