import styled from "styled-components";

styled.div`
    width: 200px;
    height: 300px;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h3{
        font-size: 14px;
        color: #EB9B00;
        margin: 0;
    }

    h4{
        font-size: 18px;
        color: #000000;
        margin: 0;
    }               
    
    p{
        font-size: 14px;
        color: #000000;
        text-align: center;
    }       
    img{
        width: 100px;
        height: 150px;
        object-fit: cover;
    }

    button{
        background-color: #EB9B00;
        color: #FFF;
        border: none;
        padding: 10px 20px;
        border-radius: 5px; 
        cursor: pointer;
    }
`;


function CardRecomandaciones({ titulo, subtitulo, descripcion, imagen }) {
    return (
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descripcion}</p>
            <img src={imagen} alt={titulo} />
            <button>ver mas</button>
        </div>
    );
}

export default CardRecomandaciones; 