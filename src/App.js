import logo from './logo.svg';
import './App.css';

function App() {
  const persona ={nombre: "agustina", mail:"agustinasegat@gmail.com"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {persona.nombre} con {persona.mail}
        </p>
        <ButtonComponent/>
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
