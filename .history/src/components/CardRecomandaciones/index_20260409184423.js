import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
    width: 200px;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    `;

const Subtitulo = styled.h4`
        font-size: 18px;
        color: #000000;
        margin: 0;
`

const Descripcion = styled.p`
        font-size: 14px;
        color: #000000;
        text-align: center;    
    `
const Imagen = styled.img`  
    object-fit: cover;
    align-self: center;
    align-items: center;
`

const Button = styled.button`
    button{
    background - color: #EB9B00;
    color: #FFF;
    border: none;
    padding: 10px 20px;
    border - radius: 5px;
    cursor: pointer;
`



function CardRecomandaciones({ titulo, subtitulo, descripcion, imagen }) {
    return (
        <Card>
            <div>
                <Titulo color="#EB9B00" size="26px">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descripcion>{descripcion}</Descripcion>
            </div>
            <div>
                <Imagen src={imagen} alt={titulo} />
                <Button>ver mas</Button>
            </div>
        </Card>
    );
}

export default CardRecomandaciones; 