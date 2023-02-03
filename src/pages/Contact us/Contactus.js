import React from 'react';
import appointment from '../../assets/images/appointment.png';
const Contactus = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60 ">
                <div className='my-20'>
                    <h2 className='text-2xl text-primary text-center '>Contact</h2>
                    <h2 className='text-3xl text-white text-center'>Stay Connected with us</h2>
                </div>

            </div>
            <div className="hero-content text-center text-neutral-content">

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contactus;