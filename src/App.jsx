import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState([])
  const [repos, setRepos] = useState([])

  const fetchUserData = () => {
    fetch('https://api.github.com/users/igorsantos13')
    .then(res => res.json())
    .then(data => setUserData(data))
  }

  const fetchRepos = () => {
    fetch("https://api.github.com/users/igorsantos13/repos")
    .then(res => res.json())
    .then(data => setRepos(data))
  }

  useEffect(()=>{
    fetchUserData()
    fetchRepos()
  }, [])

  return (
    <>
    <h1>{userData.name}</h1>
    <p>{userData.bio}</p>
      
      <br />

        {repos.length > 0 && (
          <ul>
            {repos.map(repo => (
              <li>{repo.name}</li>
            ))}
          </ul>
        )}
    </>
  )
}

export default App
