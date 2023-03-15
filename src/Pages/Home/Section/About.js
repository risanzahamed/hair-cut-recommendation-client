import React from 'react';

const About = () => {
    return (
        <div className='lg:w-[1400px] p-10 mx-auto lg:pt-24 lg:pb-24' >
            <div className='grid place-items-center lg:grid-cols-2 grid-cols-1 gap-5'>
                <div data-aos="fade-up-right" className='mx-auto align-middle mb-4'>
                    <h2 className='text-4xl font-bold text-black sm:text-4xl xl:text-5xl'>About Us</h2>
                    <p className='text-2xl slide-up-2 mt-8 font-sans text-black'>
                    At Salion, we believe that everyone deserves to look and feel their best. That's why we offer a full range of hair services designed to help you achieve your perfect look. From haircuts and styling to color and treatments, our experienced stylists are dedicated to providing you with personalized attention and exceptional service. Come visit us and let us help you unleash your inner beauty.
                    </p>
                    
                </div>
                <div data-aos="zoom-in-up" className='flex justify-between'>
                    <div>
                        <img className='w-80 lg:mr-3' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure1.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <img className='w-80 ml-5' src="https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure2.jpg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;