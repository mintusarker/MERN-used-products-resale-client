import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ReportModal from '../ReportToAdmin/ReportModal';
import ItemCategory from './ItemCategory';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const CategoryDetail = () => {
    const [items, setItems] = useState([]);
    const { loading } = useContext(AuthContext)

    const products = useLoaderData();
    // console.log(products)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-xl pl-16 my-2'>{products.length ? "That Items are available" : <p className='py-12 mb-60'>No Item are Available right now, Coming Soon....</p>}</h2>
            <div className='mx-16 gap-10 mb-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products?.length && products?.map(product => <ItemCategory
                        key={product?._id}
                        product={product}
                        setItems={setItems}
                    >
                    </ItemCategory>)
                }
            </div>

            {
                items && <BookingModal
                    items={items}
                    setItems={setItems}
                >
                </BookingModal>
            }

            {items &&
                <ReportModal
                    items={items}
                    setItems={setItems}
                >
                </ReportModal>
            }

        </div>
    );
};

export default CategoryDetail;