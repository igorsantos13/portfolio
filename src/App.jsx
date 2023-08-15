import { useEffect, useState } from 'react'
import tomodoro from './assets/tomodoro.png'
import pokedex from './assets/pokedex.png'

import './App.css'
import Card from './components/Card'
import SkillCourse from './components/SkillCourse'
import Main from './components/Main'
import Contact from './components/Contact'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
        <Main />

        <h1>Principais Projetos</h1>

        <Card img={tomodoro} name={'Tomodoro'} githubLink={'https://github.com/igorsantos13/tomodoro'} project={'igorsantos13.github.io/tomodoro/'}/>
        <Card img={pokedex} name={'Pokédex'} githubLink={'https://github.com/igorsantos13/pokedex'} project={'igorsantos13.github.io/pkedex/'}/>

        <SkillCourse/>

        
        <Contact />
    </div>
  )
}

export default App
