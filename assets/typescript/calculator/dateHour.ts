export default class DateHour {
    constructor(
        private date: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private hour: HTMLTimeElement | null = document.querySelector("#datetime time")
    ){
        this.render();
        setInterval(() => this.render(), 1000 )
    }

    render(){
        const currDate = new Date();
        const day = currDate.getDate();
        const month = currDate.toLocaleDateString('pt-Br',{month:'long'});
        const year = currDate.getFullYear();
        const currHour = currDate.getHours();
        const currMinute = currDate.getMinutes().toString().padStart(2,'0');

        const dots = currDate.getSeconds() % 2 === 0 ? ":" : " ";

        this.newDate = `${day} ${month} ${year}`;
        this.newHour = `${currHour}${dots}${currMinute}`;
    }

    set newDate(data: string){
        if(this.date){
              this.date.innerHTML = data
        }
    }
    set newHour(data: string){
        if(this.hour){
            this.hour.innerHTML = data
      }
    }
}