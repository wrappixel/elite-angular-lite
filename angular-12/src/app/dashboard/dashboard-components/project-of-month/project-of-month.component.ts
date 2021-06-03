import { Component, OnInit } from '@angular/core';
import { Product, TopSelling } from './project-data';

@Component({
  selector: 'app-project-of-month',
  templateUrl: './project-of-month.component.html',
  styleUrls: ['./project-of-month.component.css']
})
export class ProjectOfMonthComponent implements OnInit {

  topSelling: Product[];

  constructor() {

    this.topSelling = TopSelling;
  }

  ngOnInit(): void {
  }

}
