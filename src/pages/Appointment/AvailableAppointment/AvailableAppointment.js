import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentsOption from "../AppointmentsOption/AppointmentsOption";



const AvailableAppointment = ({ selectedDate }) => {
    const [AppointmentsOptions, setAppointmentOption] = useState([])
    useEffect(() => {
        fetch('AppointmentsOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])

    return (
        <section className="mt-6">
            <p className=" text-center text-primary font-bold">Available Appointment On : {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'
            >{AppointmentsOptions.map(option => <AppointmentsOption
                key={option._id}
                AppointmentsOptions={option}

            >
            </AppointmentsOption>)
                }

            </div>
        </section>
    )
}

export default AvailableAppointment;