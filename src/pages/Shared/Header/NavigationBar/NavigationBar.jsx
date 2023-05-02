import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: "40px" }}></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogOut} variant="outline-secondary">Log Out</Button> :
                                <Link to="/login">
                                    <Button variant="outline-secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;