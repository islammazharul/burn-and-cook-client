import React, { useEffect, useState } from 'react';
import ChefInfo from '../../ChefInfo/chefCard/ChefInfo';

const Home = () => {
    const [chefData, setChefData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    // console.log(chefData)
    return (
        <div className='row row-cols'>
            <h1 className='text-center'>World's Best and Premium Chef are Here</h1>
            <div className='w-50'>
                {
                    chefData.map(chef => <ChefInfo
                        key={chef.id}
                        chef={chef}
                    ></ChefInfo>)
                }
            </div>
        </div>
    );
};

export default Home;