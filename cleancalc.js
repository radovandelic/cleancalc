
var calc = {

	lastResult: 0000,

	add: function (arg1, arg2) {
		return arg1 + arg2;
	},

	subtract: function subtract(arg1, arg2) {
		return arg1 - arg2;
	},

	multiply: function (arg1, arg2) {
		return arg1 * arg2;
	},

	divide: function (arg1, arg2) {
		return arg1 / arg2;
	},

	operate: function (operation, arg1, arg2) {

		if (arg2) {
			lastResult = operation(arg1, arg2);
			return lastResult;
		} else {
			lastResult = operation(arg1, lastResult);
			return lastResult;
		}
	}
};

var tests = {

	testAdd: function (number1, number2) {
		return calc.add(number1, number2);
	},

	testSubtract: function (number1, number2) {
		return calc.subtract(number1, number2);
	},

	testMultiply: function (number1, number2) {
		return calc.multiply(number1, number2);
	},

	testDivide: function (number1, number2) {
		return calc.divide(number1, number2);
	},

	testOperate: function (operation, number1, number2) {
		return operation(number1, number2);
	},

	testMeta: function (number1, number2) {
		results = [];

		results.push(this.testAdd(number1, number2));
		results.push(this.testSubtract(number1, number2));
		results.push(this.testMultiply(number1, number2));
		results.push(this.testDivide(number1, number2));
		results.push(this.testOperate(calc.add, number1, number2));
		results.push(this.testOperate(calc.subtract, number1, number2));
		results.push(this.testOperate(calc.multiply, number1, number2));
		results.push(this.testOperate(calc.divide, number1, number2));
		return results;
	}

};

var args = process.argv;
var object = args[2];
var method = args[3];
var number1 = parseInt(args[4]);
var number2 = parseInt(args[5]);
if (object != undefined) {
	console.log(object == "test" ? tests[method](number1, number2) : calc[method](number1, number2));


} else {
	var numberOfTestRuns = 10;
	for (var i = 1; i < numberOfTestRuns + 1; i++) {

		var number1 = Math.round(Math.random() * (10 ** (Math.random() * 10))); //creates random integer in a random size range
		var number2 = Math.round(Math.random() * (10 ** (Math.random() * 10))); //creates random integer in a random size range

		console.log("\n-------------------\nTest #" + i + ":");
		console.log("(" + number1 + ", " + number2 + ")\n");

		tests.testMeta(number1, number2).forEach(function (result) {
			console.log(result);
		});
	}
}