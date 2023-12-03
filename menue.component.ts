import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  ngOnInit(): void{
    console.log( "hello") 
  }
  username="enter your username";
  password="enter your password"
  numbervar= 5;
  red= false;
  green= true;

  callPhone(parm :any)
  {
    console.log (parm)
  }
  changecolor(){
    this.red=!this.red;
    this.green=!this.green
  }
  }
