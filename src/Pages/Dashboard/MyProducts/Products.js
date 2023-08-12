import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Products = ({ product, handleDeleteProduct }) => {

    const navigate = useNavigate();
    const { image, price, name, detail, location, email, phone, use } = product;
    console.log(product);


    const handleAdvertise = () => {

        const advertise = {
            image,
            name,
            price: product?.price,
            detail,
            use,
            location,
            phone,
            email
        };

        console.log(advertise);

        fetch('https://used-products-resale-server-alpha.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...advertise, price: parseInt(price) })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Advertisement product added successfully');
                navigate('/dashboard/advertise')
            })
    }
    return (
        <div>
            <div className="border bg-base-100 shadow-xl">
                <figure><img className='h-40 w-full' src={image} alt="" /></figure>
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Description: {detail}</p>
                    <p>Used: {use}</p>
                    {/* <p>Condition: {condition}</p> */}
                    <p>Location: {location}</p>
                    <p>Contact: {phone}</p>
                    <div className="card-actions inline-grid">
                        <button onClick={() => handleDeleteProduct(product?._id)} className="btn btn-sm btn-primary">Delete</button>
                        {/* <button className="btn btn-sm btn-primary">Available</button> */}
                        <button onClick={handleAdvertise} className="btn btn-sm btn-primary">Advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;