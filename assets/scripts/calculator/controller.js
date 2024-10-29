import DateHour from "./dateHour.js";
import Screen from "./screen.js";
export default class controller {
    currScreen;
    constructor(currScreen = new Screen()) {
        this.currScreen = currScreen;
        this.currScreen.content = '11';
        new DateHour;
    }
}
//# sourceMappingURL=controller.js.map