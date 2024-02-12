import Header from "./components/Header"
import UserInput from "./components/User-Input"
import Results from "./components/Results"
import { useState } from "react"


function App() {

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
    <>
    <Header />
    <UserInput 
      onChange={handleChange}
      Input={userInput}/>
    <Results />
    </>
  )
}

export default App
