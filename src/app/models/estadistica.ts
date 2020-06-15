export class Estadistica {

  
    country: string;
    confirmed: string;
    deaths: string;
    recovered: string;
    varUno: boolean;
    varDos:boolean;
    varTres:boolean = false;




    constructor(country?:string,confirmed?:string,deaths?: string,recovered?:string,varUno?:boolean,varDos?:boolean,varTres?:boolean){
           
            this.country = country;
            this.confirmed = confirmed;
            this.deaths = deaths;
            this.recovered = recovered;
            this.varUno = varUno;
            this.varDos = varDos;
            this.varTres = varTres;

    }

    
}
