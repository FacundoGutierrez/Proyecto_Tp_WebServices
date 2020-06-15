import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PuntoAComponent} from '../app/components/punto-a/punto-a.component'
import {PuntoBComponent} from '../app/components/punto-b/punto-b.component';
import {PuntoCComponent} from '../app/components/punto-c/punto-c.component';
import {PuntoDComponent} from '../app/components/punto-d/punto-d.component'
import {HeaderComponent} from './components/header/header.component';



const routes: Routes = [

  {path: 'punto_A', component: PuntoAComponent },
  {path: 'punto_D', component: PuntoDComponent },
  {path: 'punto_C', component: PuntoCComponent },
  {path:'punto_B', component: PuntoBComponent},
  {path:'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
