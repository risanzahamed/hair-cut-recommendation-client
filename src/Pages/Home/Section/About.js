import React from 'react';

const About = () => {
    return (
        <div className='lg:w-[1400px] p-10 mx-auto lg:pt-24 lg:pb-24' >
            <div className='grid place-items-center lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='mx-auto align-middle mb-4'>
                    <h2 className='text-4xl font-bold text-black sm:text-4xl xl:text-5xl'>About Us</h2>
                    <p className='text-2xl slide-up-2 mt-8 font-sans text-black'>
                        There are many variations of passages Ipsum available but the majority have suffered alteration.

                        in that some injected is humour or randomised words the which don’t look slightly a believable. If you are Lorem and Ipsum you isn’t anything embarrassing.
                    </p>
                    
                </div>
                <div className='flex justify-between'>
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