import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Infocard from './Infocard';

const Infocards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 A.M to 5:00 P.M Everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit Our Locations',
            description: 'San Jose, Califonia, USA',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+8801738967493',
            icon: phone,
            bgClass: 'bg-secondary'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
            {
                cardData.map(card => <Infocard
                    key={card.id}
                    card={card}
                ></Infocard>)
            }

        </div>
    );
};

export default Infocards;