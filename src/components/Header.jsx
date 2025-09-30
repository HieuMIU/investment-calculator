import logo from "../assets/investment-calculator-logo.png";

export default function Header({ userInput, onChange }) {
    function handleChangeValue(event) {
        const { id, value } = event.target;
        // Convert value to number and ensure it's not negative
        const numericValue = Math.max(0, Number(value));

        // Update the corresponding field in userInput
        onChange({
            ...userInput,
            [id]: numericValue,
        });
    }

    return (
        <div id="header">
            <img src={logo} alt="Investment Calculator Logo" />
            <h1>Investment Calculator</h1>
            <div id="user-input">
                <div className="input-group">
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input
                        type="number"
                        id="initialInvestment"
                        value={userInput.initialInvestment || ""}
                        placeholder="Enter amount"
                        min="0"
                        onChange={handleChangeValue}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        value={userInput.annualInvestment || ""}
                        placeholder="Enter amount"
                        min="0"
                        onChange={handleChangeValue}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="expectedReturn">Expected Return (%)</label>
                    <input
                        type="number"
                        id="expectedReturn"
                        value={userInput.expectedReturn || ""}
                        placeholder="Enter percentage"
                        min="0"
                        step="0.01"
                        onChange={handleChangeValue}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="duration">Duration (Years)</label>
                    <input
                        type="number"
                        id="duration"
                        value={userInput.duration || ""}
                        placeholder="Enter years"
                        min="1"
                        onChange={handleChangeValue}
                    />
                </div>
            </div>
        </div>
    );
}