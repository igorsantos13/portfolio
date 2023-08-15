import React from 'react'

function SkillCourse() {
  return (
    <div className='skills-courses'>

        {/* skills */}
        <div className="skills">
          <h1>Habilidades 💻</h1>
          <ul>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>GIT</li>
          </ul>
        </div>

          {/* courses */}
        <div className="courses">
          <h1>Cursos ✍️</h1>
          <ul>
            <li>DevMedia</li>
            <li>Cod3r (Udemy)</li>
            <li>FreeCodeCamp (FronEnd)</li>
          </ul>
        </div>


        </div>
  )
}

export default SkillCourse