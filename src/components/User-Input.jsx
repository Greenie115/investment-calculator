function UserInput({ onChange, Input }) {

    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input
                        value={Input.initialInvestment}
                        type="number" required
                        onChange={(event) => 
                        onChange('initialInvestment', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input
                        value={Input.annualInvestment}
                        type="number" required
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                    ></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input
                        value={Input.expectedReturn}
                        type="number" required
                        onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input
                        value={Input.duration}
                        type="number" required
                        onChange={(event) => handleChange('duration', event.target.value )}
                    ></input>
                </p>
            </div>
        </section >
    )
};

export default UserInput;