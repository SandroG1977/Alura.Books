import Input from '../Input';
import styled from 'styled-components';
import SearchContainer from '../SearchContainer';


const SearchContainer1 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const h2 = styled.h2`
    font-size: 24px;
    color: #FFF;
    margin-bottom: 10px;
`;

const Parrafo = styled.p`
    font-size: 16px;
    color: #FFF;
    margin-bottom: 20px;
`;

function Search() {
    return (
        <SearchContainer1>
            <h2>Sabés por donde empezar?</h2>
            <p>Buscá por título, autor o categoría</p>
            <Input
                placeholder="Buscar..."
            />
        </SearchContainer1>
    );
}

export default Search;