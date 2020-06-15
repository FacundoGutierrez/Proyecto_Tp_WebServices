import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {

  categoria:string;
  noticia:Noticia;
  vector_noticia: Array<Noticia>; 


  constructor(private noticiaS:NoticiasService) { 
    this.noticia = new Noticia();
    this.vector_noticia = new Array<Noticia>();
  }

  ngOnInit(): void {
  }

  public cargarNoticias()
  {
    this.noticiaS.listNoticias(this.categoria).subscribe(
    (result) => {
      this.vector_noticia = new Array<Noticia>();
      result['arts'].forEach(element =>{
        this.noticia = new Noticia();
        Object.assign(this.noticia,element);
        this.vector_noticia.push(this.noticia);
      });
      console.log(this.vector_noticia);
      },
      error =>  { alert("error en la peticion");}
        
        )
    }
    
      
   
  }


