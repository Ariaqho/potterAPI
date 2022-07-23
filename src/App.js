import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';
import Listado_hechizos from './components/Hechizos/Hechizos';

function App() {
  Listado_hechizos()
  return (
    <div className="App">
      <NavbarComponent />
      <Characters characters={Characters} />   
    </div>
    
  );
}


export default App;
