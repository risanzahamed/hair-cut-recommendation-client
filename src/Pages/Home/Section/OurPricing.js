import React from 'react';

const OurPricing = () => {
    return (
        <div>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Salon Package and Pricing</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                            <div className="absolute hidden top-3 right-3">
                                <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="px-4 py-5 lg:p-8">
                                <p className="text-2xl  text-black font-bold">"Glamour Makeover Package" - $99</p>
                          
                                <ul className="flex text-left flex-col mt-8 space-y-1">
                                    <li className="text-base font-medium text-gray-900 lg:text-md">1.Includes haircut</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">2.Blowout</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">3.Professional makeup application for a complete glamorous transformation.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                            <div className="absolute hidden top-3 right-3">
                                <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="px-4 py-5 lg:p-8">
                            <p className="text-2xl  text-black font-bold">"Relax & Renew Package" - $149</p>
                                <ul className="flex text-left flex-col mt-8 space-y-1">
                                    <li className="text-base font-medium text-gray-900 lg:text-md">1.Indulge in a soothing massage</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">2.Rejuvenating facial</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">3.A refreshing haircut to unwind and revitalize your senses.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">
                            <div className="absolute top-3 right-3">
                                <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="px-4 py-5 lg:p-8">
                            <p className="text-2xl  text-black font-bold">"Ultimate Pampering Package" - $199</p>
                                <ul className="flex text-left flex-col mt-8 space-y-1">
                                    <li className="text-base font-medium text-gray-900 lg:text-md">1.Experience the ultimate luxury with a haircut</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">2.Deep conditioning treatment</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">Spa manicure</li>
                                    <li className="text-base font-medium text-gray-600 lg:text-md">A relaxing spa pedicure.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurPricing;