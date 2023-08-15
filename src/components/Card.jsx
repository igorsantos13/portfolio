import React from 'react'


function Card(props) {
  return (
    <div className='card'>

          <div >
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <br />
            
            <ul>
                <li>
                    <a href={props.project} target='_blank'>Acessar PROJETO</a>

                </li>
                <li>
                    <a href={props.githubLink} target='_blank'>Ver CÓDIGO</a>

                </li>

            </ul>
          </div>
        </div>
  )
}

export default Card