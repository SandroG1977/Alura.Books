import './styles.css';
import Logo from '../logo';
import OptionsHeader from '../OptionsHeader';
import IconesHeader from '../IconosHeader';

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </header>
    );
}

export default Header;