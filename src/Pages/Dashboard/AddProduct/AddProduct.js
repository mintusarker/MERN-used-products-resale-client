import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: category, isLoading } = useQuery({
        queryKey: ['itemName'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-alpha.vercel.app/itemCategory');
            const data = await res.json();
            return data;
        },

    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        price: parseInt(data.price),
                        condition: data.condition,
                        phone: data.phone,
                        location: data.location,
                        category: data.category,
                        detail: data.detail,
                        time: data.time,
                        image: imgData.data.url
                    }

                    // save product information to database
                    fetch('https://used-products-resale-server-alpha.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product added successfully');
                            navigate('/dashboard/myproduct');
                        })

                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mt-10 px-40'>
            <h2 className='text-2xl'>Add A Product</h2>

            <form className='grid lg:grid-cols-2' onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("name", {
                        required: "Product name is required"
                    })}>
                        <option></option>
                        <option selected>Hp</option>
                        <option>Asus</option>
                        <option>Lenovo</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("price", {
                        required: "Price is required"
                    })} />
                    {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("condition", {
                        required: "Condition is required"
                    })} />
                    {errors.condition && <p className='text-red-600'>{errors.condition.message}</p>}
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Phone Number</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("phone", {
                        required: "Phone Number is required"
                    })} />
                    {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("location", {
                        required: "Location is required"
                    })} />
                    {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Category</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("category", {
                        required: "Category is required"
                    })} />
                    {errors.category && <p className='text-red-600'>{errors.category.message}</p>}
                </div>

                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Category_ID</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("category", {
                        required: "Category_Id is required"
                    })} >
                        <option></option>
                        <option selected>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div> */}



                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Detail</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("detail", {
                        required: "Description is required"
                    })} />
                    {errors.detail && <p className='text-red-600'>{errors.detail.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Year of Purchase</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("time", {
                        required: "Time is required"
                    })} />
                    {errors.time && <p className='text-red-600'>{errors.time.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                        required: "Photo is required"
                    })} />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>

                <input className='btn btn-accent my-3 w-full max-w-xs' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
