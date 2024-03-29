import './footerNav.css';

const FooterNav = () => {
    return (
        <nav className="footer__nav">
            <div className="footer__nav-wrapper">
                <div className="footer__nav-title"><h6>Company</h6></div>
                <ul className="footer__nav-links links">
                    <li className="footer__nav-link"><a href="#">About</a></li>
                    <li className="footer__nav-link"><a href="#">Contact us</a></li>
                    <li className="footer__nav-link"><a href="#">Support</a></li>
                    <li className="footer__nav-link"><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="footer__nav-wrapper">
                <div className="footer__nav-title"><h6>Quick Link</h6></div>
                <ul className="footer__nav-links">
                    <li className="footer__nav-link"><a href="#">Share Location</a></li>
                    <li className="footer__nav-link"><a href="#">Orders Tracking</a></li>
                    <li className="footer__nav-link"><a href="#">Size Guide</a></li>
                    <li className="footer__nav-link"><a href="#">FAQs</a></li>
                </ul>
            </div>
            
            <div className="footer__nav-wrapper">
                <div className="footer__nav-title"><h6>Legal</h6></div>    
                <ul className="footer__nav-links">
                    <li className="footer__nav-link"><a href="#">Terms & conditions</a></li>
                    <li className="footer__nav-link"><a href="#">Privacy Policy</a></li>
                </ul>    
            </div>
        </nav>      
    );
};

export default FooterNav;