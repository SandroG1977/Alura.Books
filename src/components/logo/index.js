import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 5px;
`;

const LogoImage = styled.img`
    width: 40px;
    margin-right: 10px;
`;


function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo Alura Books" />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;