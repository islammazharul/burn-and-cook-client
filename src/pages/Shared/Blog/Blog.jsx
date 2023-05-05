import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'px',
        format: [window.innerWidth * 0.55, window.innerHeight]
    };

    return (
        <>

            <Container ref={ref} className='mb-2 mt-5 bg-success bg-opacity-25'>
                <div className=' mx-auto p-3'>
                    <h3 className=' text-center fw-bold'>-Educational Info-</h3>
                    <div className='bg-white mt-2 p-3 rounded'>
                        <h4 className='text-2xl text-purple-700 fw-bold'>1. Tell us the differences between uncontrolled and controlled components?</h4>
                        <p className='fw-bold'>Ans : When we talk about Controlled and Uncontrolled Components, it's always referring to components which are handling forms or form inputs in them.</p>
                    </div>
                    <div className='bg-white mt-2 p-3 rounded'>
                        <h4 className='text-2xl text-purple-700 fw-bold'>2. How to validate React props using PropTypes?</h4>
                        <p className='fw-bold'>Ans : propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
                    </div>
                    <div className='bg-white mt-2 p-3 rounded'>
                        <h4 className='text-2xl text-purple-700 fw-bold'>3. Tell us the difference between nodejs and express js?</h4>
                        <p className='fw-bold'>Ans : Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                    </div>
                    <div className='bg-white mt-2 p-3 rounded'>
                        <h4 className='text-2xl text-purple-700 fw-bold'>4. What is a custom hook, and why will you create a custom hook?</h4>
                        <p className='fw-bold'>Ans : Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>

                </div>
            </Container>
            <Container>
                <div className="App w-25 mx-auto">
                    <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                        {({ toPdf }) => <button className="bg-info border-0 fw-bold px-3 py-2 rounded" onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
            </Container>
        </>
    );
};

export default Blog;