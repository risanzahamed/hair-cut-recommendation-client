import React from 'react';

const CustomerReview = () => {
    return (
        <div className='grid lg:grid-cols-3 place-items-center mx-auto mt-24 mb-24  '>
            <div data-aos="fade-right">
                <img className='lg:w-auto lg:h-auto w-[300px] h-[400px] mb-10' src="https://demo.webtend.net/html/qutter/assets/images/about/about-left.jpg" alt="" srcSet="" />
            </div>
            <div data-aos="zoom-in" className='p-10 text-center align-middle  w-full'>
                <h1 className='font-bold text-3xl'>WE’RE BEST BARBERS & HAIR CUTTING SALON</h1>
                <p className='text-xl mt-4'>If you're looking for a top-notch hair salon, look no further than We're Best Barbers & Hair Cutting Salon. Their team of skilled stylists are dedicated to providing the highest level of service to each and every client who walks through their doors. From classic haircuts to trendy styles, they have the expertise and creativity to help you achieve the perfect look.</p>
                <div className="avatar  mt-6">

                    <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" cl alt="" srcSet="" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <img className='lg:w-full lg:h-full w-[300px] h-[400px] mt-10' src="https://demo.webtend.net/html/qutter/assets/images/about/about-right.jpg" alt="" srcSet="" />
            </div>
        </div>
    );
};

export default CustomerReview;