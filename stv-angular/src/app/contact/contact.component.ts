import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCR-dKqpdB-2LTtiIWD3AR4maFVwVmPns4&callback=initMap";
    this.elementRef.nativeElement.appendChild(s);
  }

}
