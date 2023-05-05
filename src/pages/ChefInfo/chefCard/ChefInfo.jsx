import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { BiLike } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const ChefInfo = ({ chef }) => {


    const { id, chefName, chefPicture, likes, numOfRecipes, yearsOfExperience } = chef
    return (
        <div className='mb-2'>
            <Card className=" bg-success bg-opacity-25 h-100">

                <Card.Body>
                    <LazyLoad threshold={1}>
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
                    <BiLike className='text-primary me-2'></BiLike>
                    <span className='fw-bold'> {likes}k</span>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ChefInfo;