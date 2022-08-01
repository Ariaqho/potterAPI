import React from 'react'
import houseLogo from '../../media/img/Logo-Hogwarts-3.png'
import grageaimg from '../../media/img/gragea-img.png'

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
          <h1>¿Te animas a probar una gragea de todos los sabores?</h1>
          <a className='link' href='mailto:faviola4@gmail.com' target='_blank' rel='noreferrer'><img className='grageaimg' alt="gragea-bertie-botts" src={grageaimg} width='150rem' heigth='150rem'/></a>
          </div>
        </div>
        </div>

  )
}

export default Home