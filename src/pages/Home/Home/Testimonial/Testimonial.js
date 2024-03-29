import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, description, location } = review
    return (
        <div className="card ">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;