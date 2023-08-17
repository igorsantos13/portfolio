import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

function Main() {
    const [userInfo, setUserinfo] = useState(0)
    const [repo, setRepos] = useState(0)
  
  const fetchUserInfo = () => {
    fetch('https://api.github.com/users/igorsantos13')
    .then(res => res.json())
    .then(data => setUserinfo(data))
  }

  const fetchRepos = () => {
    fetch('https://api.github.com/users/igorsantos13/repos')
    .then(res => res.json())
    .then(data => setRepos(data))
  }

  useEffect(()=> {
    fetchUserInfo()
    fetchRepos()
  }, [])
  return (
    <div>
        {userInfo && (
          
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }} className='flex flex-col items-center justify-center w-[90vw] h-[90vh] gap-24 bg-[#212529] rounded-3xl md:flex-row'>
            <motion.div whileHover={{scale: 1.1, transition:{duration: .4}}}> 
            <motion.img initial={{x: -1000}} animate={{x:0}} transition={{duration: 0.5, delay:1, ease: [0, 0.71, 0.2, 1.01]}} src={userInfo.avatar_url} alt={userInfo.name} className='rounded-full w-72 border-[#6c757d] border-4 border-solid'/>
            <motion.b initial={{x: -1000}} animate={{x:0}} transition={{duration: 0.5, delay:1, ease: [0, 0.71, 0.2, 1.01]}} className='text-[#dee2e6] hidden md:block'>{`@${userInfo.login}`}</motion.b>
            </motion.div>
  
            <motion.div initial={{x: 1000}} animate={{x:0}} transition={{duration: 0.5, delay:1, ease: [0, 0.71, 0.2, 1.01]}}
             className='w-[400px] p-2 flex flex-col items-center justify-center text-justify'>
            <h1 className='text-3xl font-bold text-[#ced4da]'>{userInfo.name}</h1>
  
            <p className='m-4 text-justify text-[#dee2e6]'>Desenvolvedor Frontend com habilidades em ReactJS. Tenho experiência na criação de interfaces de usuário
  responsivas para web e dispositivos móveis utilizando
  TailwindCSS.</p>
  
            <ul className='flex flex-row gap-2'>
                <li>
                    <a className='text-5xl text-[#dee2e6]' href="https://github.com/igorsantos13" target='_blank'><AiFillGithub /></a>
                </li>
                <li>

                <a className='text-5xl text-[#dee2e6]' href="https://www.linkedin.com/in/igorsantosdev/" target='_blank'><AiFillLinkedin/></a>
                </li>
            </ul>
            </motion.div>
          </motion.div>
          )}
    </div>
  )
}

export default Main