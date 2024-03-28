import './favourite.css';

import Item from './item/Item';

import favouriteImg1 from "../../Assets/img/images/promo-01.jpg";
import favouriteImg2 from "../../Assets/img/images/promo-02.jpg";

// The youth favorite may be changed to other favorites in the future (example: favourites for Adult) 

const Favourite = () => {
    return <section className="favourite">
        <div className="container">
            <div className="favourite__inner">
                <div className="favourite__header"><h3 className="favourite__title">Young’s Favourite</h3></div>
                <div className="favourite__items">
                    <Item image={favouriteImg1} title={'Trending on instagram'} desc={'Explore Now!'}/>
                    <Item image={favouriteImg2} title={'Trending on instagram'} desc={'Explore Now!'}/>
                </div>
            </div>
        </div>
    </section>
}

export default Favourite;