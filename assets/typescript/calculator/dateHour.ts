export default class DateHour {
    constructor(
        private date: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private hour: HTMLTimeElement | null = document.querySelector("#datetime time")
    ){

    }
}