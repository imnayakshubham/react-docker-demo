import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='textColor'>{process.env.REACT_APP_RANDOM_TEXT}</p>
      </header>
    </div>
  );
}

export default App;
