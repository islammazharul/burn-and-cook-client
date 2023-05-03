import React, { useEffect, useState } from 'react';
import ChefInfo from '../../ChefInfo/chefCard/ChefInfo';

const Home = () => {
    const [chefData, setChefData] = useState([])

    useEffect(() => {
        fetch("https://burn-and-cook-server-islammazharul763-gmailcom.vercel.app/categories")
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    // console.log(chefData)
    return (
        <div className="">
            {/* <h1 className='text-center'>World's Best and Premium Chef are Here</h1> */}
            <div className=' row row-cols-1 row-cols-md-2'>
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