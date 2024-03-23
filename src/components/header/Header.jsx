import './header.css';
import logoImg from '../../Assets/img/icons/logo.svg';

const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo"><a href="/"><img src={logoImg} alt="Logo" /></a></div>
                <nav className="header__nav">
                    <ul>
                        <li><a href="#">CATALOGUE</a></li>
                        <li><a href="#">FASHION</a></li>
                        <li><a href="#">FAVOURITE</a></li>
                        <li><a href="#">LIFESTYLE</a></li>
                    </ul>
                    <div className="header__btn"><button type='submit'>SIGN UP</button></div>
                </nav>
            </div>
        </div>
    </header>
}

export default Header;