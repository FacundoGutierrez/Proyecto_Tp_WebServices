import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient ) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
	"x-rapidapi-key": "2a2344c984msh7e16357f35d60b9p121dc7jsnc133cc57a4e0",
      })

    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);  
  }
}
