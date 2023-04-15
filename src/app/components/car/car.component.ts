import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { CarApiService } from 'src/app/car-api.service';
import { ICar } from 'src/app/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
@Input() carData:ICar | undefined;

carImageWidth: number = 300;
private _carAPIService: CarApiService;
  
constructor(private carAPIService: CarApiService) {
  this._carAPIService = carAPIService;
}


//car-components-ts.txt Code
deleteCar(carId:string) { 
  this._carAPIService.delCarDetails(carId).subscribe(result =>
    { 
      console.log(result);
    });
}
}
