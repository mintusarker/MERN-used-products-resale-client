import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';


const Category = () => {

    const { loading } = useContext(AuthContext)
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios.get('https://used-products-resale-server-alpha.vercel.app/itemCategory')
            .then(data => setCategories(data.data))
    }, []);


   

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-20 pt-4 px-5'>
            <h2 className='text-2xl text-center mb-5 font-semibold'>Category</h2>
            <div className='gap-10 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category => <div key={category.id}>
                        <div className="card h-auto hover:scale-x-95 duration-500 shadow shadow-slate-100">
                            <div className="card-body">
                                <h2 className="card-title -mt-3 ">{category?.name}</h2>
                                <p>Click bellow Category button for different Item </p>
                                <div className="card-actions justify-center">
                                    <Link to={`/itemName/${category.id}`}><button className="btn btn-primary">Category</button></Link>
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