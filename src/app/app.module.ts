import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';

@NgModule({
  declarations: [
    AppComponent,
    PuntoBComponent,
    HeaderComponent,
    PuntoCComponent,
    PuntoAComponent,
    PuntoDComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
