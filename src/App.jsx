import { useEffect, useState } from 'react'
import tomodoro from './assets/tomodoro.png'
import pokedex from './assets/pokedex.png'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
// import { Virtual } from 'swiper/modules'
import 'swiper/css';
import './App.css'
import Card from './components/Card'
import SkillCourse from './components/SkillCourse'
import Main from './components/Main'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll()

  register()
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
        <Main />

        <motion.h1 
        initial={{y:-100, opacity: 0}} 
        whileInView={{y:0, opacity:1}} 
        
        transition={{
          duration: 0.4,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }} className='text-7xl text-[#343a40] mt-4 font-Poppins'>Principais Projetos</motion.h1>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay: 1}}
        className='hidden w-screen h-screen gap-2 md:grid grid-col-2 md:grid-cols-2 md:grid-row-2' id='#projetos'>
       
        <Card img={tomodoro} name={'Tomodoro'} githubLink={'https://github.com/igorsantos13/tomodoro'} project={'https://igorsantos13.github.io/tomodoro/'}/>
        <Card img={pokedex} name={'Pokédex'} githubLink={'https://github.com/igorsantos13/pokedex'} project={'https://igorsantos13.github.io/pokedex/'}/>
     
        <div className='md:flex flex-row items-center justify-center w-screen rounded-md bg-[#6c757d]'>
              <h1 className='text-9xl text-[#adb5bd]'>EM BREVE!</h1>
        </div>
        </motion.div>

        <div className='w-screen md:hidden'>
          <swiper-container
            
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
           
          >
            <swiper-slide className='cursor-pointer'>
              <Card img={tomodoro} name={'Tomodoro'} githubLink={'https://github.com/igorsantos13/tomodoro'} project={'https://igorsantos13.github.io/tomodoro/'}/>
              
            </swiper-slide>

            <swiper-slide className='cursor-pointer'>
              <Card img={pokedex} name={'Pokédex'} githubLink={'https://github.com/igorsantos13/pokedex'} project={'https://igorsantos13.github.io/pokedex/'}/>

            </swiper-slide>

            <swiper-slide className='cursor-pointer'>
            <div className='rounded-md flex flex-col items-center justify-center mt-[200px] bg-[#6c757d]'>
              <h1 className='text-9xl text-[#adb5bd]'>EM BREVE!</h1>
            </div>
            </swiper-slide>
          </swiper-container>

        </div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration:0.8}}  className='mt-4 flex flex-col items-center justify-center w-[90vw] h-[50vh] gap-24 bg-[#212529] rounded-3xl' id='#tecnologias'>
        <SkillCourse/>

        </motion.div>

      <div id='#contato'>
        <Contact />

      </div>
        
    </div>
  )
}

export default App
