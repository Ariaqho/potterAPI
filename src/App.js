import './App.css';
import Navbar_component from './components/Navbar/Navbar';
import Spells_list from './components/Spells/Spells';

function App() {
  Spells_list()
  return (
    <div className="App">
      <Navbar_component />
    </div>
    
  );
}


export default App;
