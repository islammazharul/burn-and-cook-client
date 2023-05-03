import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const { id } = useParams()
    // const recipes = useLoaderData()
    const [recipes, setRecipes] = useState([])
    // const { chef_id, rating, method, ingredients } = recipes
    // console.log("recipes", recipe, id)
    useEffect(() => {
        fetch('https://burn-and-cook-server-islammazharul763-gmailcom.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <h2>recipe</h2>
            {

            }
        </div>
    );
};

export default ChefRecipe;