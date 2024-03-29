import './footer.css';

import FooterNav from "./nav/FooterNav";
import Social from './socials/Social';

import facebook from "../../Assets/img/socials/Vector.svg";
import instagram from "../../Assets/img/socials/Vector-1.svg";
import x from "../../Assets/img/socials/Vector-2.svg";
import linkedin from "../../Assets/img/socials/in.svg";


const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__content">
                    <div className="footer__title">
                        <h3>FASHION</h3>
                    </div>
                    <div className="footer__desc">
                        <p>Complete your style with awesome clothes from us.</p>
                    </div>
                    <div className="footer__socials">
                        <a href="#"><Social icon={facebook} /></a>
                        <a href="#"><Social icon={instagram} /></a>
                        <a href="#"><Social icon={x} /></a>
                        <a href="#"><Social icon={linkedin} /></a>
                    </div>
                </div>
                <FooterNav />          
            </div>
        </div>
    </footer>;
};

export default Footer;