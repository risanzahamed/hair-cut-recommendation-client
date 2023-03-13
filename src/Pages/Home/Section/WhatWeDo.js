import React from 'react';

const WhatWeDo = () => {
    return (
        <div>
            <div class="relative">

                <section class=" lg:w-[1450px] place-items-center mx-auto mt-24 mb-24 overflow-hidden">
                    <div class="flex flex-col place-items-center lg:flex-row lg:items-stretch ">
                        <div class="relative flex items-center place-items-center justify-center w-full lg:order-2 ">


                            <div class="relative px-4  pb-16 text-center lg:text-left">
                                <h1 class="text-4xl font-bold text-black sm:text-4xl xl:text-5xl">
                                    WHAT WE DO
                                </h1>
                                <p class="mt-8 text-xl text-black">We help you to make your remote work life easier. Build a distruction free working experience.</p>


                                <div className='grid lg:grid-cols-2 gap-5'>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>Hair Cutting</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Shaving Styles</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Spa & GYM</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                    </div>

                                    <div className='border mt-10 p-10'>
                                        <h2 className='text-2xl font-semibold text-black'>
                                            Body Treatments</h2>
                                        <p className='text-xl text-black font-normal mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                            <div>
                                <img class="object-cover" src="https://demo.webtend.net/html/qutter/assets/images/about/what-we-do.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default WhatWeDo;