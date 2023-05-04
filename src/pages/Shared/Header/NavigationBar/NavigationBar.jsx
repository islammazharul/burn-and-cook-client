import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import './Navigation.css'

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
                <Navbar className='py-2 px-4 rounded  bg-opacity-25' collapseOnSelect expand="lg" bg="info" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className='text-decoration-none' to="/category"><h1 className='fw-bold'><span className='text-danger'>Burn</span>&<span className='text-success'>Cook</span></h1></Link>
                        </Nav>
                        <Nav className="mx-auto gap-4">
                            <NavLink className='active bg-info bg-opacity-50 text-decoration-none px-3 py-2 rounded text-dark fw-bold' to='/'>Home</NavLink>
                            <Link className='bg-info bg-opacity-50 text-decoration-none px-3 py-2 rounded text-dark fw-bold' to='/blog'>Blog</Link>
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
                                <Button onClick={handleLogOut} className='bg-primary  ms-3 fw-bold'>Log Out</Button> :
                                <Link to="/login">
                                    <Button className='bg-warning text-primary fw-bold'>Login</Button>
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