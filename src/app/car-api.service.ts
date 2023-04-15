import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { catchError } from 'rxjs';
import { NewCar } from './car';

@Injectable({
  providedIn: 'root'
})

export class CarApiService {
  private _siteURL: string = 'http://localhost:5050'; //Declaring _siteURL

  constructor(private _http: HttpClient) { }
  public getUsers(): Observable<any> {
    const url = `${this._siteURL}/users`;
    return this._http.get(url);
  }

  //car-api.service.ts.txt Code 
  getCarDetails():Observable<any> {

    return this._http.get<NewCar>(this._siteURL)
    .pipe(
      tap(data => console.log('car data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }


  addCarDetails(car:NewCar):Observable<any> {
   return this._http.post<NewCar>(this._siteURL, car)
   .pipe(
    tap(data => console.log('add car message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
   }


  delCarDetails(carId:string):Observable<any> {
    let deleteURL=this._siteURL+":"+carId;
    return this._http.delete(deleteURL)
    .pipe(
      tap(data => console.log('del car message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
 
  }

  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
}
