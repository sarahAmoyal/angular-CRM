import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  img1: string = 'assets/report1.png';
  img2:string ='assets/report2.jpg';
  img3:string ='assets/report3.png';

  constructor() { }

  ngOnInit(): void {
  }

}
