export default class Operation {
    currOperation;
    onCalculate;
    constructor(options, currOperation = []) {
        this.currOperation = currOperation;
        this.onCalculate = options.onCalculate;
    }
    handleAddNumber(value) {
        if (this.currOperation.length === 3) {
            this.calculate();
        }
        this.currOperation.push(value);
        return this.length;
    }
    getResult() {
        let result = "0";
        try {
            result = (eval(this.currOperation.join(''))).toString();
        }
        catch (e) {
            result = 'ERROR';
        }
        return result;
    }
    calculate() {
        let result = this.getResult();
        if (result.length > 12) {
            result = result.substring(0, 12);
        }
        this.currOperation = [result];
        this.onCalculate(result);
    }
    get length() {
        return this.currOperation.length;
    }
}
//# sourceMappingURL=operations.js.map