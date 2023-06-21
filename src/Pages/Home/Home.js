import React from 'react';
import Hero from './Section/Hero';
import About from './Section/About';
import CustomerReview from './Section/CustomerReview';
import OurTeam from './Section/OurTeam';
import UserDataFrom from './Section/UserDataFrom';
import WhatWeDo from './Section/WhatWeDo';
import NewsLater from './Section/NewsLater';
import ChatBot from '../ChatBot/ChatBot';
import OurSponsors from './Section/OurSponsors';
import OurPricing from './Section/OurPricing';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Hero />
            <About />
            <ChatBot/>
            <WhatWeDo />
            <CustomerReview />
            <UserDataFrom />
            <OurTeam />
            <NewsLater/>
            <OurSponsors/>
            <OurPricing/>
        </div>
    );
};

export default Home;