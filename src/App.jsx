import { useState } from "react";
import Header from "./components/Header";
import InvestmentResult from "./components/InvestmentResult";
import UserInput from "./components/UserInput.jsx";
function App() {

  const [userInput, setUserInput] = useState(
      {
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
      });
  
  let isInvalidInput = false;

  function handleChangeUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
    
    if(userInput.duration < 0)
      isInvalidInput = true;
  }

  return ( 
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChangeUserInput} />
      {isInvalidInput && <p className="center">Please enter a duration greater than zero.</p>}
      {!isInvalidInput && <InvestmentResult input={userInput} />}
    </>
  );
}

export default App
