import React from 'react';

const Hero = () => {
    return (
        <div>
            <div>
                <div className="px-4 mb-24 bg-black mx-auto overflow-hidden">
                    <div className="py-10 sm:py-16 lg:w-[1450px]  mx-auto pt-10 pb-10 lg:py-24 ">
                        <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                            <div>
                                <h2 className="text-4xl text-white slide-up font-bold font-serif leading-none text-black sm:text-4xl lg:text-7xl lg:leading-tight">
                                    Collection Hair Cut and Beard </h2>
                                <div className='lg:w-[500px]'>
                                    <p className=" text-2xl text-white slide-up-2 mt-8 font-sans text-black">
                                        "Transform Your Look: Get a Fresh Haircut and Stylish Beard with Our Collection of Grooming Essentials. Upgrade Your Style and Confidence Today!"</p>
                                </div>
                            </div>

                            <div data-aos="fade-left">

                                <img className='h-[450px]' src="https://html.dynamiclayers.net/dl/barbershop/img/slide-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;