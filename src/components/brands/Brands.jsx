import './brands.css';

import HM from "../../Assets/img/brands/HM.png";
import Lacoste from "../../Assets/img/brands/Lacoste.png";
import Amazon from "../../Assets/img/brands/Amazon.png";
import Levis from "../../Assets/img/brands/Levis.png";
import Obey from "../../Assets/img/brands/Obey.png";
import Shopify from "../../Assets/img/brands/Shopify.png";

const Brands = () => {
    return <section className="brands">
        <div className="container">
            <ul className="brands__list">
                <li className="brand"><a href="#"><img src={HM} alt="HM" /></a></li>
                <li className="brand"><a href="#"><img src={Lacoste} alt="Lacoste" /></a></li>
                <li className="brand"><a href="#"><img src={Amazon} alt="Amazon" /></a></li>
                <li className="brand"><a href="#"><img src={Levis} alt="Levis" /></a></li>
                <li className="brand"><a href="#"><img src={Obey} alt="Obey" /></a></li>
                <li className="brand"><a href="#"><img src={Shopify} alt="Shopify" /></a></li>
            </ul>
        </div>
    </section>
}

export default Brands;