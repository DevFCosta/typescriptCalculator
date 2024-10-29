export default class DateHour {
    date;
    hour;
    constructor(date = document.querySelector("#datetime > div:nth-child(2)"), hour = document.querySelector("#datetime time")) {
        this.date = date;
        this.hour = hour;
    }
}
//# sourceMappingURL=dateHour.js.map