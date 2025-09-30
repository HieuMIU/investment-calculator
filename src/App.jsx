import { useState } from "react";
import Header from "./components/Header";
import InvestmentResult from "./components/InvestmentResult";
import { calculateInvestmentResults } from './util/investment.js';
function App() {

  const [userInput, setUserInput] = useState(
      {
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
      });
  
  const [investmentResult, setInvestmentResult] = useState([]);

  function handleChangeUserInput(newInput) {
    setUserInput(newInput);
    const calResult = calculateInvestmentResults(newInput);
    setInvestmentResult(calResult);
  }

  return ( 
    <>
      <Header userInput={userInput} onChange={handleChangeUserInput} />
      <InvestmentResult results={investmentResult} />
    </>
  );
}

export default App
