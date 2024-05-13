import React, { useContext } from 'react';
import { PizzaContext } from './PizzaProvider';

const PizzaOrderSummary = () => {
  const { selectedPizza, pizzaPrice } = useContext(PizzaContext);

  return (
    <div>
      <h2>Order Summary:</h2>
      {selectedPizza ? (
        <p>You've selected: {selectedPizza} - Price: ${pizzaPrice}</p>
      ) : (
        <p>No pizza selected</p>
      )}
    </div>
  );
};

export default PizzaOrderSummary;
