import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count : any = 0;

  ngOnInit(){

  }
  counter(){
  this.count++;
  }
  reset(){
    this.count = 0;
  }
}
