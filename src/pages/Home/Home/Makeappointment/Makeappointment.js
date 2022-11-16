import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import appointment from '../../../../assets/images/appointment.png';

const Makeappointment = () => {
    return (
        <section className='mt-32' style={{ background: `url(${appointment})` }}>
            <div className="hero mt-10 mx-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-32 w-1/2 rounded" />
                    <div className='mx-10'>
                        <h2 className='text-primary'>Appointment</h2>
                        <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Makeappointment;