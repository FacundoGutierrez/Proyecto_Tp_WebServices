import { Component, OnInit } from '@angular/core';
import { Cotizacion } from 'src/app/models/cotizacion';
import { CotizacionService } from 'src/app/services/cotizacion.service';

@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {

  cotizacion: Cotizacion;
  cotizaciones: Array<Cotizacion>;




  constructor(private servicioDivisas:CotizacionService) {
    this.cotizacion = new Cotizacion;
    this.cotizaciones = new Array<Cotizacion>();
   }

  ngOnInit(): void {
  }
  public cargarCotizacion()
  {
    this.servicioDivisas.listCotizacion(this.cotizacion.D1, this.cotizacion.D2,this.cotizacion.C).subscribe(
    (result) => {
      this.cotizacion.result = result;

   
     
      console.log(this.cotizacion.result);
      },
      error =>  { alert("error en la peticion");}
        
        )
    }

}
