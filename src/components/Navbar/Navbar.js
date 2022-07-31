import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand className='logo-brand'>          
              <Nav.Link href='/'><FontAwesomeIcon icon={faHatWizard} className='icon-hat'></FontAwesomeIcon>Potter</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href='hechizos'>Hechizos</Nav.Link>
              <Nav.Link href='personajes'>Personajes</Nav.Link>
              <Nav.Link href='libros'>Libros</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;