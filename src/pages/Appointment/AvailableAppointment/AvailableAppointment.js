import { format } from "date-fns";
import React from "react";



const AvailableAppointment = ({ selectedDate }) => {

    return (
        <div>
            <p className=" text-center text-primary font-bold">Available Appointment On : {format(selectedDate, 'PP')}</p>
        </div>
    )
}

export default AvailableAppointment;