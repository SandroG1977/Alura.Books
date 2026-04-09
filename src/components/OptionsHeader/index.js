
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
        <OpcionesContainer>
            {textoOpciones.map((opcion, index) => (
                <Opcion key={index}><p>{opcion}</p></Opcion>
            ))}
        </OpcionesContainer>
    );
}

export default OptionsHeader;