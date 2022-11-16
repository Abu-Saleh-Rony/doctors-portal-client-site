import React from 'react';

const Infocard = ({ card }) => {

    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card card-side shadow-xl ${bgClass} text-white px-6`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Infocard;