import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { CarApiService } from 'src/app/car-api.service';
import { ICar, NewCar } from 'src/app/car';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {
  carsData: ICar[] = [];
  show: boolean = false;
  private _carAPIService!: CarApiService;


  constructor(private http: HttpClient, carAPIService: CarApiService) {
    this.http.get<ICar[]>('/api/cars').subscribe((data) => {
      this.carsData = data;
      this._carAPIService = carAPIService;
    });
  }

  //car list componenet.ts.txt Code
  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  //having an error here?
  /*
  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }
    */

}
