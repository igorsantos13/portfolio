import React from 'react'

function SkillCourse() {
  return (
    <div className='skills-courses'>

        {/* skills */}
        <div className="">
          <h1 className='text-6xl text-[#ced4da]'>Habilidades 💻</h1>
          <ul>
            <li className='text-[#dee2e6] mt-1'>ReactJS</li>
            <li className='text-[#dee2e6] mt-1'>NextJS</li>
            <li className='text-[#dee2e6] mt-1'>TailwindCSS</li>
            <li className='text-[#dee2e6] mt-1'>GIT</li>
          </ul>
        </div>

      <br />
      <hr />
      <br />
      
          {/* courses */}
        <div className="courses">
          <h1 className='text-6xl text-[#ced4da]'>Cursos ✍️</h1>
          <ul>
            <li className='text-[#dee2e6] mt-1'>DevMedia</li>
            <li className='text-[#dee2e6] mt-1'>Cod3r (Udemy)</li>
            <li className='text-[#dee2e6] mt-1'>FreeCodeCamp (FronEnd)</li>
          </ul>
        </div>


        </div>
  )
}

export default SkillCourse