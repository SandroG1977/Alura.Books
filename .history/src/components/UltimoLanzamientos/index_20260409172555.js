import styled from 'styled-components';

import livro from '../../images/livro2.png';

export const livros = [
    { nome: 'Liderança em Design', src: livro, id: 1 },
    { nome: 'Cangaceiro JavaScript', src: livro, id: 3 },
    { nome: 'Apache Kafka e Spring Boot', src: livro, id: 4 }
]

const Titulo = styled.h2`
    font-size: 24px;
    color: #FFF;
    margin-bottom: 10px;
    text-align: center;
`;

const LibroContainer = styled.section`
     background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function UltimosLanzamientos() {
    return (
        <LibroContainer>
            <Titulo>Últimos Lanzamientos</Titulo>
            {livros.map(livro => {
                return (
                    <img src={livro.src} alt={livro.nome} />

                );
            })}
        </LibroContainer>
    );
}

export default UltimosLanzamientos;