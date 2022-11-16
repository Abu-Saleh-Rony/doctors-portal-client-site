import React from 'react';
import treatment from '../../../../assets/images/treatment.png';

const Cardsection = () => {
    return (
        <div className="hero mt-10 mx-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' className="lg:max-w-[350px] sm:max-w-[120px] rounded shadow-2xl" />
                <div className='lg:max-w-[450px] sm:max-w-[250px] lg: mx-6'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cardsection;