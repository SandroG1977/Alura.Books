import './styles.css';
import Logo from '../logo';
import OptionsHeader from '../OptionsHeader';
import IconesHeader from '../IconosHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;    
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </HeaderContainer>
    );
}

export default Header;