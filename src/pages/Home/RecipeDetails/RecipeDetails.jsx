import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FcLike } from 'react-icons/fc';

const RecipeDetails = ({ recipe }) => {
    // console.log(recipe)
    const [disabled, setDisabled] = useState(false);

    const handleButton = () => {
        setDisabled(true)
        toast("Added to Favorite!");
    }

    const { chef_id, ingredients, method, rating, recipe_name } = recipe;
    return (
        <Container>
            <Row className="g-4 mt-4">
                <Col>
                    <Card>
                        <LazyLoad>
                            <Card.Img variant="top" src="https://i.ibb.co/6HGTD9n/banner-1.png" />
                        </LazyLoad>
                        <Card.Body>
                            <Card.Title>{recipe_name}</Card.Title>
                            <Card.Text>
                                Cooking Method: {method}
                            </Card.Text>
                            <Card.Text>
                                Ingredients :
                                {
                                    ingredients.map(ing => <>{ing}</>)
                                }
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <Button onClick={handleButton} className="bg-success bg-opacity-75" disabled={disabled}><FcLike ></FcLike> Add to Favorite</Button>
                                    <ToastContainer />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Rating
                                        style={{ maxWidth: 150, }}
                                        value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating}</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;