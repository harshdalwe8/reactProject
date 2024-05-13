import React, { createContext, useContext, useState } from 'react';

// Create a context
const PizzaContext = createContext();

// Create a provider component
const PizzaProvider = ({ children }) => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [pizzaPrice, setPizzaPrice] = useState(0);

  return (
    <PizzaContext.Provider value={{ selectedPizza, setSelectedPizza, pizzaPrice, setPizzaPrice }}>
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaProvider, PizzaContext };
