import './App.css';
import Logo from './components/logo';
import OptionsHeader from './components/OptionsHeader';
import perfil from './images/perfil.svg';
import carrito from './images/sacola.svg';


const iconosOpciones = [perfil, carrito];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
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
