import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
const auth = getAuth(app)
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState("");

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        // console.log(name, photo, email, password);

        if ((name, email, password)) {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser)
                    setError('');
                    form.reset()
                    setSuccess('User has been created successfully');
                    profileUpdate(result.user, name, photo);
                })
                .catch(error => {
                    console.log(error.message)
                    setError(error.message);
                })
        }

        const profileUpdate = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => {
                    console.log('User name updated')
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto border border-info rounded p-5  bg-success bg-opacity-25 mt-5 container'>
            <h3>Register Your Account</h3>
            <p className="text-danger">{error}</p>
            <p className="text-success">{success}</p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                </Form.Group>
                <Button className='d-block w-100 mb-3' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-center">
                    Already Have an Account? <Link to="/login" className='text-danger'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;