import './styles.css';
import styled from 'styled-components';

const OpcionesContainer = styled.ul`
    display: flex;
`;

const Opcion = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;



const textoOpciones = ['Categorias', 'Mi Estante', 'Favoritos'];


function OptionsHeader() {
    return (
        <ul className='opciones'>
            {textoOpciones.map((opcion, index) => (
                <li key={index} className='opcion'><p>{opcion}</p></li>
            ))}
        </ul>
    );
}

export default OptionsHeader;