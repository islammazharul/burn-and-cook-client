import React from 'react';
import { Carousel } from 'react-bootstrap';

const Order = () => {
    return (
        <div className='d-flex align-items-center'>
            <img className='h-50 w-50' src="https://i.ibb.co/bFkSG0z/chef-pointing-lateral-white-background.jpg" alt="" />
            <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/c317tC9/food-2-3-1440x650.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/zsHcddZ/food-1-1440x650.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Lp5D586/food-3-1440x650.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Order;