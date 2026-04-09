import Input from '../Input';
import SearchContainer from '../SearchContaier';

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