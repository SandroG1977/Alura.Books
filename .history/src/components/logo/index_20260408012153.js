import logo from '../../images/logo.svg';
import './styles.css';

function Logo() {
    return (
        <div className="logo">
            <img className='logo_img' src={logo} alt="Logo Alura Books" />
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;