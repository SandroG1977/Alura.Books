import { useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';


const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Titulo = styled.h2`
    font-size: 24px;
    color: #FFF;
    margin-bottom: 10px;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    color: #FFF;
    margin-bottom: 20px;
`;

function Search() {
    const [txtBusqueda, setTxtBusqueda] = useState('');
    return (
        <SearchContainer>
            <Titulo>Sabés por donde empezar?</Titulo>
            <Subtitulo>Buscá por título, autor o categoría</Subtitulo>
            <Input
                placeholder="Buscar..."
                onBlur={event => setTxtBusqueda(event.target.value)}
            />
            <p>Texto de búsqueda: {txtBusqueda}</p>
        </SearchContainer>
    );
}

export default Search;