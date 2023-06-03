import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);
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
                        category_id: data.category,
                        price: parseInt(data.price),
                        resell_price: parseInt(data.resell_price),
                        // condition: data.condition,
                        phone: data.phone,
                        location: data.location,
                        detail: data.detail,
                        date: data.time,
                        use: data.used,
                        image: imgData.data.url,
                        seller: data.seller,
                        email: data.email,
                    }
                    console.log(product)

                    // save product information to database
                    fetch('https://used-products-resale-server-alpha.vercel.app/itemName', {
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
                            reset();
                            navigate('/dashboard/myproduct');
                        })

                }
            })
    };

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div className='px-40'>
            <h2 className='text-2xl mb-6'>Add A Product</h2>

            <form className='grid lg:grid-cols-2' onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Seller Email</span></label>
                    <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" {...register("email")} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("seller", {
                        required: "Name is required"
                    })} />
                    {errors.seller && <p className='text-red-600'>{errors.seller.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("name", {
                        required: "Product name is required"
                    })}>
                        <option></option>
                        <option selected>Hp</option>
                        <option>Asus</option>
                        <option>Lenovo</option>
                        <option>MSI</option>
                        <option>Acer</option>
                        <option>Apple</option>
                        <option>Dell</option>
                        <option>Microsoft</option>
                        <option>Avita</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Category_ID</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("category", {
                        required: "Category_Id is required"
                    })} >
                        <option></option>
                        <option selected>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
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
                    <label className="label"><span className="label-text">Resell_Price</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("resell_price", {
                        required: "Resell_Price is required"
                    })} />
                    {errors.resell_price && <p className='text-red-600'>{errors.resell_price.message}</p>}
                </div>

                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("condition", {
                        required: "Condition is required"
                    })} />
                    {errors.condition && <p className='text-red-600'>{errors.condition.message}</p>}
                </div> */}

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
                    <label className="label"><span className="label-text">Product used time</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("used", {
                        required: "Used time is required"
                    })} />
                    {errors.used && <p className='text-red-600'>{errors.used.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Detail</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("detail", {
                        required: "Description is required"
                    })} />
                    {errors.detail && <p className='text-red-600'>{errors.detail.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Posted time</span></label>
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
