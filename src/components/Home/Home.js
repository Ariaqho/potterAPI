import React from 'react'
import houseLogo from '../../media/img/Logo-Hogwarts-3.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__title'>
        <h1>Bienvenido a Hogwarts</h1>
      </div>
      <div className='home__logo'>
        <img className='home__img' alt="logo-hogwarts" src={houseLogo}/> 
      </div>
    </div>

  )
}

export default Home