import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillFileText } from 'react-icons/ai'
import { m, motion, transform } from 'framer-motion'

function Contact() {
  // const downloadFile = (
  //   //'
  //   filePath,
  //   fileName = '15nz5N1ZmouUT-Lm50xNflTK378cnNbc7/view?usp=drive_link'
  // ) => {
  //   fetch('https://drive.google.com/file/d/' + filePath, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type' : 'application/pdf',
  //     },
  //   })
  //   .then(res => res.blob())
  //   .then(blob => {
  //     const url = window.URL.createObjectURL(new Blob([blob]))
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = fileName;
  //     document.body.appendChild(link)

  //     link.click()

  //     link.parentNode.removeChild(link);
  //   })

  // }
  return (
    <div className="mt-4">
          <motion.h1 initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:0.3, duration:.5}} className='text-5xl'>Entre em contato comigo! 🔊</motion.h1>
          <ul className='flex flex-col items-center justify-center w-screen '>
            <motion.li className='flex flex-row items-center' initial={{y:100, opacity:0}} viewport={{once: true}} whileInView={{y:0, opacity:1}} transition={{delay:0.5, duration:.5}}>
              <AiFillMail className='text-6xl'/>
              <a href="mailto:igorsantos9513@outlook.com" className='text-2xl'> igorsantos9513@outlook.com</a></motion.li>
            
          <div className='flex flex-row items-center justify-center gap-4 mt-3'>

            <motion.li initial={{y:100, opacity:0}} viewport={{once: true}} whileInView={{y:0, opacity:1}} transition={{delay:0.5, duration:.5}} className='flex flex-row items-center'>
              <AiFillGithub className='text-6xl'/>
               <a href="https://github.com/igorsantos13" className='text-2xl'>GitHub</a>
            </motion.li> 
            <motion.li initial={{y:100, opacity:0}} viewport={{once: true}} whileInView={{y:0, opacity:1}} transition={{delay:0.7, duration:.5}} className='flex flex-row items-center'> 
              <AiFillLinkedin className='text-6xl'/>
              <a href="https://www.linkedin.com/in/igorsantosdev/" className='text-2xl'>LinkedIn</a>
            </motion.li>
            <motion.li initial={{y:100, opacity:0}} viewport={{once: true}} whileInView={{y:0, opacity:1}} transition={{delay:0.9, duration:.5}} className='flex flex-row items-center'> 
              <AiFillFileText className='text-6xl'/>
              <a href="/igorsantos.pdf" download='igorsantos' target='_blank' rel='noreferrer' className='text-2xl'>Curriculo</a>
            </motion.li>
            </div>
          </ul>

    </div>
  )
}

export default Contact