import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReportToAdmin = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()

    console.log(data)

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        // const email = user?.email || 'unregistered';
        const message = form.message.value;
    }


    return (
        <div>
            <form onSubmit={handleReviewSubmit}>
                <h2 className='text-center text-2xl my-10 font-serif text-blue-500'>Report to Admin</h2>
                <h2 className='text-center text-2xl my-10 font-semibold text-orange-500'>Product Name : {data?.name}</h2>
                <div className='my-10 w-1/2 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                    <textarea name='message' className="textarea textarea-accent my-5" placeholder="Your report put here" required></textarea>
                    <div className='text-center'><input className='btn btn-secondary w-40' type="submit" value="Report submit" /></div>
                </div>
            </form>
        </div>
    );
};

export default ReportToAdmin;