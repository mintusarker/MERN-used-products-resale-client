import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const ItemCategory = ({ product, setItems }) => {

    const { user } = useContext(AuthContext)

    const { resell_price, price, location, use, name, date, detail, _id, image,phone, seller } = product;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow shadow-slate-400">
                <figure><img className='h-60 w-72 mt-5' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand: {name}</h2>
                    <p className='text-blue-500'>Version : {detail} </p>
                    <p>Original Price: {price} Tk.</p>
                    <p>Resell Price: {resell_price} Tk.</p>
                    <p>Used : {use}</p>
                    <p>Location : {location}</p>
                    <p>Posted time : {date}</p>
                    <p className='text-blue-600'>Seller Name : {seller}</p>
                    <p className='text-blue-600'>Contact : {phone}</p>
                    <div className="card-actions justify-between">
                        {user ? <label
                            htmlFor="booking-modal"
                            onClick={() => setItems(product)}
                            className="btn btn-primary text-white">
                            Book Now
                        </label> :<Link to='/login'><button className="btn btn-secondary mt-4 text-white">Book Now</button></Link> }

                        {user ? <label
                            htmlFor="report-modal"
                            onClick={() => setItems(product)}
                            className="btn btn-primary btn-sm mt-4 text-white">
                            Report
                        </label> : <Link to='/login'><button className="btn btn-secondary btn-sm mt-4 text-white">Report</button></Link>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemCategory;