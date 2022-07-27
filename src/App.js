import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';
import SpellsList from './components/Spells/Spells';
import Books from './components/Books'
import Home from './components/Home/Home'

//Comentario de prueba 

function App() {
  //SpellsList()
  return (
    // <div className="App">
    //   <NavbarComponent />
    //   <SpellsList />  
    //   <Characters />
    //   <Books />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Home />} />
          <Route path="hechizos" element={<SpellsList />} />
          <Route path="personajes" element={<Characters />} />
          <Route path="libros" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>



  );
}


export default App;
