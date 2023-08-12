import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const ItemCategory = ({ product, setItems }) => {
    const { user } = useContext(AuthContext)
    const { resell_price, price, location, use, name, date, detail, image, phone, seller } = product;

    return (
        <div>
            <div className="card-compact bg-base-100 shadow shadow-slate-400">
                <figure><img className='h-52 w-full mt-5' src={image} alt="" /></figure>
                <div className="p-4">
                    <h2 className="card-title">Brand: {name}</h2>
                    <p className='text-blue-500'>Version : {detail} </p>
                    <p>Original Price: {price} Tk.</p>
                    <p>Resell Price: {resell_price} Tk.</p>
                    <p>Used : {use}</p>
                    <p>Location : {location}</p>
                    <p>Posted time : {date}</p>
                    <p className='text-blue-600'>Seller Name : {seller}</p>
                    <p className='text-blue-600'>Contact : {phone}</p>
                    <div className="flex justify-between items-end">
                        {user ? <label
                            htmlFor="booking-modal"
                            onClick={() => setItems(product)}
                            className="btn btn-secondary btn-sm rounded-sm text-white">
                            Book Now
                        </label> : <Link to='/login'><button className="btn btn-success btn-sm rounded-sm mt-4 text-white">Book Now</button></Link>}

                        {user ? <label
                            htmlFor="report-modal"
                            onClick={() => setItems(product)}
                            className="btn bg-slate-700 btn-xs rounded-sm mt-4 text-white">
                            Report
                        </label> : <Link to='/login'><button className="btn bg-slate-700 btn-xs rounded-sm  mt-4 text-white">Report</button></Link>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemCategory;