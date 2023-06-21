import React from 'react';

const NewsLater = () => {
    return (
        <div>
            <section class="relative lg:w-[1400px] mx-auto py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full md:object-bottom md:scale-150 md:origin-top-right" src="https://images.pexels.com/photos/897265/pexels-photo-897265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="text-center md:w-2/3  md:text-left">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Subscribe now for latest offers and updates</h2>
                        <p class="mt-4 text-base text-gray-200">Stay ahead of the trends! Subscribe now to receive exclusive offers and updates on the latest haircuts, styles, and salon promotions. Don't miss out!</p>

                        <form action="#" method="POST" class="mt-8 lg:mt-12">
                            <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                                <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                                    <div class="relative text-gray-400 focus-within:text-gray-600">
                                        <label for="email" class="sr-only"></label>
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email address"
                                            class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                    Get instant access
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NewsLater;