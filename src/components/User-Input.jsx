import { useState } from "react";

function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 5000,
        expectedReturn: 5,
        duration: 10
    })

    function handleChange(inputID, newValue) {
        setUserInput(prevValue => {
            return {
                ...prevValue,
                [inputID]: newValue
            }
        })
    }

    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input
                        value={userInput.initialInvestment}
                        type="number" required
                        onChange={(event) => 
                        handleChange('initialInvestment', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input
                        value={userInput.annualInvestment}
                        type="number" required
                        onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    ></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input
                        value={userInput.expectedReturn}
                        type="number" required
                        onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input
                        value={userInput.duration}
                        type="number" required
                        onChange={(event) => handleChange('duration', event.target.value )}
                    ></input>
                </p>
            </div>
        </section >
    )
};

export default UserInput;