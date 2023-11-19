import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgFor,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
