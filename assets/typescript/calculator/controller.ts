import DateHour from "./dateHour.js";
import Operation from "./operations.js";
import Screen from "./screen.js";

export default class controller {

  constructor(
    private currScreen = new Screen(),
    private operation = new Operation()
) {

    new DateHour();
    this.buttonEvents();
  }

  buttonEvents(): void {
    document.querySelectorAll("#keyboard button").forEach((button) => {
      button.addEventListener("click", (event: Event) => {
        const target = <HTMLButtonElement>event.target;
        console.log(target)
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
              this.handleNumber(Number(target.dataset.value))
            break;
          case "sum":
          case "subtraction":
          case "quotient":
          case "product":
            this.handleAddOperator(<string>target.dataset.value)
            break; 
          case "percentage":
            break; 
          case "dot":
            break; 
          case "equal":
            break;
          case "clear":
            break; 
          case "undo":    
        }
      });
    });
  }

  handleAddOperation(value: string) : void {
    this.operation.handleAddNumber(value)
}

  handleNumber(number: Number): void{
       this.currScreen.content = number.toString();
       this.handleAddOperation(number.toString())
  }
  
  handleAddOperator(operator: string): void {
    this.handleAddOperation(operator)
  }
}
