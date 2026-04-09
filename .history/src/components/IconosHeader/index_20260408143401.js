import './styles.css';
import perfil from '../../images/perfil.svg';
import carrito from '../../images/sacola.svg';
import styled from 'styled-components';

const IconosContainer = styled.ul`
    display: flex;
    list-style: none;
    align - items: center;
`;

const Icono = styled.li`
    width: 40px;
    margin - right: 25px;
`;

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