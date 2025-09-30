export default function UserInput({ userInput, onChange }) {
    
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

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" 
                       required
                       value={userInput.initialInvestment}
                       onChange={(event) => onChange("initialInvestment", event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" 
                       required
                       value={userInput.annualInvestment}
                       onChange={(event) => onChange("annualInvestment", event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expext Return</label>
                <input type="number" 
                       required
                       value={userInput.expectedReturn}
                       onChange={(event) => onChange("expectedReturn", event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" 
                       required
                       value={userInput.duration}
                       onChange={(event) => onChange("duration", event.target.value)} />
            </p>
        </div>
    </section>
}