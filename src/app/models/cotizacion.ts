

export class Cotizacion {

    
    D1:string;
    D2:string;
    C:string;
    valid:boolean;
    result:string;

    constructor(C?:string, D1?:string, D2?:string,valid?:boolean,result?:string)
    {
        this.C = C;
        this.D1 = D1;
        this.D2 = D2;
        this.valid = valid;
        this.result = result;

    }
}
