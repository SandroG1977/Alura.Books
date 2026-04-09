import './App.css';
import Logo from './components/logo';
import perfil from './images/perfil.svg';
import carrito from './images/sacola.svg';

const textoOpciones = ['Categorias', 'Mi Estante', 'Favoritos'];
const iconosOpciones = [perfil, carrito];

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
        <ul className="iconos">
          {iconosOpciones.map((icono, index) => (
            <li key={index} className='icono'><img src={icono} alt={`Icono ${index}`} /></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
