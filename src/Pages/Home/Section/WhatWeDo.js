import React from 'react';

const WhatWeDo = () => {
    return (
        <div>
            <div className="relative">

                <section className=" lg:w-[1450px] place-items-center mx-auto mt-24 mb-24 overflow-hidden">
                    <div className="flex flex-col place-items-center lg:flex-row lg:items-stretch ">
                        <div data-aos="flip-up" className="relative flex items-center place-items-center justify-center w-full lg:order-2 ">


                            <div className="relative px-4  pb-16 text-center lg:text-left">
                                <h1 className="text-4xl font-bold text-black sm:text-4xl xl:text-5xl">
                                    WHAT WE DO
                                </h1>
                                <p className="mt-8 text-xl text-black">We help you to make your remote work life easier. Build a distruction free working experience.</p>


                                <div className='grid lg:grid-cols-2 gap-5'>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>Hair Cutting</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Get a fresh new look with our expert hair cutting services.  </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Shaving Styles</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Whether you prefer a clean-shaven look or a more rugged beard, our shaving services can help you achieve your desired style.  </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Spa & GYM</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Relax and rejuvenate your body and mind with our luxurious spa treatments and state-of-the-art gym facilities.  </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Body Treatments</h2>
                                        <p className='text-xl text-black font-normal mt-3'>LTreat yourself to a pampering session with our range of body treatments.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-right" className="relative w-full align-middle justify-center lg:m-0  ml-44 overflow-hidden lg:order-1  lg:h-auto lg:w-5/12">
                            <div>
                                <img className="object-cover h-96 lg:h-full" src="https://demo.webtend.net/html/qutter/assets/images/about/what-we-do.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default WhatWeDo;