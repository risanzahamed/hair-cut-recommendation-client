import React from 'react';
import Chatbot from 'react-simple-chatbot'

const ChatBotms = () => {
    const steps = [

        {

            id: "Greet",

            message: "Hello, Welcome to our Hair cut Recommandtion app",

            trigger: "Done",

        },

        {

            id: "Done",

            message: "Please enter your name!",

            trigger: "waiting1",

        },

        {

            id: "waiting1",

            user: true,

            trigger: "Name",

        },

        {

            id: "Name",

            message: "Hi {previousValue}, Please select your issue",

            trigger: "issues",

        },

        {

            id: "issues",

            options: [

                {

                    value: "React",

                    label: "React",

                    trigger: "React",

                },

                { value: "Angular", label: "Angular", trigger: "Angular" },

            ],

        },

        {

            id: "React",

            message:

                "Thanks for letting your React issue, Our team will resolve your issue ASAP",

            end: true,

        },

        {

            id: "Angular",

            message:

                "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

            end: true,

        },

    ];
    return (
        <div>

            <div>
                <div>
                    <div className="px-4 mb-24 bg-black mx-auto overflow-hidden">
                        <div className="py-10 sm:py-16 lg:w-[1450px]  mx-auto pt-10 pb-10 lg:py-24 ">
                            <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                                <div data-aos="fade-right">
                                    <h2 className="text-4xl text-white slide-up font-bold font-serif leading-none  sm:text-4xl lg:text-7xl lg:leading-tight">
                                        Our Live Chating Feature </h2>
                                    <div className='lg:w-[500px]'>
                                        <p className=" text-2xl text-white slide-up-2 mt-8 font-sans ">
                                            This chat feature only for who face hair issues and they what to solve it.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className='lg:p-0 pb-10'>
                                    <Chatbot steps={steps} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChatBotms;