import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import Servicecard from './Servicecard';


const Servicecards = () => {

    const serviceData = [
        {
            id: 1,
            name: 'fluoride treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'The process of filling cavities is a fairly simple and straightforward one that can be done right at your dentists office.',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter.',
            icon: whitening,
        },
    ]


    return (
        <div className='grid lg: grid-cols-3 grid-cols-1 mt-10 gap-6'>
            {
                serviceData.map(card => <Servicecard
                    key={card.id}
                    card={card}
                ></Servicecard>)
            }

        </div>
    );
};

export default Servicecards;