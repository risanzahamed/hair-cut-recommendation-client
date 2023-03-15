import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const service = useLoaderData()
    return (

        <div>
            <h2  className="lg:text-6xl text-2xl font-semibold text-center p-14 lg:p-24 tracking-wide">Our Services</h2>
            <div className='grid lg:grid-cols-3  mx-auto lg:w-[1500px]'>
                {
                    service.map(serv => <ServiceCard
                        serv={serv}
                        key={serv}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;