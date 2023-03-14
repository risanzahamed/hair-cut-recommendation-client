import React from 'react';

const CustomerReview = () => {
    return (
        <div className='grid lg:grid-cols-3 place-items-center mx-auto mt-24 mb-24  '>
            <div>
                <img className='lg:w-auto lg:h-auto w-[300px] h-[400px] mb-10' src="https://demo.webtend.net/html/qutter/assets/images/about/about-left.jpg" alt="" srcset="" />
            </div>
            <div className='p-10 text-center align-middle  w-full'>
                <h1 className='font-bold text-3xl'>WE’RE BEST BARBERS & HAIR CUTTING SALON</h1>
                <p className='text-xl mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div className="avatar  mt-6">

                    <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" cl alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div>
                <img className='lg:w-full lg:h-full w-[300px] h-[400px] mt-10' src="https://demo.webtend.net/html/qutter/assets/images/about/about-right.jpg" alt="" srcset="" />
            </div>
        </div>
    );
};

export default CustomerReview;