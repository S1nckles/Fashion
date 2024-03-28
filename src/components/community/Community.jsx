import './community.css';

const Community = () => {

    const notice = () => {
        alert('E-mail send');
    }

    return <section className="community">
        <div className="container">
            <div className="community__inner">
                <div className="community__title"><h3>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3></div>
                <div className="community__desc"><p>Type your email down below and be young wild generation</p></div>
                <div className="community__send">
                    <input className='community__input' type="email" />
                    <button className="btn input__btn" onClick={notice}>Send</button>
                </div>
            </div>
        </div>
    </section>;
};

export default Community;