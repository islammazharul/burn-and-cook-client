import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
                            {user && <OverlayTrigger
                                placement="left"
                                overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                            >
                                {({ ref, ...triggerHandler }) => (
                                    <div
                                        variant="light"
                                        {...triggerHandler}
                                        className="d-inline-flex align-items-center"
                                    >
                                        <Image
                                            style={{ height: '50px', width: '50px' }}
                                            ref={ref}
                                            roundedCircle
                                            src="https://i.ibb.co/6HGTD9n/banner-1.png"
                                        />
                                    </div>
                                )}
                            </OverlayTrigger>}

                            {user ?
                                <Button onClick={handleLogOut} className='bg-primary text-light ms-3' variant="outline-secondary">Log Out</Button> :
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