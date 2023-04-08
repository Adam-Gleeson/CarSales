import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { NewCar } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor() { }
}
