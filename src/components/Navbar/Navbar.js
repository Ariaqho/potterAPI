// import wand from './img/wand.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' sticky='top'>
          <Navbar.Brand>
              {/* <img src= width='40px' heigth='40px' />{''} */}
              <Nav.Link href='/'>Potter</Nav.Link>
          </Navbar.Brand>
          <Nav>
              <Nav.Link href='hechizos'>Hechizos</Nav.Link>
              <Nav.Link href='personajes'>Personajes</Nav.Link>
              <Nav.Link href='libros'>Libros</Nav.Link>

              {/* <Link to="/personajes">Personajes</Link> */}
          </Nav>
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;