import { Component, OnInit } from '@angular/core';
import { Estadistica } from 'src/app/models/estadistica';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {
  country:string;
  estadistica: Estadistica;
  vector_estadistica: Array<Estadistica>;
  vector_datos: Array<Estadistica>;
  datos: Estadistica;


  constructor(private estadisticaS:EstadisticasService) { 
    this.estadistica = new Estadistica();
    this.vector_estadistica = new Array<Estadistica>();
    this.vector_datos = new Array <Estadistica>();
    
    
  }

  ngOnInit(): void {
  }
  
   public cargarEstadisticas(){
    this.estadisticaS.listEstadisticas(this.country).subscribe(
    (result) => {
      
      result.forEach(element => {
        this.datos = new Estadistica();
        Object.assign(this.datos, element);
        this.vector_datos.push(this.datos);
       
      });
      console.log(this.vector_datos);
    },
    error => {alert("error");}
    
      
    )
    }
  
  }
  