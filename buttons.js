
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
        if (!inputbox.value && calc.lastResult == 0000) { alert("You have not entered any number."); }
        else if(inputbox.value) { number1 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value); }
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
    } else {
        calculate(doWhat);
    }
}

function calculate(doWhat) {
    if (method) {
        if (number2) {
            calc.operate(method, number1, number2);
            method = undefined;
            number1 = undefined;
            number2 = undefined;
            lr.innerHTML = "&nbsp;&nbsp;&nbsp; Last result: " + calc.lastResult;
        } else if (calc.lastResult != 0000 && number1) {
            calc.operate(method, number1);
            method = undefined;
            number1 = undefined;
            number2 = undefined;
            lr.innerHTML = "&nbsp;&nbsp;&nbsp; Last result: " + calc.lastResult;
        }
    }
    if (doWhat != "=") { switchboard(doWhat); }
}

function switchboard(doWhat) {
    if (/\*/.test(doWhat)) { method = calc.multiply; }
    else {
        switch (doWhat) {
            case "+":
                method = calc.add;
                break;
            case "-":
                method = calc.subtract;
                break;
            case "/":
                method = calc.divide;
                break;
            default:
                break;
        }
    }
}