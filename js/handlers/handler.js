/*
var number1, number2, method, inputbox, lr;
document.addEventListener("DOMContentLoaded", function (event) {
    inputbox = document.getElementById("inputbox");
    lr = document.getElementById("lastResult");
});*/

var handler = {
    number1: undefined,
    number2: undefined,
    method: undefined,
    controller: {},
    init: function () {
        this.controller = controller;
        this.controller.model = model;
        this.controller.view = view;
    },
    numbers: function (number) {
        number = number.innerHTML;
        var error = isNaN(Number(number)) ? "Error: Not a number" : false;
        this.controller.inputbox(error, number);
    },
    operations: function (doWhat) {
        doWhat = doWhat.innerHTML;
        var number = document.getElementById("inputbox").value;
        var lr = document.getElementById("lastresult").innerHTML;
        var error = isNaN(number) ? "You think this is a mf game? \nEnter an actual number." : false;
        if (this.number1 == undefined & doWhat != "C") {
            error = (!number && lr != "<br>") ? "You have not entered any number." : false;
            if (number) { this.number1 = Number(number); }
        } else {
            this.number2 = Number(number);
        }
        document.getElementById("inputbox").value = "";

        if (doWhat == "C") {
            this.number1 = undefined;
            this.number2 = undefined;
            this.method = undefined;
            this.controller.clear();
        } else {
            this.calculate(error, doWhat);
        }
    },
    calculate: function (error, doWhat) {
        if (this.method) {
            if (this.number2) {
                this.controller.operate(error, this.method, this.number1, this.number2);
                this.clear();
                this.controller.showResult(error);
            } else if (this.number1) {
                this.controller.operate(error, this.method, this.number1);
                this.clear();
                this.controller.showResult(error);
            }
        }
        if (doWhat != "=") { this.switchboard(doWhat); }
    },
    switchboard: function (doWhat) {
        if (/\*/.test(doWhat)) { this.method = "multiply"; }
        else {
            switch (doWhat) {
                case "+":
                    this.method = "add";
                    break;
                case "-":
                    this.method = "subtract";
                    break;
                case "/":
                    this.method = "divide";
                    break;
                default:
                    break;
            }
        }
    },
    clear: function () {
        this.method = undefined;
        this.number1 = undefined;
        this.number2 = undefined;
    }
};
/*
function operations(doWhat) {
    doWhat = doWhat.innerHTML;
    if (number1 == undefined & doWhat != "C") {
        if (!inputbox.value && calc.lastResult == 0000) { alert("You have not entered any number."); }
        else if (inputbox.value) { number1 = isNaN(inputbox.value) ? alert("You think this is a mf game? \nEnter an actual number.") : parseFloat(inputbox.value); }
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
}*/
