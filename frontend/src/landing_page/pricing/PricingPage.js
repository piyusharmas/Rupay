import React from 'react'

import OpenAccounts from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

import Hero from './Hero';
import Brokerage from './Brokerage';


function PricingPage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <OpenAccounts />
            <Brokerage />
            <Footer />
        </>
     );
}

export default PricingPage;