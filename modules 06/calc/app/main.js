import {style} from "./styles.css";
import * as math from "./helpers/math"
import * as state from "./helpers/state";



let isAfterCalc = false;
const calcContainer = document.querySelector(".container")
const result = document.querySelector(".result")
const operations = ["+","-","X","/","="]
const displayNumber = (num) =>{
    if(isAfterCalc){
        isAfterCalc=false;
        clearCalc();
    }
    result.value = result.value + num;
}
const clearCalc = () =>{
    result.value="";
    state.state.firstNumber ="";
    state.state.secondNumber ="";
    state.state.callback ="";
}
const clickHandler = (event) =>{    
    if (event.target.type !== "button") return;
    const clickedKey = event.target.value;
    if (!isNaN(event.target.value)){
        displayNumber(clickedKey);
    }
    if(clickedKey === "Del"){
        clearCalc();
    }else{
        for(let operation of operations){
            if (operation === clickedKey){
                handleOperation(clickedKey);
            }
        }
    }
}
const saveNumber =()=>{
    console.log(result.value);
    if(state.state.firstNumber === ""){
        state.state.firstNumber = result.value;
    }else{
        state.state.secondNumber = result.value;
    }
    result.value = "";
}
const handleOperation = (operation) =>{
    if(result.value === "") return;
    if(isAfterCalc){
        isAfterCalc=false;
        state.state.firstNumber=result.value;
        state.state.secondNumber ="";
    }
    saveNumber();
    switch(operation){
        case "+":
            state.state.callback = math.add;
            break;
        case "-":
            state.state.callback = math.sub;
            break;
        case "/":
            state.state.callback = math.divide;
            break;
        case "X":
            state.state.callback = math.multiply; 
           break;
        case "=": 
            evaluate();
            break;
    }
}
const evaluate = () => {
    if (state.state.secondNumber !== ""){
        result.value = math.equals(parseInt(state.state.firstNumber) , parseInt(state.state.secondNumber)  , state.state.callback);
    }
    isAfterCalc=true;
}
calcContainer.addEventListener("click", clickHandler)
