import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer__col1">
          <h2>ICONO</h2>
          <p>Proyecto final curso frontend asociación software libre Chile - USACH <br/>proyecto creado por:</p>
          </div>
          <div className="footer__col2">
            <h4>@Faviola</h4>
            <ul>
              <li><a className= 'link' href='https://github.com/FaviolaPaz' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>Github</a></li>
              <li><a className= 'link' href='https://google.cl' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>LinkedIn</a></li>
              <li><a className= 'link' href='https://google.cl' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>Gmail</a></li>
            </ul>
          </div>
          <div className="footer__col3">
            <h4>@Felipe</h4>
            <ul>
              <li><a className= 'link' href='https://github.com/Ariaqho' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>Github</a></li>
              <li><a className= 'link' href='https://google.cl' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>LinkedIn</a></li>
              <li><a className= 'link' href='https://google.cl' target='_blank' rel='noreferrer' style={{ textDecoration: 'none'}}>Gmail</a></li>
            </ul>
          </div>
    </footer>
  )
}

export default Footer