import './App.css';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className='opciones'>
          <li className='opcion'><p>Categorias</p></li>
          <li className='opcion'><p>Mi Estante</p></li>
          <li className='opcion'><p>Favoritos</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
