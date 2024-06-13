// this function clears alll the value 
function clearScreen() {
    document.getElementById("result").value = "";
}

// this funcations clears all the value
function display(value) {
    document.getElementById("result").value += value;
}

// this funcations clears all the value
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}