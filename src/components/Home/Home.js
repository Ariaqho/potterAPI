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
        
      <div className='container-grageas'>
        <div className='container-grageas__wrapper'>
          <h1>¿Hechizo?¿Libro?¿Personaje?</h1>
          <h3 className='grageas__text'>Toma una gragea y descúbrelo</h3>
          {/* <insertar icono con link></insertar> */}
          </div>
        </div>
        </div>

  )
}

export default Home