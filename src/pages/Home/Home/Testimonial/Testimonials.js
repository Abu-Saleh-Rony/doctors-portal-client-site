import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Testimonial from './Testimonial';


const Testimonials = () => {
    const reviews = [

        {

            id: 1,
            name: 'Winson Herry',
            img: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',

        },
        {
            id: 2,
            name: 'Scarlett Johansson',
            img: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',


        },
        {
            id: 3,
            name: 'Jessica Alba',
            img: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
        }]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary'>Testimonial</h2>
                    <h2 className='text-3xl text-bold'>What Our Patients Says</h2>
                </div>
                <div>
                    <figure>
                        <img className='w-24 lg:w-48' src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Testimonial
                        key={review.id}
                        review={review}
                    >
                    </Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;