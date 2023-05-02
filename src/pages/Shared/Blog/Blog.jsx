import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-100 mb-5'>
                <div className='w-50 sm: mx-auto'>
                    <h3 className='text-3xl text-purple-700 text-center font-bold'>-Educational Info-</h3>
                    <div className='bg-purple-100 mt-6 p-5 rounded'>
                        <h4 className='text-2xl text-purple-700 font-bold'>a. When should you use context API?</h4>
                        <p className='font-bold'>Context is primarily used when some data needs to be accessible by many components at different nesting levels.</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 rounded'>
                        <h4 className='text-2xl text-purple-700 font-bold'>b. What is a custom hook?</h4>
                        <p className='font-bold'>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.Custom React hooks are an essential tool that let you add special, unique functionality to your React applications</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 rounded'>
                        <h4 className='text-2xl text-purple-700 font-bold'>c. What is useRef?</h4>
                        <p className='font-bold'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 rounded'>
                        <h4 className='text-2xl text-purple-700 font-bold'>d. What is useMemo?</h4>
                        <p className='font-bold'>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;