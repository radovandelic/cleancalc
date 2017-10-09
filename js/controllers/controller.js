var controller = {
    model: {},
    view: {},
    inputbox: function (error, number) {
        this.view.inputbox(error, number)
    },
    showResult: function (error) {
        this.model.getResult(error, this.view.showResult);
    },
    clear: function () {
        this.model.clear();
        this.view.clear();
    },
    operate: function (error, method, number1, number2) {
        if (error) {
            this.model.getResult(error, this.view.showResult);
        } else {
            this.model.operate(this.model[method], number1, number2);
        }
    }
}