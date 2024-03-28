import './download.css';

import mobile from '../../Assets/img/images/vouchers-img.jpg';
import googlePlay from '../../Assets/img/icons/google-play.png';
import appleStore from '../../Assets/img/icons/app-store.png';

const Download = () => {
    return <section className='download'>
        <div className="container">
            <div className="download__inner">
                <div className="download__content">
                    <h3 className="download__title">DOWNLOAD APP & GET THE VOUCHER!</h3>
                    <p className="download__desc">Get 30% off for first transaction using Rondovision mobile app for now.</p>
                    <div className="download__action">
                        <a href={`https://play.google.com/`} target={'_blank'}> <img src={googlePlay} alt="googlePlay" /></a>
                        <a href={`https://www.apple.com/`}  target={'_blank'}><img src={appleStore} alt="appleStore" /></a>
                    </div>
                </div>
                <div className="download__img"><img src={mobile} alt="Mobile" /></div>
            </div>
        </div>
    </section>;
};

export default Download;