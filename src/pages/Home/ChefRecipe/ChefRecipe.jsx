import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const ChefRecipe = () => {
    // console.log(cheff)
    const { id } = useParams()
    // console.log('hello', id)
    // const recipes = useLoaderData()
    const [recipes, setRecipes] = useState([])
    // const { method } = cheff;
    // console.log("recipes", recipes)
    useEffect(() => {
        fetch('https://burn-and-cook-server-islammazharul763-gmailcom.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])
    // const { id } = useParams()
    // const categoryChef = useLoaderData()
    // console.log('chef', categoryChef)
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {/* {
                id && <h2>This Category : {recipes.length}</h2>
            } */}

            {/* {
                recipes.map(recipe => <RecipeDetails
                    key={recipe.chef_id}
                    recipe={recipe}
                ></RecipeDetails>)
            } */}


        </div>
    );
};

export default ChefRecipe;