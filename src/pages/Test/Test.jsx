import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams()
    const [chefRecipe, setChefRecipe] = useState([])
    console.log(chefRecipe)
    useEffect(() => {
        fetch(`http://localhost:5000/categories/${id}`)
            .then(res => res.json())
            .then(data => setChefRecipe(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h2>This is test</h2>
            {
                chefRecipe && chefRecipe.map((recipe) => <div>
                    <h2>{recipe.chef_id}</h2>
                </div>)
            }
        </div>
    );
};

export default Test;