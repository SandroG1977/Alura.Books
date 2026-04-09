import styled from 'styled-components';

import livro from '../../images/livro2.png';

export const livros = [
    { nome: 'Liderança em Design', src: livro, id: 1 },
    { nome: 'Cangaceiro JavaScript', src: livro, id: 3 },
    { nome: 'Apache Kafka e Spring Boot', src: livro, id: 4 }
]

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`;

const LibroContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;


const NuevosLibrosContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLanzamientos() {
    return (
        <LibroContainer>
            <Titulo>Últimos Lanzamientos</Titulo>
            <NuevosLibrosContainer>
                {livros.map(livro => {
                    return (
                        <img key={livro.id} src={livro.src} alt={livro.nome} />

                    );
                })}
            </NuevosLibrosContainer>
        </LibroContainer>
    );
}

export default UltimosLanzamientos;