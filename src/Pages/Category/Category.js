import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const Category = () => {

    const {Loading} = useContext(AuthContext)

    const [categories, setCategories] = useState([]);

    //  axios.get('http://localhost:5000/itemCategory')
    //  .then(data => setCategories(data.data))


    // useEffect(() => {
    //     fetch('http://localhost:5000/itemCategory')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])


    // const { data: categories, isLoading } = useQuery({
    //     queryKey: ['itemCategory'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/itemCategory');
    //         const data = await res.json();
    //         return data;
    //     }
    // });


    const { data } = useQuery({
        queryKey: ['itemCategory'],
        queryFn: axios.get('http://localhost:5000/itemCategory')
            .then(data => setCategories(data.data))
    });

    if (Loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-center mb-5'>Category</h2>
            <div className='gap-10 px-10 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category => <div key={category.id}>
                        <div className="card border border-2 border-teal-600 p-5 shadow-lg shadow-slate-100">
                            <div className="card-body">
                                <h2 className="card-title mt-5">{category?.name}</h2>
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