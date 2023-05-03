import React from 'react';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams()
    const categoryChef = useLoaderData()
    console.log('chef', categoryChef)
    return (
        <div>
            {
                id && <h2>This Category : {categoryChef.length}</h2>
            }
            {
                categoryChef.map(cheff => <ChefRecipe
                    key={cheff.id}
                    chef={cheff}
                ></ChefRecipe>


                )

            }

        </div>
    );
};

export default Category;