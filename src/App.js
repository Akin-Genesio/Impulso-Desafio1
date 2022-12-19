import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Desafio from './Components/Desafio';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
      </header>
      <body>
        <p>
          Minha parte
        </p>
        <Welcome name="Sara" />
        <Desafio
          phrase1 = "da Júlia."
          phrase2 = "do Antonio."
          phrase3 = "do Brasil."
        />
      </body>
    </div>
  );
}

export default App;
