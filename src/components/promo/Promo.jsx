import './promo.css';
import promoImg from "../../Assets/img/images/header-img.jpg";

const Promo = () => {
    return <section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__block">
                    <h1 className="promo__title"><span>LET’S</span> EXPLORE <span>UNIQUE</span> CLOTHES.</h1>
                    <p className="promo__text">Live for Influential and Innovative fashion!</p>
                    <div className="promo__btn-wrapper"><a href="/login" className="promo__btn btn">Shop Now</a></div>
                </div>
                <div className="promo__img"><img src={promoImg} alt="Promo" /></div>
            </div>
        </div>
    </section>
}

export default Promo;