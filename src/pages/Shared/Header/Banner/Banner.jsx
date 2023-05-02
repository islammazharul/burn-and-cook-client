import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <div className='position-relative'>
                <Image src="https://i.ibb.co/6HGTD9n/banner-1.png" fluid />;
                <div className='position-absolute top-50'><h2 className='text-light'>This is Banner</h2></div>
            </div>

        </Container>
    );
};

export default Banner;