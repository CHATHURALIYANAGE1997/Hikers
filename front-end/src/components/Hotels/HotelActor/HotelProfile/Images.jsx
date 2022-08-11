import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import epitome from '../../Epitome.png';
import resturant from '../../resturant.png';
import pool from '../../pool.png';
import food from '../../food.png';
import hotelview from '../../hotelview.png';
const Images = () => {
    return (
        <Carousel slide={false} clssName="w-100">
            <Carousel.Item>
                <img src={epitome} className="" alt="front view"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={resturant} className="" alt="resturant"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={hotelview} className="" alt="hotel view"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={pool} className="" alt="pool"></img>
            </Carousel.Item>
        </Carousel>
    );
}

export default Images;

