import logo from '../assets/logo.svg';
import '../styles/App.css';
import  Hello from './Hello.js';
import Welcome from './WelcomeFunction.js';
import CounterButton from './Counter';
import ChangeName from './NameChange';
import Compteur from './Compteur';
import Personne from './Personne';
import ContactList from './ListeContact';
import Clock from './Timer';
import Fruits from './fruit';
import Ternaire from './ternaire';
import Garage from './garage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <Welcome/>
        <Hello name = 'toto'/>
        <CounterButton/>
        <ChangeName/>
        <Compteur/>
        <Personne/>
        <ContactList/>
        <Clock/>
        <Fruits/>
        <Ternaire/>
        <Garage/>
      </body>
    </div>
  );
}

export default App;
