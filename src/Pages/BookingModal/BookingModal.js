import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ items, setItems }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const item = form.item.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            price: price,
            itemName: item,
            userName: name,
            email,
            phone,
            location
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setItems(null);
            toast.success('Your Booking Confirmed')
        })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">Laptop Name : {items?.name}</h3>
                    <img className='h-14 w-14' name='image' src={items?.image_url} alt="" />
                    <form onSubmit={handleBooking} className='grid gap-3 mt-10 grid-cols-1'>
                        <input name='item' type="text" defaultValue={items?.name} disabled className="input input-bordered w-full" />
                        <input name='price' type="text" defaultValue={items?.resell_price} disabled className="input input-bordered w-full" />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="location" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='btn btn-accent w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;