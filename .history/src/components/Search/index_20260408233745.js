import Input from '../components/Input';

function Search() {
    return (
        <section>
            <h2>Sabés por donde empezar?</h2>
            <p>Buscá por título, autor o categoría</p>
            <Input placeholder="Buscar..." />
        </section>
    );
}

export default Search;