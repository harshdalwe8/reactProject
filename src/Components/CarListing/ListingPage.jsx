import React, { useState } from 'react';
import './ListingPage.css'; // Import the CSS file for styling
import CarDetail from '../CarDetails/CarDetails';

const ListingPage = (carData) => {
  // Sample data for items


  const [selectCar, setSelectedCar] = useState(0);

  const selectCarFunction = (carId) => {
    setSelectedCar(carId);
    // alert('setSelectedCar');
    console.log(carId);
  };

  return (
    <div className="listing-page">
      <h1>Listing Page</h1>
      <div className="item-list">
        {carData.CarDetailList.map(item => (
          <div key={item.id} className="item" onClick={() => selectCarFunction(item.id)}>

            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>

          </div>
        ))}
      </div>

      <CarDetail rec_carId = {selectCar}/>
    </div>
  );
};

export default ListingPage;
