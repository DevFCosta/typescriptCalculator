interface IOperationOptions{
     onCalculate: any;
}
export default class Operation{

    private onCalculate: any;

    constructor(
        options: IOperationOptions,
        private currOperation: string[] = []
    ) {
        this.onCalculate = options.onCalculate;
    }

    handleAddNumber(value:string): number{
           
          if(this.currOperation.length === 3){
            this.calculate()
          }

          this.currOperation.push(value)
          return this.length
    }

    getResult(): string{
        let result: string = "0";

        try{
            result = (eval(this.currOperation.join(''))).toString()
        }catch(e){
            result = 'ERROR'
        }

        return result;
    }
    
    calculate(): void {
        let result = this.getResult()

        if(result.length > 12){
            result = result.substring(0,12)
        }
            
        this.currOperation = [result]

        this.onCalculate(result)
    }

    get lastPosition(): string{
        return this.currOperation.length ? this.currOperation[this.currOperation.length -1] : '0';
    }

    set lastPosition(value: string){
        const lastIndex = this.currOperation.length ? this.currOperation.length - 1 : '0';
        
        this.currOperation[lastIndex] = value
    }

    get length(): number{
        return this.currOperation.length
    }
}