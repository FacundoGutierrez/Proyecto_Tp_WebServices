import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  horoscopo: Horoscopo;
  vector_signos: Array<Horoscopo>;


  constructor(private horoscopo_servicio: HoroscopoService) {
    this.horoscopo = new Horoscopo();
    this.vector_signos = new Array<Horoscopo>();
   }

  ngOnInit(): void {
  }

  public mostrarSigno(){
    this.horoscopo_servicio.listaSignos(this.horoscopo.name).subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        
        this.horoscopo = result;
          
        
        console.log(this.horoscopo);
      
    },
    error => {alert("error");}
    )
  }



}
