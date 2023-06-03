import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const ReportModal = ({ items, setItems }) => {
    const { user } = useContext(AuthContext);

    const handleReport = (event) => {
        event.preventDefault();
        const form = event.target;
        const item = form.item.value;
        const email = form.email.value;
        const message = form.message.value;

        const report = {
            image: items?.image,
            itemName: item,
            email,
            message
        }
        console.log(report)

        fetch('https://used-products-resale-server-alpha.vercel.app/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...report, image: items?.image })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(null);
                toast.success('Report Submitted Successfully')
            })
    }

    return (
        <div>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-center text-2xl text-red-500'>Report to Admin</h2>
                    <form onSubmit={handleReport} className='grid gap-3 mt-4 grid-cols-1'>
                        <img className='h-14 w-14' name='image' src={items?.image} alt="" />
                        <input name='item' type="text" defaultValue={items?.name} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                            <textarea name='message' className="textarea textarea-accent my-5" placeholder="Your report put here" required></textarea>
                        </div>
                        <input type="submit" className='btn btn-warning w-full' value="Report Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;