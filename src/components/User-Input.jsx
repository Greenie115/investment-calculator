function UserInput({ resetInput, Input }) {

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
                        resetInput('initialInvestment', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input
                        value={Input.annualInvestment}
                        type="number" required
                        onChange={(event) => resetInput('annualInvestment', event.target.value)}
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
                        onChange={(event) => resetInput('expectedReturn', event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input
                        value={Input.duration}
                        type="number" required
                        onChange={(event) => resetInput('duration', event.target.value )}
                    ></input>
                </p>
            </div>
        </section >
    )
};

export default UserInput;