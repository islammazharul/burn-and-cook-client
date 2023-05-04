import React from 'react';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const RightNav = () => {
    return (
        <div className='bg-danger bg-opacity-25 p-2 rounded'>
            <h2>Our Company Partner</h2>
            <Card className='mb-3'>
                <LazyLoad>
                    <Card.Img variant="top" src="https://i.ibb.co/ykbBQz2/user-1.png" />
                </LazyLoad>
                <Card.Body>
                    <Card.Text>
                        <h3>Sevgi Çelik</h3>
                        <p>Ceo</p>
                        <p>Email : sevic@burn&cook.com</p>
                        <p>Phone : +90 505-5517-6173</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <LazyLoad>
                    <Card.Img variant="top" src="https://i.ibb.co/wQBBGk1/user-2.png" />
                </LazyLoad>
                <Card.Body>
                    <Card.Text>
                        <h3>Branka Gilbert</h3>
                        <p>Founder</p>
                        <p>Email : branka@burn&cook.com</p>
                        <p>Phone : +90 505-5517-6174</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <LazyLoad>
                    <Card.Img variant="top" src="https://i.ibb.co/yy8StXr/user-3.png" />
                </LazyLoad>
                <Card.Body>
                    <Card.Text>
                        <h3>Rod Colimore</h3>
                        <p>Manager</p>
                        <p>Email : colimore@burn&cook.com</p>
                        <p>Phone : +90 505-5517-6175</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <LazyLoad>
                    <Card.Img variant="top" src="https://i.ibb.co/6HGTD9n/banner-1.png" />
                </LazyLoad>
                <Card.Body>
                    <Card.Text>
                        <h3>Servin Sevik</h3>
                        <p>Co-Founder</p>
                        <p>Email : sevic@burn&cook.com</p>
                        <p>Phone : +90 505-5517-6176</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RightNav;