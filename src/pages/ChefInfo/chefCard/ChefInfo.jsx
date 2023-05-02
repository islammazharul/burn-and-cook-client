import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { FaEye, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating'

const ChefInfo = ({ chef }) => {
    const { id, chefName, chefPicture, likes, numOfRecipes, yearsOfExperience } = chef
    return (
        <div className=''>
            <Card className="mb-4">

                <Card.Body>
                    <Card.Img variant="top" src={chefPicture} />
                    <Card.Title>{chefName}</Card.Title>
                    <p>Number of Recipe : {numOfRecipes}</p>
                    <p><small>{yearsOfExperience} years of experience.</small></p>
                    <Card.Text>
                        <Link to={`/chef/`}><Button variant="danger">View Details</Button></Link>
                        <Button variant="primary">Add to Favorite</Button>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                    <div className='flex-grow-1 d-flex align-items-center'>
                        {/* <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating?.number || 0)} readOnly /> */}
                        <span className='ms-2'>{likes}</span>
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