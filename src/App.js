import './App.css';
import Navbar_component from './components/Navbar/Navbar';
import Listado_hechizos from './components/Hechizos/Hechizos';

function App() {
  Listado_hechizos()
  return (
    <div className="App">
      <Navbar_component />
    </div>
    
  );
}


export default App;
