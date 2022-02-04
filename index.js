const ESSENTIAL_KEYS_FOR_CALCULATION = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "/", "-", "*"];

function clearScreen() {
    document.getElementById("result").value = "";
}

function removeLastCharacter(){
    const text = document.getElementById("result").value;

const editedText = text.slice(0, -1);

document.getElementById("result").value = editedText;
}

function display(value) {
    if (ESSENTIAL_KEYS_FOR_CALCULATION.includes(value)) {
        document.getElementById("result").value += value;
    }document.getElementById("result").value
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);

   

    if (q !== undefined) {
        document.getElementById("result").value  = `${q}`;
    }
}

document.addEventListener('keydown', function (event) {
   
    if (event.key === "Enter") {
        calculate();
    } 
    else if(event.key === "Backspace"){
        removeLastCharacter();
    }
    else {
        display(event.key);
    }
})