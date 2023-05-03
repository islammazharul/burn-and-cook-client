import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/category'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('User login successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError('Wrong password')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            toast('Please provide your email address to reset password')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Please check your email')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <Container className='w-25 mx-auto border border-info rounded p-5  bg-success bg-opacity-25 mt-5'>
            <h3>Login Your Account</h3>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='d-block w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-center">
                    <small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small>
                    <ToastContainer />
                </Form.Text>
                <Form.Text className="text-center">
                    Don't Have an Account? <Link to="/register" className='text-danger'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Button onClick={handleGoogleSignIn} className='mb-2 mt-2 w-100' variant="outline-primary"><FaGoogle />     Login with Google</Button>{' '}
                <Button onClick={handleGithubSignIn} className='w-100' variant="outline-secondary"><FaGithub />    Login with Github</Button>
            </Form>
        </Container>
    );
};

export default Login;