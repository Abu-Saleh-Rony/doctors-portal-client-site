import React from 'react';

const AppointmentsOption = ({ AppointmentsOptions, setTreatment }) => {
    const { name, slots } = AppointmentsOptions;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(AppointmentsOptions)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOption;