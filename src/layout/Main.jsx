import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/Header/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <Container className=''>
                <Row>
                    <Col lg={3}>

                    </Col>
                    <Col lg={6}>

                    </Col>
                    <Col lg={3}>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;