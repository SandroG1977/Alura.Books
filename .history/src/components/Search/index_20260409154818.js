import { useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';

import livro from '../../images/livro.png'

export const livros = [
    { nome: 'Liderança em Design', id: 1, src: livro },
    { nome: 'JavaScript Assertivo', id: 2, src: livro },
    { nome: 'Cangaceiro em JavaScript', id: 3, src: livro },
    { nome: 'Aventureiros do Java', id: 4, src: livro },
]

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

const ResultadosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

function Search() {
    const [librosEncontrados, setLibrosEncontrados] = useState([]);
    return (
        <SearchContainer>
            <Titulo>Sabés por donde empezar?</Titulo>
            <Subtitulo>Buscá por título, autor o categoría</Subtitulo>
            <Input
                placeholder="Buscar..."
                onBlur={event => {

                    const query = event.target.value.toLowerCase();
                    const encontrados = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(query)
                    );
                    setLibrosEncontrados(encontrados);
                }
                }
            />
            {librosEncontrados.map(livro => {
                return (
                    <div key={livro.id}>
                        <img src={livro.src} alt={livro.nome} /><p>{livro.nome}</p>

                    </div>
                );
            })}

        </SearchContainer>
    );
}

export default Search;