import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';
import SpellsList from './components/Spells/Spells';

//Comentario de prueba 

function App() {
  //SpellsList()
  return (
    <div className="App">
      <NavbarComponent />
      <SpellsList />  
      <Characters />
    </div>
    
  );
}


export default App;
