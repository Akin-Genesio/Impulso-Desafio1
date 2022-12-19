import logo from './logo.svg';
import './App.css';
import Desafio from './Components/Desafio/Desafio';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Desafio/>
      </header>
    </div>
  );
}

export default App;
