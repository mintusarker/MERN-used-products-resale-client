import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ReportModal from '../ReportToAdmin/ReportModal';
import ItemCategory from './ItemCategory';

const CategoryDetail = () => {
    const [items, setItems] = useState([]);

    const products = useLoaderData();
    // console.log(products)

    return (
        <div>
            <h2 className='text-3xl pl-14 my-10'>{products.length? "That Items are available" : <p className='py-12 mb-60'>No Item are Available right now, Coming Soon....</p>}</h2>
            <div className='mx-16 gap-10 mb-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products?.map(product => <ItemCategory
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

            { items &&
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