import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import SpellsList from './components/Spells/Spells';

function App() {
  SpellsList()
  return (
    <div className="App">
      <NavbarComponent />
    </div>
    
  );
}


export default App;
