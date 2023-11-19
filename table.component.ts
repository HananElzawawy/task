import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
title = 'costomerslist';
users:[any] = [
 {   name:""  , username: "" ,  phone: "" }
]


addusers() {
    this.users.push();
    console.log("test");
    
  }}