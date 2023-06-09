import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from './common-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular_assement';

  modal:any;
  route: any;

  constructor(private commonService:CommonServiceService,route:Router){

  }
  ngOnInit(): void {
    this.displayStyle = "none";
  }

  admin = true;
  displayStyle:any;
  submit(){
    this.admin = true;
  }
}
