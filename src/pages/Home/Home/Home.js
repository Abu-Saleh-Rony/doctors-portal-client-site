import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../Infocards/Infocards';
import Servicecards from './ServiceCard/Servicecards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Servicecards></Servicecards>

        </div>
    );
};

export default Home;