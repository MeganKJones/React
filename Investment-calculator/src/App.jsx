import Header from './components/Header.jsx'
import Table from './components/Table.jsx'
import UserInputComponent from "./components/UserInputComponent.jsx";
import {useState} from "react";

function App() {

    let [userInput, setUserInput] = useState({
        "initialInvestment": 1000,
        "annualInvestment": 1200,
        "expectedReturn": 6,
        "duration": 1
    })

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header></Header>
            <UserInputComponent onChangeInput={handleChange} userInput={userInput}></UserInputComponent>
            {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
            {inputIsValid && <Table userInput={userInput}></Table>}
        </>
    )
}

export default App
