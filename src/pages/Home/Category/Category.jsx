import React from 'react';
import ChefInfo from '../../ChefInfo/chefCard/ChefInfo';

const Category = () => {
    const { id } = useParams()
    const categoryChef = useLoaderData()
    return (
        <div>
            {
                id && <h2>This Category : {categoryChef.length}</h2>
            }
            {
                categoryChef.map(chef => <ChefInfo
                    key={chef.id}
                    chef={chef}
                ></ChefInfo>
                )
            }
        </div>
    );
};

export default Category;