import { useEffect, useState } from 'react'
import tomodoro from './assets/tomodoro.png'
import pokedex from './assets/pokedex.png'

import './App.css'
import Card from './components/Card'
import SkillCourse from './components/SkillCourse'
import Main from './components/Main'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
        <Main />

        <h1 className='text-7xl text-[#343a40] mt-4'>Principais Projetos</h1>
        <div className='grid w-screen h-screen grid-cols-2 gap-8 grid-row-2' id='#projetos'>
        <Card img={tomodoro} name={'Tomodoro'} githubLink={'https://github.com/igorsantos13/tomodoro'} project={'https://igorsantos13.github.io/tomodoro/'}/>
        <Card img={pokedex} name={'Pokédex'} githubLink={'https://github.com/igorsantos13/pokedex'} project={'https://igorsantos13.github.io/pokedex/'}/>

        <div className='-mt-[200px] flex flex-row items-center justify-center w-screen rounded-md bg-[#6c757d]'>
          <h1 className='text-9xl text-[#adb5bd]'>EM BREVE!</h1>
        </div>
      
        </div>

        <div className='mt-4 flex flex-col items-center justify-center w-[90vw] h-[50vh] gap-24 bg-[#212529] rounded-3xl' id='#tecnologias'>
        <SkillCourse/>

        </div>

      <div id='#contato'>
        <Contact />

      </div>
        
    </div>
  )
}

export default App
