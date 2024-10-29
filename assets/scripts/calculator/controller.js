import DateHour from "./dateHour.js";
import Operation from "./operations.js";
import Screen from "./screen.js";
export default class controller {
    currScreen;
    operation;
    constructor(currScreen = new Screen(), operation = new Operation({
        onCalculate: (result) => this.currScreen.content = result
    })) {
        this.currScreen = currScreen;
        this.operation = operation;
        new DateHour();
        this.buttonEvents();
    }
    buttonEvents() {
        document.querySelectorAll("#keyboard button").forEach((button) => {
            button.addEventListener("click", (event) => {
                const target = event.target;
                console.log(target);
                switch (target.id) {
                    case "one":
                    case "two":
                    case "three":
                    case "four":
                    case "five":
                    case "six":
                    case "seven":
                    case "eight":
                    case "nine":
                    case "zero":
                        this.handleNumber(Number(target.dataset.value));
                        break;
                    case "sum":
                    case "subtraction":
                    case "quotient":
                    case "product":
                        this.handleAddOperator(target.dataset.value);
                        break;
                    case "percentage":
                        break;
                    case "dot":
                        break;
                    case "equal":
                        this.handleCalculate();
                        break;
                    case "clear":
                        break;
                    case "undo":
                }
            });
        });
    }
    handleCalculate() {
        this.operation.calculate();
    }
    handleAddOperation(value) {
        this.operation.handleAddNumber(value);
    }
    handleNumber(number) {
        this.currScreen.content = number.toString();
        this.handleAddOperation(number.toString());
    }
    handleAddOperator(operator) {
        this.handleAddOperation(operator);
    }
}
//# sourceMappingURL=controller.js.map