import React, { useState } from 'react';
import { Button, Card, } from 'react-bootstrap';
import { FaEye, } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link, useParams } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating'

const ChefInfo = ({ chef }) => {


    const { id, chef_id, chefName, chefPicture, likes, numOfRecipes, yearsOfExperience } = chef
    return (
        <div className='mb-2'>
            <Card className=" bg-success bg-opacity-25 h-100">

                <Card.Body>
                    <LazyLoad>
                        <Card.Img className='h-50' variant="top" src={chefPicture} />
                    </LazyLoad>
                    <Card.Title>{chefName}</Card.Title>
                    <p>Number of Recipe : {numOfRecipes}</p>
                    <p><small>{yearsOfExperience} years of experience.</small></p>
                    <Card.Text>
                        <Link to={`/test/${id}`}><Button variant="danger bg-opacity-25" className='bg-danger bg-opacity-75'>View Details</Button></Link>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                    <div className='flex-grow-1 d-flex align-items-center'>
                        {/* <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating?.number || 0)} readOnly /> */}
                        <span className='ms-2'>Like: {likes}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye> {likes}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ChefInfo;