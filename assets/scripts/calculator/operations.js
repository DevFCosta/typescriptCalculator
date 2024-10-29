export default class Operation {
    currOperation;
    constructor(currOperation = []) {
        this.currOperation = currOperation;
    }
    handleAddNumber(value) {
        return this.currOperation.push(value);
    }
    get length() {
        return this.currOperation.length;
    }
}
//# sourceMappingURL=operations.js.map