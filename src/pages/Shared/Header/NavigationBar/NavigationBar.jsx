import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

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
        <div className='sticky-top'>
            <Container >
                <Navbar className='py-2 px-4 rounded' collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className='text-decoration-none' to="/category"><h2><span className='text-danger'>Burn</span>&<span className='text-success'>Cook</span></h2></Link>
                        </Nav>
                        <Nav className="mx-auto gap-4">
                            <Link className='bg-info text-decoration-none px-3 py-2 rounded text-dark' to='/category'>Home</Link>
                            <Link className='bg-info text-decoration-none px-3 py-2 rounded text-dark' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle className='me-2' style={{ fontSize: "40px" }}></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogOut} className='bg-primary text-light' variant="outline-secondary">Log Out</Button> :
                                <Link to="/login">
                                    <Button className='bg-warning text-dark' variant="outline-secondary">Login</Button>
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