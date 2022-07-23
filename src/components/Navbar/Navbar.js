// import wand from './img/wand.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

function Navbar_component() {
  return (
    <Navbar bg='dark' variant = 'dark' sticky='top'>
        <Navbar.Brand>
            {/* <img src= width='40px' heigth='40px' />{''} */}
            Potter
        </Navbar.Brand>
        <Nav>
            <Nav.Link href='hechizos'>Hechizos</Nav.Link>
            <Nav.Link href='personajes'>Personajes</Nav.Link>
            <Nav.Link href='libros'>Libros</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Navbar_component;