import React from 'react';

const AppointmentsOption = ({ AppointmentsOptions }) => {
    const { name, slots } = AppointmentsOptions;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            </div>
        </div>
    );
};

export default AppointmentsOption;