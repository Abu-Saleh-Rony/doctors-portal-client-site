import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentsOption from "../AppointmentsOption/AppointmentsOption";
import BookingModal from "../BookingModal/BookingModal";



const AvailableAppointment = ({ selectedDate }) => {
    const [AppointmentsOptions, setAppointmentOption] = useState([])

    const [treatment, setTreatment] = useState(null);
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
                setTreatment={setTreatment}

            >
            </AppointmentsOption>)
                }

            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>
            }
        </section>
    )
}

export default AvailableAppointment;