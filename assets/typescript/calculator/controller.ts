import DateHour from "./dateHour.js";
import Screen from "./screen.js";

export default class controller {

  constructor(
    private currScreen = new Screen()
) {

    new DateHour();
    this.buttonEvents();
  }

  buttonEvents(): void {
    document.querySelectorAll("#keyboard button").forEach((button) => {
      button.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLButtonElement;
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

  handleNumber(number: Number): void{
       this.currScreen.content = number.toString();
  }
}
