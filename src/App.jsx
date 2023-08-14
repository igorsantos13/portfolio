import { useEffect, useState } from 'react'
import tomdoro from './assets/tomodoro.png'
import './App.css'

function App() {
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

  console.log(userInfo)
  //fetch data [x]
  //display main info from github []
  //display tomodoro and pokedex []
  //future: display all (or a few of) repositories []
    //fetch all repos [x]
  return (
    <>
        {userInfo && (
        <div>
          <img src={userInfo.avatar_url} alt={userInfo.name} />
          <b>{`@${userInfo.login}`}</b>

          <h1>{userInfo.name}</h1>

          <a href="https://github.com/igorsantos13" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/igorsantosdev/" target='_blank'>LinkedIn</a>
        </div>
        )}

        <div>
          <h1>Principais Projetos</h1>

          <div className='card'>
            <img src={tomdoro} alt="tomodoro" />
            <h2>Tomodoro</h2>
            <a href='https://igorsantos13.github.io/tomodoro/' target='_blank'>Ver PROJETO</a>
            <a href='https://github.com/igorsantos13/tomodoro' target='_blank'>Ver CÓDIGO</a>
          </div>
        </div>
    </>
  )
}

export default App
