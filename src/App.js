import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'



function App() {

  return (
    <div className="App">
      <Navbar/>
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

const ButtonComponent=()=>{
  return <button>Click aca!</button>
}

export default App;
