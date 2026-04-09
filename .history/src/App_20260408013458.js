import './App.css';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul>
          <li><p>Categorias</p></li>
          <li><p>Mi Estante</p></li>
          <li><p>Favoritos</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
