import './arrivals.css';

import category1 from '../../Assets/img/categories/01.jpg';
import category2 from '../../Assets/img/categories/02.jpg';
import category3 from '../../Assets/img/categories/03.jpg';

import Card from './сard/Card.jsx';

const Arrivals = () => {
    return <section className="arrivals">
        <div className="container">
            <div className="arrivals__inner">
                <div className="arrivals__header"><h3 className="arrivals__title">New Arrivals</h3></div>
                <div className="arrivals__cards">
                    <Card image={category1} title={'Hoodies & Sweetshirt'} desc={'Explore Now!'}/>
                    <Card image={category2} title={'Coats & Parkas'} desc={'Explore Now!'} />
                    <Card image={category3} title={'Tees & T-Shirt'} desc={'Explore Now!'} />
                </div>
            </div> 
        </div>
    </section>
}

export default Arrivals;
