import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetail = () => {
    const products = useLoaderData()
    console.log(products)

    // const [data, setData] = useState();

    // useEffect(() => { 
    //     fetch(`http://localhost:5000/itemName/${category_id}}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [category_id])

    return (
        <div>
            <h2>details</h2>
            {
                products.map(product => <p>
                    {product.name}
                </p>)
            }
        </div>
    );
};

export default CategoryDetail;