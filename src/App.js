import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="¡Hola! Soy el Item List Container" color="white"/>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
