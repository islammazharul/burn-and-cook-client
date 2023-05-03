import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {
    console.log(recipe)
    const { ingredients, method, rating } = recipe;
    return (
        <Container>
            <Row className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/6HGTD9n/banner-1.png" fluid />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <h4>Cooking Method:</h4> {method}
                            </Card.Text>
                            <Card.Text>
                                <h4>Ingredients :</h4>
                                {
                                    ingredients.map(ing => <p>{ing}</p>)
                                }
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button className="bg-success bg-opacity-75">Add to Favorite</Button>
                                <span>{rating}</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;