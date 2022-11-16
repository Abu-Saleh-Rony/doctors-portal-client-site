import React from 'react';

const Servicecard = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className="card card-compact px-6 bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title justify-center ">{name}</h2>
                <p className='text-center' >{description}</p>

            </div>
        </div>
    );
};

export default Servicecard;