import './styles.css';
import perfil from '../../images/perfil.svg';
import carrito from '../../images/sacola.svg';


const iconosOpciones = [perfil, carrito];

function IconesHeader() {
    return (
        <ul className="iconos">
            {iconosOpciones.map((icono, index) => (
                <li key={index} className='icono'><img src={icono} alt={`Icono ${index}`} /></li>
            ))}
        </ul>
    );
}

export default IconesHeader;    