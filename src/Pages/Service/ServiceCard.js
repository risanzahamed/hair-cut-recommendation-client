import React from 'react';

const ServiceCard = ({ serv }) => {
    return (
        <div>
            <div data-aos="fade-up" className="m-8 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={serv.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-medium p-2 tracking-wide">{serv.categoryName}</h2>
                        <h2 className="text-3xl font-medium p-2 tracking-wide" > {serv.price} </h2>
                        <p className="dark:text-gray-100">{serv.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;