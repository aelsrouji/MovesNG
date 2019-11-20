import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovesComponent } from './moves/moves.component';
import { MoveDetailsComponent } from './move-details/move-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MovesComponent,
    MoveDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
