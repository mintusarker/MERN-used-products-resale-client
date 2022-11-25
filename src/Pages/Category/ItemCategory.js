import React from 'react';

const ItemCategory = ({ product, setItems }) => {

    const { resell_price, price, location, use, name, series, date, image_url, seller } = product;
    return (
        <div>
            <div className="card card-compact bg-base-100 my-10 shadow-md shadow-slate-400">
                <figure><img className='h-60 w-72 mt-5' src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand: {name}</h2>
                    <p className='text-blue-500'>Version : {series} </p>
                    <p>Original Price: {price}</p>
                    <p>Resell Price: {resell_price}</p>
                    <p>Used : {use}</p>
                    <p>Location : {location}</p>
                    <p>Posted time : {date}</p>
                    <p className='text-blue-600'>Seller Name : {seller}</p>
                    <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setItems(product)}
                        className="btn btn-primary text-white">
                        Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCategory;