import './banner.css';

import bannerImg from '../../Assets/img/images/promoImg.jpg';

const Banner = () => {
    return <section className="banner">
        <div className="container">
            <div className="banner__inner">
                <div className="banner__img">
                    <img src={bannerImg} alt="bannerImg" />
                </div>
                <div className="banner__content">
                    <div className="banner__title">
                        <span>PAYDAY</span> SALE NOW
                    </div>
                    <div className="banner__desc">
                        Spend minimal $100 get 30% off voucher code for your next purchase
                    </div>
                    <div className="banner__date">
                        <b>1 June - 10 June 2021</b> *Terms & Conditions apply
                    </div>
                    <div className="banner__btn-wrapper">
                        <a href="#" className="btn banner__btn">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Banner;