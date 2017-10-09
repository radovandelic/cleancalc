var model = {

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
            this.lastResult = operation(arg1, arg2);
            return this.lastResult;
        } else if (this.lastResult != 0000) {
            this.lastResult = operation(this.lastResult, arg1);
            return this.lastResult;
        }
    },
    getResult: function (error, callback) {
        callback(error, this.lastResult);
    },
    clear: function () {
        this.lastResult = 0000;
    }
};

module.exports = model;