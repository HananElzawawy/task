import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  username="enter your username";
  password="enter your password";
  numbervar= 5;
  red= false;
  green= true;

  
  changecolor(){
    this.red=!this.red;
    this.green=!this.green
  }

