import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';

const UpCategory = () => {

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
        <div className='px-16 py-7'>
            <div className='gap-8 lg:px-16 sm:px-0 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9'>
                {
                    categories?.map(category => <div key={category.id}>
                        <div className="hover:scale-x-95 duration-500 shadow shadow-slate-100">
                        <Link to={`/itemName/${category.id}`}><p className=" text-center">{category?.name.slice(-0,-7)}</p></Link>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default UpCategory;