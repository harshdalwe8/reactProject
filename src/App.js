import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent';
import PizzaOptions from './Components/PizzaProvider/PizzaOptions';
import { PizzaProvider } from './Components/PizzaProvider/PizzaProvider';
import PizzaOrderSummary from './Components/PizzaProvider/pizzaOrderSummery';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <PizzaProvider>
      <div className="App">
        <h1>Pizza Ordering System</h1>
      
        <PizzaOptions />
        <PizzaOrderSummary />
      </div>
    </PizzaProvider>
 
    </div>
  );
}

export default App;
