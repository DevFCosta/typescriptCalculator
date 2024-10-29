export default class DateHour {
    date;
    hour;
    constructor(date = document.querySelector("#datetime > div:nth-child(2)"), hour = document.querySelector("#datetime time")) {
        this.date = date;
        this.hour = hour;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const currDate = new Date();
        const day = currDate.getDate();
        const month = currDate.toLocaleDateString('pt-Br', { month: 'long' });
        const year = currDate.getFullYear();
        const currHour = currDate.getHours();
        const currMinute = currDate.getMinutes().toString().padStart(2, '0');
        const dots = currDate.getSeconds() % 2 === 0 ? ":" : " ";
        this.newDate = `${day} ${month} ${year}`;
        this.newHour = `${currHour}${dots}${currMinute}`;
    }
    set newDate(data) {
        if (this.date) {
            this.date.innerHTML = data;
        }
    }
    set newHour(data) {
        if (this.hour) {
            this.hour.innerHTML = data;
        }
    }
}
//# sourceMappingURL=dateHour.js.map