import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../Infocards/Infocards';
import Cardsection from './Cardsection/Cardsection';
import Makeappointment from './Makeappointment/Makeappointment';
import Servicecards from './ServiceCard/Servicecards';
import Testimonials from './Testimonial/Testimonials';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Servicecards></Servicecards>
            <Cardsection></Cardsection>
            <Makeappointment></Makeappointment>
            <Testimonials></Testimonials>


        </div>
    );
};

export default Home;