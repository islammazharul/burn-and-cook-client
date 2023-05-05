import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { BsFillBasketFill, BsFillCupHotFill, BsFillRocketFill } from "react-icons/bs";

const Feature = () => {
    return (
        <>
            <h2 className='text-center mt-5'>Our service</h2>
            <CardGroup>
                <Card className='p-2 bg-light'>

                    <BsFillRocketFill className='h-25 w-25 mx-auto text-info'></BsFillRocketFill>
                    <Card.Body className='text-center'>
                        <Card.Title className='fw-bold'>Personal Chef Services</Card.Title>
                        <Card.Text>
                            A personal chef offers custom meal preparation services for individuals or families. The chef will work with the client to create menus tailored to their specific dietary needs and preferences. They will shop for groceries, prepare meals in the client's home, and clean up after themselves.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='p-2 bg-light'>
                    <BsFillBasketFill className='h-25 w-25 mx-auto text-info'></BsFillBasketFill>
                    <Card.Body className='text-center'>
                        <Card.Title className='fw-bold'>Catering Services</Card.Title>
                        <Card.Text>
                            A chef may also offer catering services for events such as weddings, corporate events, or private parties. They will work with the client to create a custom menu, provide staff to serve the food, and handle all aspects of food preparation and presentation.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='p-2 bg-light'>
                    <BsFillCupHotFill className='h-25 w-25 mx-auto text-info' />
                    <Card.Body className='text-center'>
                        <Card.Title className='fw-bold'>Cooking Classes</Card.Title>
                        <Card.Text>
                            Some chefs offer cooking classes for individuals or groups. These classes may focus on a specific cuisine, cooking technique, or ingredient. The chef will provide hands-on instruction, teaching participants how to prepare and cook a variety of dishes.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </>
    );
};

export default Feature;