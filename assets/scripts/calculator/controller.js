import DateHour from "./dateHour.js";
import Screen from "./screen.js";
export default class controller {
    currScreen;
    constructor(currScreen = new Screen()) {
        this.currScreen = currScreen;
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
    handleNumber(number) {
        this.currScreen.content = number.toString();
    }
}
//# sourceMappingURL=controller.js.map