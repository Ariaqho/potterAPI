import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer__col1">
        <div className='hat-icon-footer'><FontAwesomeIcon icon={faHatWizard}></FontAwesomeIcon></div>
        <div className='description-footer'>
          <h2>Potter</h2>
          <p>Proyecto final del curso de frontend asociación software libre Chile - USACH <br />proyecto creado por:</p>
        </div>
      </div>
      <div className="footer__col2">
        <h4 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>@Faviola</h4>
        <div className='contact__icons-1 d-flex justify-content-evenly'>
          <a className='link' href='https://github.com/FaviolaPaz' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          <a className='link' href='https://linkedin.com/in/faviola-paz' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
          <a className='link' href='mailto:faviola4@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
        </div>
      </div>
      <div className="footer__col3">
        <h4 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>@Felipe</h4>
        <div className='contact__icons-2 d-flex justify-content-evenly'>
          <a className='link' href='https://github.com/Ariaqho' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          <a className='link' href='https://linkedin.com/in/felipe-maldonado-nunez/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
          <a className='link' href='mailto:felipe.arica@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer