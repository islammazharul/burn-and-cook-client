import React, { useEffect, useState } from 'react';
import ChefInfo from '../../ChefInfo/chefCard/ChefInfo';

const Home = () => {
    const [chefData, setChefData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    console.log(chefData)
    return (
        <div>
            {
                chefData.map(chef => <ChefInfo
                    key={chef.id}
                    chef={chef}
                ></ChefInfo>)
            }
        </div>
    );
};

export default Home;