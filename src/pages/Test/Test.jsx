import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../Home/RecipeDetails/RecipeDetails';

const Test = () => {
    const { id } = useParams()
    const [chefRecipe, setChefRecipe] = useState([])
    console.log(chefRecipe)
    useEffect(() => {
        fetch(`https://burn-and-cook-server-islammazharul763-gmailcom.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => setChefRecipe(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h3 className='text-center'>Here are My Special Recipes</h3>
            {
                chefRecipe && chefRecipe.map((recipe) => <RecipeDetails
                    key={recipe.chef_id}
                    recipe={recipe}
                ></RecipeDetails>)
            }
        </div>
    );
};

export default Test;