import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css',
              '../../assets/css/menu.css', 
              '../../assets/css/bootstrap.min.css', 
              '../../assets/css/custom.css', 
              '../../assets/css/style.css', 
              '../../assets/css/vendors.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
