import './scss/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';
import SpellsList from './components/Spells/Spells';
import Books from './components/Books/Books';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Home />} />
          <Route path="hechizos" element={<SpellsList />} />
          <Route path="personajes" element={<Characters />} />
          <Route path="libros" element={<Books />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>



  );
}


export default App;
