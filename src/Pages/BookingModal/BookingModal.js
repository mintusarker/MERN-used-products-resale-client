import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ items, setItems}) => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">yyyy</h3>
                    <form className='grid gap-3 mt-10 grid-cols-1'>
                        <input type="text" defaultValue={items?.name} disabled className="input input-bordered w-full" />
                        <input type="text" defaultValue={items?.resell_price} disabled className="input input-bordered w-full" />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />  
                        <input type="submit" className='btn btn-accent w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;