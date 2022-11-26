import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }


    const handleSignUp = data => {
        console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully')
                const userInfo = {
                    displayName: data.name,
                    options: data.option
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.option)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });
    }

    // save user information
    const saveUser = (name, email, option) => {
        const user = { name, email, option };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email);
                // console.log('save user', data);
                // navigate('/');
            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.accessToken){
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    // }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: "Name is required"
                        })} />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: "Email is required"
                        })} />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 characters or longer" },
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Select Option</span></label>
                        {/* <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 characters or longer" },
                        })} /> */}
                        <select type="option" className="select select-bordered w-full max-w-xs" {...register("option")}>
                            <option selected>Buyers Account</option>
                            <option>Seller Account</option>
                        </select>
                        {/* {errors.password && <p className='text-red-600'>{errors.password.message}</p>} */}
                    </div>


                    <input className='btn btn-accent my-3 w-full max-w-xs' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account. Please <Link to='/login' className='text-secondary'>Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;