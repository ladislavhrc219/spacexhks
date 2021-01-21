import React from 'react';
import Flight from "./Flight";

const Flights = ({flights}) => {
    return (
        <>
            <div className="title">
            <h2>  All Historical Events</h2>


       
           
            {flights.map(flight => (
                <Flight key={flight.id} {...flight} />
            ))}

            </div>
        </>
    );
};

export default Flights;