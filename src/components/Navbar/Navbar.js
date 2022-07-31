// import logoWizard from './wizard-icon.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand>
              {/* <img src={logoWizard} width='40px' heigth='40px' alt='wizard hat'/>{''} */}
              <Nav.Link href='/'>Potter</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href='hechizos'>Hechizos</Nav.Link>
              <Nav.Link href='personajes'>Personajes</Nav.Link>
              <Nav.Link href='libros'>Libros</Nav.Link>

              {/* <Link to="/personajes">Personajes</Link> */}
          </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;