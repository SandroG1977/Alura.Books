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