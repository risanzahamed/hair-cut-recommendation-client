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

                    value: "Hair Loss",

                    label: "Hair Loss",

                    trigger: "Hair Loss",

                },

                { value: "Dry Hair", label: "Dry Hair", trigger: "Dry Hair" },
                { value: "Spit Ends", label: "Spit Ends", trigger: "Spit Ends" },
                { value: "Oily/Greasy Hair", label: "Oily/Greasy Hair", trigger: "Oily/Greasy Hair" },
                { value: "Frizzy Hair", label: "Frizzy Hair", trigger: "Frizzy Hair" },
                { value: "Dull Hair", label: "Dull Hair", trigger: "Dull Hair" },
                { value: "Heat Damaged Hair", label: "Heat Damaged Hair", trigger: "Heat Damaged Hair" },

            ],

        },

        {

            id: "Hair Loss",

            message:

                "If you are experiencing Hair Loss such as hair loss or thinning, it is important to consult with a dermatologist or a trichologist. Dr. Jane Smith is a renowned dermatologist with expertise in hair and scalp disorders. She recommends a thorough examination of the scalp and hair, along with blood tests to determine any underlying medical conditions. Based on the diagnosis, Dr. Smith may recommend treatments such as topical or oral medications, hair transplantation, or lifestyle changes such as a balanced diet, stress management, and exercise. It is essential to seek advice only from licensed medical professionals to avoid potential harm.",

            end: true,

        },

        {

            id: "Dry Hair",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

            end: true,

        },

        {

            id: "Spit Ends",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

            end: true,

        },
        {

            id: "Oily/Greasy Hair",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

            end: true,

        },
        {

            id: "Frizzy Hair",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

            end: true,

        },
        {

            id: "Dull Hair",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

            end: true,

        },
        {

            id: "Heat Damaged Hair",

            message:

                "If your hair is breaking, it may be a sign of damage or breakage caused by excessive heat styling, chemical treatments, or improper hair care. Dr. Sarah Johnson, a trichologist, recommends a hair care routine that includes gentle shampooing, deep conditioning, and avoiding heat styling tools. She may also suggest using hair products containing ingredients such as keratin, biotin, and collagen to strengthen the hair. Additionally, Dr. Johnson recommends regular trims to remove split ends and prevent further breakage. If you are experiencing severe hair breakage, it is important to seek professional advice from a licensed trichologist or dermatologist to determine the underlying cause and the best treatment options for your hair.",

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
                                <div >
                                    <h2 className="text-4xl text-white slide-up font-bold font-serif leading-none  sm:text-4xl lg:text-7xl lg:leading-tight">
                                        Our Live FAQ Feature </h2>
                                    <div className='lg:w-[500px]'>
                                        <p className=" text-2xl text-white slide-up-2 mt-8 font-sans ">
                                            This FAQ feature only for who face hair issues and they what to solve it.Our bot will give you some tips and suggest best doctors.</p>
                                    </div>
                                </div>
                                <div className='lg:p-0 lg:ml-56 pb-10'>
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