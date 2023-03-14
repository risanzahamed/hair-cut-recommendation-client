import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../Redux/features/authApi';

const UserDataFrom = () => {

    const [userData, setuserData] = useState('')
    const dispatch = useDispatch()
    const [postCustomer, { isLoading, isError }] = useRegisterMutation()
    const { user: { email, style, hairSize, age, name } } = useSelector(state => state.auth)


    const handleUserData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const style = form.style.value;
        const age = form.age.value;
        const email = form.email.value;
        const hairSize = form.hairSize.value;
        postCustomer({ name, style, age, email, hairSize })
    }

    useEffect(() => {
        if (isLoading) {
            <h2 className='text-4xl font-semibold text-blue-600'>We are fetching your data</h2>
        }
    }, [isLoading])


    return (
        <div>
            <div className="mx-auto lg:w-[1550px] mt-14 mb-14  overflow-hidden">
                <h2 className='text-7xl text-center font-semibold'>Analyze a best hair haircut</h2>
                <div className="py-10 sm:py-16 lg:py-24 ">
                    <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        {
                            email && style && age && hairSize ? <>

                                <div >
                                    <div> <h2 className='text-2xl text-blue-400 font-semibold'>Hi {name} , Your Age is {age} , Your hair Size is {hairSize} , and Your Selected Style is {style}</h2></div>
                                    <div><p className='text-xl mt-3 mb-4'>Here are some recomandation from us for your hair cut</p></div>
                                </div>
                            </> : <>

                                <form onSubmit={handleUserData} action="#" method="POST" className="mt-8">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900"> Your Name </label>
                                            <div className="mt-2.5">
                                                <input
                                                    name='name'
                                                    type="text"
                                                    id=""
                                                    placeholder="Type your name"
                                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        {
                                            email ? <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Your Email </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        name='email'
                                                        type="email"
                                                        defaultValue={email}
                                                        disabled
                                                        id=""
                                                        placeholder="Type your email"
                                                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div> : <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Your Email </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        name='email'
                                                        type="email"
                                                        id=""
                                                        placeholder="Type your email"
                                                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>
                                        }

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900"> Your Age </label>
                                            <div className="mt-2.5">

                                                <select name='age' required className="select block w-full text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">
                                                    <option
                                                        disabled selected>Select Your Age Type</option>
                                                    <option>18-30 years</option>
                                                    <option>31-45 years</option>
                                                    <option>46-60 years</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900"> Your Hair Size </label>
                                            <div className="mt-2.5">
                                                <select name='hairSize' required className="select block w-full text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">

                                                    <option disabled selected>Select Your Hair Size</option>
                                                    <option>Long</option>
                                                    <option>Midium</option>
                                                    <option>Small</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900"> Style Type </label>
                                            <div className="mt-2.5">
                                                <select name='style' required className="select block w-full text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">

                                                    <option disabled selected>Pick A Style</option>
                                                    <option>New Styles</option>
                                                    <option>Unique Style</option>
                                                    <option>Formal</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Analyze</button>
                                        </div>
                                    </div>
                                </form>


                            </>
                        }


                        {
                            email && style === "New Styles" && age === "18-30 years" && hairSize === "Midium" ?
                                <div>
                                    <div className='grid grid-cols-3 gap-5'>
                                        <div>
                                            <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                        </div>
                                        <div>
                                            <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                        </div>
                                        <div>
                                            <img src="https://i.pinimg.com/736x/ad/e1/23/ade123182a589cf8a2270b929c1f5cc1.jpg" alt="" srcset="" />
                                        </div>
                                        <div>
                                            <img src="https://content.latest-hairstyles.com/wp-content/uploads/mens-medium-haircut-straight-hard-part.jpg" alt="" srcset="" />
                                        </div>
                                        <div>
                                            <img src="https://www.menshairstyletrends.com/wp-content/uploads/2016/02/agusbarber__and-mid-fade-and-longer-textuerd-hair-on-top.jpg" alt="" srcset="" />
                                        </div>

                                        <div>
                                            <img src="https://menshaircuts.com/wp-content/uploads/2018/05/medium-length-hairstyles-guide-tapered-pompadour.jpg" alt="" srcset="" />
                                        </div>
                                    </div>

                                </div>

                                : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>

                                &&
                                <>
                                    {
                                        email && style === "New Styles" && age === "18-30 years" && hairSize === "long" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>
                                &&
                                <>
                                    {
                                        email && style === "New Styles" && age === "46-60 years" && hairSize === "Small" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>

                                &&

                                <>
                                    {
                                        email && style === "New Styles" && age === "31-45 years" && hairSize === "Long" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://i.pinimg.com/736x/ad/e1/23/ade123182a589cf8a2270b929c1f5cc1.jpg" alt="" srcset="" />
                                                    </div>
                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }


                                </>

                                &&

                                <>
                                    {
                                        email && style === "New Styles" && age === "46-60 years" && hairSize === "Small" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>

                                &&

                                <>
                                    {
                                        email && style === "Unique Style" && age === "46-60 years" && hairSize === "midium" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>

                                &&

                                <>
                                    {
                                        email && style === "Unique Style" && age === "31-45 years" && hairSize === "Long" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>


                                &&

                                <>
                                    {
                                        email && style === "Unique Style" && age === "18-30 years" && hairSize === "Small" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>
                                &&

                                <>
                                    {
                                        email && style === "Unique Style" && age === "18-30 years" && hairSize === "Long" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>


                                &&

                                <>
                                    {
                                        email && style === "Formal" && age === "31-45 years" && hairSize === "Long" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://i.pinimg.com/736x/ad/e1/23/ade123182a589cf8a2270b929c1f5cc1.jpg" alt="" srcset="" />
                                                    </div>
                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }


                                </>

                                &&

                                <>
                                    {
                                        email && style === "Formal" && age === "46-60 years" && hairSize === "Small" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>


                                &&

                                <>
                                    {
                                        email && style === "Formal" && age === "18-30 years" && hairSize === "Small" ?
                                            <div>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div>
                                                        <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    <div>
                                                        <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcset="" />
                                                    </div>

                                                </div>

                                            </div> : <><img className='ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
                                    }
                                </>



                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDataFrom;