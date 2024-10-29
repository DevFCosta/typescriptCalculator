export default class Screen {
    screenValue;
    constructor(screenValue = document.querySelector("#values")) {
        this.screenValue = screenValue;
        this.content = "0";
    }
    set content(value) {
        if (value.toString().length > 12) {
            value = "ERROR";
        }
        if (this.screenValue) {
            this.screenValue.innerHTML = value.toString().replace('.', ',');
        }
    }
    ;
    get content() {
        return this.screenValue ? this.screenValue.innerHTML : '0';
    }
}
//# sourceMappingURL=screen.js.map