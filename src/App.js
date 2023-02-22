import './App.css';
import {useState} from "react";
import Button from "./Button";

const App = () => {
    const [counter, setCounter] = useState(0);
    const plus = () =>{
        setCounter(counter+1);
    }
    const minus = () =>{
        setCounter(counter-1);
    }

    return (
        <div className="App">
            <Button onClick = {minus} bodyText= '-'/>
            <h5>{counter}</h5>
            <Button onClick = {plus} bodyText= '+'/>
        </div>
    )
}

export default App;
