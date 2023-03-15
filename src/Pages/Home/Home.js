import React from 'react';
import ChatBotms from '../ChatBot/ChatBot';
import About from './Section/About';
import CustomerReview from './Section/CustomerReview';
import Hero from './Section/Hero';
import OurTeam from './Section/OurTeam';
import UserDataFrom from './Section/UserDataFrom';
import WhatWeDo from './Section/WhatWeDo';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Hero />
            <About />
            <WhatWeDo />
            <CustomerReview />
            <UserDataFrom />
            <ChatBotms/>
            <OurTeam />
        </div>
    );
};

export default Home;