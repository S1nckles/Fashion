import './item.css';

import arrow from '../../../Assets/img/icons/Arrow.svg';

const Item = (props) => {
    return <div className="item">
        <div className="item__img"><a href="#"><img src={props.image} alt={props.title}/></a></div>
        <div className="item__content">
            <div className="item__text">
                <div className="item__title"><a href="#">{props.title}</a></div>
                <p className="item__desc">{props.desc}</p>
            </div>
            <div className="item__arrow"><a href="#"><img src={arrow} alt="Arrow" /></a></div>
        </div>
    </div>;
};

export default Item;