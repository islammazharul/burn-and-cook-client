import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Banner from '../pages/Shared/Header/Banner/Banner';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <Banner></Banner>
            <Container className=''>
                <Row>

                    <Col lg={9}>
                        {/* <h2>Hello</h2> */}
                        <Home></Home>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;