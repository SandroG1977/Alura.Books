import perfil from '../../images/perfil.svg';
import carrito from '../../images/sacola.svg';
import styled from 'styled-components';

const IconosContainer = styled.ul`
    display: flex;
`;

const Icono = styled.li`
    width: 40px;
    margin - right: 25px;
`;

const iconosOpciones = [perfil, carrito];

function IconesHeader() {
    return (
        <ul className="IconosContainer">
            {iconosOpciones.map((icono, index) => (
                <Icono><img src={icono} alt={`Icono ${index}`} /></Icono>
            ))}
        </ul>
    );
}

export default IconesHeader;    