import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Rating } from 'react-rating'
// import 'react-rating/style.css'

const RecipeDetails = ({ recipe }) => {
    // console.log(recipe)
    const [disabled, setDisabled] = useState(false);

    const handleButton = () => {
        setDisabled(true)
        toast("Added to Favorite!");
    }

    const { ingredients, method, rating, recipe_name } = recipe;
    return (
        <Container>
            <Row className="g-4 mt-4">
                <Col>
                    <Card>
                        <LazyLoad>
                            <Card.Img variant="top" src="https://i.ibb.co/6HGTD9n/banner-1.png" fluid />
                        </LazyLoad>
                        <Card.Body>
                            <Card.Title>{recipe_name}</Card.Title>
                            <Card.Text>
                                <p className='text-info'>Cooking Method:</p> {method}
                            </Card.Text>
                            <Card.Text>
                                <p className='text-info'>Ingredients :</p>
                                {
                                    ingredients.map(ing => <p>{ing}</p>)
                                }
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button onClick={handleButton} className="bg-success bg-opacity-75" disabled={disabled}>Add to Favorite</Button>
                                <ToastContainer />
                                <span>Rating : {rating}</span>
                                {/* <div className='flex-grow-1 d-flex align-items-center'>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;