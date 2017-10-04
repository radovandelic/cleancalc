
var number1, number2, method, inputbox, lr;
document.addEventListener("DOMContentLoaded", function (event) {
    inputbox = document.getElementById("inputbox");
    lr = document.getElementById("lastResult");
});


function numbers(number) {
    inputbox.value += number.innerHTML;
}

function operations(doWhat) {
    doWhat = doWhat.innerHTML;
    if (number1 == undefined & doWhat != "C") {
        if (!inputbox.value) { alert("You have not entered any number."); }
        else { number1 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value); }
    } else {
        number2 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value);
    }
    inputbox.value = "";


    if (doWhat == "C") {
        inputbox.value = "";
        number1 = undefined;
        number2 = undefined;
        method = undefined;
        calc.lastResult = 0000;
        lr.innerHTML = "<br>";
    } else if (/\*/.test(doWhat)) {
        method = calc.multiply;
        calculate(method, number1, number2);
    } else {
        switch (doWhat) {
            case "+":
                method = calc.add;
                calculate(method, number1, number2);
                break;
            case "-":
                method = calc.subtract;
                calculate(method, number1, number2);
                break;
            case "/":
                method = calc.divide;
                calculate(method, number1, number2);
                break;
            case "=":
                calculate(method, number1, number2); 
                break;
            default:
                break;
        }
    }
    if (calc.lastResult != 0000) {
        lr.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last result: " + calc.lastResult;
    } else {
        lr.innerHTML = "<br>";
    }
}

function calculate() {
    if (method) {
        if (number2) {
            calc.operate(method, number1, number2);
            method = undefined;
            number1 = undefined;
            number2 = undefined;
        } else if (calc.lastResult != 0000 && number1) {
            calc.operate(method, number1);
            method = undefined;
            number1 = undefined;
            number2 = undefined;
        }
    }
}