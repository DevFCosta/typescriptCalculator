import DateHour from "./dateHour.js";
import Operation from "./operations.js";
import Screen from "./screen.js";

export default class controller {
  constructor(
    private currScreen = new Screen(),
    private operation = new Operation({
      onCalculate: (result: string) => (this.currScreen.content = result),
    })
  ) {
    new DateHour();
    this.buttonEvents();
  }

  buttonEvents(): void {
    document.querySelectorAll("#keyboard button").forEach((button) => {
      button.addEventListener("click", (event: Event) => {
        const target = <HTMLButtonElement>event.target;
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
            this.handleAddOperator(<string>target.dataset.value);
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

  handleCalculate(): void {
    this.operation.calculate();
  }

  handleAddOperation(value: string): void {
    this.operation.handleAddNumber(value);
  }

  handleNumber(number: Number): void {
    if (isNaN(Number(this.operation.lastPosition))) {
      this.handleAddOperation(number.toString());
    } else {
      number = Number(
        this.operation.lastPosition.toString() + number.toString()
      );
      this.operation.lastPosition = number.toString();
    }

    this.currScreen.content = number.toString();
  }

  handleAddOperator(operator: string): void {
    if (isNaN(Number(this.operation.lastPosition))) {
      this.operation.lastPosition = operator;
    } else {
        if(this.operation.length === 0){
            this.handleAddOperation('0');
        }
      this.handleAddOperation(operator);
    }

    this.handleAddOperation(operator);
  }
}
