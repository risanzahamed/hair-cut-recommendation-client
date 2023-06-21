import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../Redux/features/authApi';
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
            <div data-aos="zoom-in" className="mx-auto p-10 lg:w-[1550px] mt-14 mb-14  overflow-hidden">
                <h2 className="text-4xl font-bold text-black sm:text-4xl xl:text-5xl text-center">Analyze a best hair haircut</h2>
                <div className=" sm:py-16 lg:py-24 ">
                    <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        {
                            email && style && age && hairSize ? <>

                                <div className='p-5'>
                                    <div> <h2 className='text-2xl text-blue-400 font-semibold'>Hi {name} , Your Age is {age} , Your hair Size is {hairSize} , and Your Selected Style is {style}</h2></div>
                                    <div><p className='text-xl mt-3 mb-4'>Here are some recomandation from us for your hair cut</p></div>
                                </div>
                            </> : <>

                                <form onSubmit={handleUserData} action="#" method="POST" className="mt-8">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Your Name </label>
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
                                                <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Your Email </label>
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
                                                <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Your Email </label>
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
                                            <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Your Age </label>
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
                                            <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Your Hair Size </label>
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
                                            <label htmlhtmlFor="" className="text-base font-medium text-gray-900"> Style Type </label>
                                            <div className="mt-2.5">
                                                <select name='style' required className="select block w-full text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">

                                                    <option disabled selected>Pick A Style</option>
                                                    <option>New Styles</option>
                                                    <option>Abul Style</option>
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
                            email && style === "New Styles" && age && hairSize ?


                                <div>
                                    <div className='grid lg:grid-cols-3 grid-cols-1 p-5 gap-5'>
                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcSet="">

                                                    <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/18-brushed-back-taper-fade.jpg?resize=500%2C482&ssl=1" alt="" srcSet="" />

                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcSet="">

                                                    <img src="https://cdn.luxe.digital/media/2020/05/22092123/best-medium-length-hairstyles-men-slicked-back-undercut-luxe-digital.jpg" alt="" srcSet="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://i.pinimg.com/736x/ad/e1/23/ade123182a589cf8a2270b929c1f5cc1.jpg" alt="" srcSet="">

                                                    <img src="https://i.pinimg.com/736x/ad/e1/23/ade123182a589cf8a2270b929c1f5cc1.jpg" alt="" srcSet="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://content.latest-hairstyles.com/wp-content/uploads/mens-medium-haircut-straight-hard-part.jpg" alt="" srcSet="">

                                                    <img src="https://content.latest-hairstyles.com/wp-content/uploads/mens-medium-haircut-straight-hard-part.jpg" alt="" srcSet="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://www.menshairstyletrends.com/wp-content/uploads/2016/02/agusbarber__and-mid-fade-and-longer-textuerd-hair-on-top.jpg" alt="" srcSet="">

                                                    <img src="https://www.menshairstyletrends.com/wp-content/uploads/2016/02/agusbarber__and-mid-fade-and-longer-textuerd-hair-on-top.jpg" alt="" srcSet="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>

                                        <div>
                                            <PhotoProvider>
                                                <PhotoView src="https://menshaircuts.com/wp-content/uploads/2018/05/medium-length-hairstyles-guide-tapered-pompadour.jpg" alt="" srcSet="">

                                                    <img src="https://menshaircuts.com/wp-content/uploads/2018/05/medium-length-hairstyles-guide-tapered-pompadour.jpg" alt="" srcSet="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                    </div>
                                </div>

                                : <><img className='lg:ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>

                                    &&


                                    email && style === "Abul Style" && age && hairSize ?


                                    <div>
                                        <div className='grid lg:grid-cols-3 grid-cols-1 p-5 gap-5'>
                                            <div>
                                                <img src="https://i.pinimg.com/originals/13/08/f1/1308f184a244549701fe4100fea404e8.jpg" alt="" srcSet="" />
                                            </div>
                                            <div>
                                                <img src="https://i.pinimg.com/originals/af/a4/4c/afa44c616abd23de2cbafd82c4d72103.jpg" alt="" srcSet="" />
                                            </div>
                                            <div>
                                                <img src="https://e1.pxfuel.com/desktop-wallpaper/950/687/desktop-wallpaper-10-best-short-haircuts-for-men-boy-hairstyle-2021.jpg" alt="" srcSet="" />
                                            </div>
                                            <div>
                                                <img src="https://www.showstoppersalon.com/wp-content/uploads/2021/03/hair-stylehair-styles-for-boys-hair-styles-men-salon-near-me-hair-boy-hair-salon-near-me-salon-in-mira-road-salons-hair-styles-for-wedding-near-me-17.jpg" alt="" srcSet="" />
                                            </div>
                                            <div>
                                                <img src="https://i.pinimg.com/originals/04/15/ae/0415ae3e48a473860529ea83fc32c833.jpg" alt="" srcSet="" />
                                            </div>

                                            <div>
                                                <img src="https://i.pinimg.com/originals/be/45/ee/be45ee0038a623b0cda75881c6b7d266.jpg" alt="" srcSet="" />
                                            </div>
                                        </div>
                                    </div>

                                    : <><img className='lg:ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>

                                    &&


                                    <>
                                        {
                                            email && style === "Formal" && age && hairSize ?
                                                <div>
                                                    <div className='grid lg:grid-cols-3 grid-cols-1 p-5 gap-5'>
                                                        <div>
                                                            <img src="https://i.pinimg.com/originals/87/ce/0c/87ce0c9d9675ab3c851ddd866f442c39.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://i.pinimg.com/736x/6d/3a/c8/6d3ac857242df0604f73b05177919d75.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://machohairstyles.com/wp-content/uploads/2017/03/professional-hairstyle-for-men-7-1940x2048.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://menshairstyle.funtouzy.com/wp-content/uploads/2019/12/high-quiff-with-lines-design-25-Best-Men%E2%80%99s-Prom-Hairstyles.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://i.pinimg.com/originals/f0/7e/46/f07e464b0880b10ed4e6dd0b6c93e56b.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://i.pinimg.com/originals/cf/09/9d/cf099d8594c0eb728243a3c470d5a22c.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://stylemann.com/wp-content/uploads/2016/10/49-Finger-Combed-Pomp.jpg" alt="" srcSet="" />
                                                        </div>
                                                        <div>
                                                            <img src="https://menshairstyle.funtouzy.com/wp-content/uploads/2019/08/An-amazing-fade-haircut-01-768x768.jpg" alt="" srcSet="" />
                                                        </div>
                                                    </div>

                                                </div> : <><img className='lg:ml-32' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/06/03_Image-2.jpg" alt="" /></>
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