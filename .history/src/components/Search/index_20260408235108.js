import Input from '../Input';
import SearchContainer from '../SearchContainer';


const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;


function Search() {
    return (
        <SearchContainer>
            <h2>Sabés por donde empezar?</h2>
            <p>Buscá por título, autor o categoría</p>
            <Input
                placeholder="Buscar..."
            />
        </SearchContainer>
    );
}

export default Search;