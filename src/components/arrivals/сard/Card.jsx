import './card.css';

import arrow from '../../../Assets/img/icons/Arrow.svg';

const Card = (props) => {
    return <div className="arrivals__card">
            <div className="card__img"><a href="#"><img src={props.image} alt="Hoodies & Sweetshirt"/></a></div>
            <div className="card__content">
                <div className="card__text">
                    <div className="card__title"><a href="#">{props.title}</a></div>
                    <p className="card__desc">{props.desc}</p>
                </div>
                <div className="card__arrow"><a href="#"><img src={arrow} alt="Arrow" /></a></div>
            </div>
        </div>
}

export default Card;