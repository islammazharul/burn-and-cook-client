import React from 'react';
import ChefRecipe from '../ChefRecipe/ChefRecipe';

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
                categoryChef.map(chef => <ChefRecipe
                    key={chef.id}
                    chef={chef}
                ></ChefRecipe>


                )

            }

        </div>
    );
};

export default Category;