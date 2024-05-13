import React from "react";

const CarDetail = (rec_carId) => {
    return (
        <div>
            <h1> I recieved {JSON.stringify(rec_carId.rec_carId)}</h1>
        </div>
    );
};

export default CarDetail;