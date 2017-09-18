
var number1, number2;
var method = "";
document.addEventListener("DOMContentLoaded", function (event) {
    var inputbox = document.getElementById("inputbox");
});


function numbers(number) {
    inputbox.value += number.innerHTML;
}

function operations(doWhat) {
    if (number1 == undefined) {
        number1 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value);
    } else {
        number2 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value);
    }
    inputbox.value = "";
    if (doWhat.innerHTML == "C") {
        inputbox.value = "";
        number1 = undefined;
        number2 = undefined;
        method = "";
    } else if (/\*/.test(doWhat.innerHTML)) {
        method = "multiply";
    } else {
        switch (doWhat.innerHTML) {
            case "+":
                method = "add";
                break;
            case "-":
                method = "subtract";
                break;
            case "/":
                method = "divide";
                break;
            case "=":
                if (number2 != undefined && method != "") {
                    number1 = calc[method](number1, number2);
                    method = "";
                    number2 = undefined;
                }
                inputbox.value = number1;
                break;
            default:
                break;
        }
    }
}
function verbatim(fn) { return fn.toString().match(/[^]*\/\*\s*([^]*)\s*\*\/\}$/)[1]; }