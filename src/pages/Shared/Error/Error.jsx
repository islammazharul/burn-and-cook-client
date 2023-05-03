import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Container } from 'react-bootstrap';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <Container className='d-flex align-items-center mt-5'>
            <div className=' text-center mx-auto'>
                <FaceFrownIcon className='w-50 h-50 text-warning' />
                <h2 className='mb-8 fw-bold'>
                    <span className='text-danger'>Error</span>
                    {status || 404}
                </h2>
                <p className=' fw-bold text-dark mb-5'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-primary'>
                    Back to homepage
                </Link>
            </div>
        </Container>
    );
};

export default Error;