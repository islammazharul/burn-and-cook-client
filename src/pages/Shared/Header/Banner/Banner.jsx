import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='mb-5'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6HGTD9n/banner-1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Creative and innovative approach to menu development</h3>
                        <p>We are seeking an experienced and innovative Executive Chef to oversee our culinary operations. As the Executive Chef, you will be responsible for designing and executing creative and high-quality menus that delight our guests, while also ensuring that our kitchen operates efficiently and effectively.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/c317tC9/food-2-3-1440x650.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Creative and innovative approach to menu development</h3>
                        <p>We are seeking an experienced and innovative Executive Chef to oversee our culinary operations. As the Executive Chef, you will be responsible for designing and executing creative and high-quality menus that delight our guests, while also ensuring that our kitchen operates efficiently and effectively.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zsHcddZ/food-1-1440x650.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Creative and innovative approach to menu development</h3>
                        <p>We are seeking an experienced and innovative Executive Chef to oversee our culinary operations. As the Executive Chef, you will be responsible for designing and executing creative and high-quality menus that delight our guests, while also ensuring that our kitchen operates efficiently and effectively.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
};

export default Banner;