import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser, signGoogle } from '../../Redux/features/authSlice';

const Register = () => {
    const { isLoading, user: {email} } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { handleSubmit, register } = useForm();
    const handleCreateCustomer = (data) => {
        console.log(data);
        dispatch(createUser({email : data.email, password : data.password}))
    }

    const handleGoogle = () => {
        dispatch(signGoogle())
      }
      useEffect(() => {
        if (!isLoading && email) {
            toast.success('user created successfully')
            navigate("/")
        }
    }, [isLoading, email])


    return (
        <div>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Create your customer account</h2>
                            <p className="mt-2 text-base text-gray-600">Already have an account? <Link to='/login' title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Link></p>

                            <form onSubmit={handleSubmit(handleCreateCustomer)} action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Full Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id=""
                                                {...register("name")}
                                                placeholder="Enter your full name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email")}
                                                id=""
                                                placeholder="Enter email to get started"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Phone </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="phone"
                                                {...register("phone")}
                                                id=""
                                                placeholder="Enter your Phone Number"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Password </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                name="password"
                                                {...register("password")}
                                                id=""
                                                placeholder="Enter your password"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Create Customer account
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    onClick={handleGoogle}
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign up with Google
                                </button>

                               
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center  px-4 py-10 sm:py-16 lg:py-24  sm:px-6 lg:px-8 ">
                        <div>
                            <img className="lg:w-[900px]" src="" alt="" />


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Register;