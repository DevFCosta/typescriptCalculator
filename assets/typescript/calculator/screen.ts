export default class Screen {
    constructor(
        private screenValue: HTMLDivElement | null = document.querySelector("#values")
    ){
        this.content = "0";
    }

    set content(value: string){
        if(value.toString().length >12){
            value = "ERROR"
        }
        if(this.screenValue){
            this.screenValue.innerHTML = value.toString().replace('.',',');
        }
    };
    get content(): string{
        return  this.screenValue ? this.screenValue.innerHTML : '0'
    }
}