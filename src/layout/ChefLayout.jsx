import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/Header/NavigationBar/NavigationBar';

const ChefLayout = () => {
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;