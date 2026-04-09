import './App.css';
import Logo from './components/logo';

const textoOpciones = ['Categorias', 'Mi Estante', 'Favoritos'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className='opciones'>
          {textoOpciones.map((opcion, index) => (
            <li key={index} className='opcion'><p>{opcion}</p></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
