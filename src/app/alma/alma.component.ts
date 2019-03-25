import { Component, OnInit } from '@angular/core';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

@Component({
  selector: 'app-alma',
  templateUrl: './alma.component.html',
  styleUrls: ['./alma.component.css']
})
export class AlmaComponent implements OnInit {

  sourceCars: any[];

  targetCars: any[];

  constructor() { }

  ngOnInit() {
      this.sourceCars = [{
        name: 'alex'
      },{
        name: 'alex'
      },{
        name: 'alex'
      },{
        name: 'alex'
      }];
      this.targetCars = [{
        name: 'alex'
      }];
  }

}
