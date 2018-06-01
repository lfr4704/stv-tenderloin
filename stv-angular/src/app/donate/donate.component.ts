import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css', '../app.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ng ON INIT");
  }
  
  

}
