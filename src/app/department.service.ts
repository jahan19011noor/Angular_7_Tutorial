import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'



import { IDepartment } from "./department";




@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<IDepartment[]> {
  	return this.http.get<IDepartment[]>(this._url)
  					.catch(this.errorHandler)
  	// return [
  	// 	{
  	// 		"id": 1,
  	// 		"name": "Angular"
  	// 	},
  	// 	{
  	// 		"id": 2,
  	// 		"name": "Node"
  	// 	},
  	// 	{
  	// 		"id": 3,
  	// 		"name": "MongoDB"
  	// 	},
  	// 	{
  	// 		"id": 4,
  	// 		"name": "Ruby"
  	// 	},
  	// 	{
  	// 		"id": 5,
  	// 		"name": "Bootstrap"
  	// 	}
  	// ]
  }

  errorHandler(error: HttpErrorResponse) {
  	return Observable.throw(error.message || 'Server Error')
  }
}
