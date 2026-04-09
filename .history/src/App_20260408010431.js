import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="Logo Alura Books" />
        </div>
        <p><strong>Alura</strong>Books</p>
      </header>
    </div>
  );
}

export default App;
