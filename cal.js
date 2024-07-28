let currentInput ="";
let calculation  =[];


function claculator(number){
    currentInput += number;
    document.getElementById('display').value= currentInput;
}
    
function claculatoroperator(operator){
    if(currentInput!= ""){
        calculation.push(currentInput);
        calculation.push(operator);
        currentInput='';
    }

}

function clearnum(){
    currentInput ="";
    calculation  =[];
    document.getElementById('display').value= "";
}

function equal(){
    if (currentInput !== '') {
        calculation.push(currentInput);
        const result = eval(calculation.join(' '));
        document.getElementById('display').value = result;
        currentInput = result.toString();
        calculation = [];
    }
}
function deleteLastCharacter() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function resetCalculator() {
    document.getElementById('display').value = '';
}