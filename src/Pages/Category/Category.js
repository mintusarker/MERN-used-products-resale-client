import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/itemCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-center mb-5'>Category</h2>
            <div className='flex gap-10 px-10 justify-center'>
                {
                    categories.map(category => <div>
                        <div className="card h-60 bg-gray-900 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mt-5">{category.name}</h2>
                                <p>Click bellow Category button for different category </p>
                                <div className="card-actions justify-center">
                                    <Link to={`${category.id}`}><button className="btn btn-primary">Category</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Category;