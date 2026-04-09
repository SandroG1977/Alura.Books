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

const Subtitulo = styled.p`
    font-size: 16px;
    color: #FFF;
    margin-bottom: 20px;
`;

function Search() {
    return (
        <SearchContainer>
            <Titulo>Sabés por donde empezar?</Titulo>
            <Subtitulo>Buscá por título, autor o categoría</Subtitulo>
            <Input
                placeholder="Buscar..."
            />
        </SearchContainer>
    );
}

export default Search;