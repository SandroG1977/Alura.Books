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
    margin:5px;
`;

const iconosOpciones = [perfil, carrito];

function IconesHeader() {
    return (
        <IconosContainer>
            {iconosOpciones.map((icono, index) => (
                <Icono><img src={icono} alt={`Icono ${index}`} /></Icono>
            ))}
        </IconosContainer>
    );
}

export default IconesHeader;    