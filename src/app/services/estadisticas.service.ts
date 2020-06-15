import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  
  constructor(private _http: HttpClient ) { }

  public listEstadisticas(pais:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2a2344c984msh7e16357f35d60b9p121dc7jsnc133cc57a4e0",
        "useQueryString": 'true'
        
      }),
      params:{
        'format': 'json',
        'code': pais

      }
      

    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/country/code?code="+ pais  , httpOptions);  

  }
}
