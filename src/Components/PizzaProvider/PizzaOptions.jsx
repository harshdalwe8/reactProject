import React, { useContext } from 'react';
import { PizzaContext } from './PizzaProvider';

const PizzaOptions = () => {
  const { selectedPizza, setSelectedPizza, setPizzaPrice } = useContext(PizzaContext);

  const handlePizzaSelection = (pizza, price) => {
    setSelectedPizza(pizza);
    setPizzaPrice(price);
  };

  return (
    <div>
      <h2>Select your Pizza:</h2>
      <button onClick={() => handlePizzaSelection('Margherita', 8)}>Margherita</button>
      <button onClick={() => handlePizzaSelection('Pepperoni', 10)}>Pepperoni</button>
      <button onClick={() => handlePizzaSelection('Vegetarian', 9)}>Vegetarian</button>
    </div>
  );
};

export default PizzaOptions;
