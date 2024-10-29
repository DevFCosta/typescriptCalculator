export default class Operation{
    constructor(
        private currOperation: string[] = []
    ) {
        
    }

    handleAddNumber(value:string): number{
          return this.currOperation.push(value)
    }

    get length(): number{
        return this.currOperation.length
    }
}