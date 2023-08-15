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
          
          <div className='w-screen gap-24 flex flex-row items-center justify-center'>
            <motion.div whileHover={{scale: 1.1, transition:{duration: .4}}}> 
            <img src={userInfo.avatar_url} alt={userInfo.name} className='w-72'/>
            <b>{`@${userInfo.login}`}</b>
            </motion.div>
  
            <div className='w-[400px] p-2 flex flex-col items-center justify-center text-justify'>
            <h1>{userInfo.name}</h1>
  
            <p>Desenvolvedor Frontend com habilidades em ReactJS. Tenho experiência na criação de interfaces de usuário
  responsivas para web e dispositivos móveis utilizando
  TailwindCSS.</p>
  
            <ul className='flex flex-row gap-2'>
                <li>
                    <a href="https://github.com/igorsantos13" target='_blank'><AiFillGithub/></a>
                </li>
                <li>

                <a href="https://www.linkedin.com/in/igorsantosdev/" target='_blank'><AiFillLinkedin/></a>
                </li>
            </ul>
            </div>
          </div>
          )}
    </div>
  )
}

export default Main