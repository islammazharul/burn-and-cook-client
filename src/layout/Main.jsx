import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Banner from '../pages/Shared/Header/Banner/Banner';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Feature from '../pages/Shared/Feature/Feature';
import Order from '../pages/Shared/Order/Order';

const Main = () => {
    return (
        <div>

            <Banner></Banner>
            <Container className=''>
                <Row className='h-auto'>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                <Order></Order>
                <Feature></Feature>
            </Container>
        </div>
    );
};

export default Main;