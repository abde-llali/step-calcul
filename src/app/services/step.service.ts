import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const Options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, OPTIONS, DELETE, PATCH',

  }),
}


@Injectable({
  providedIn: 'root'
})
export class StepService {

  apiUrl = "api/location/?deviceid=93debd97-6564-454b-be33-35bd377a2563&startdate=1612310400000&enddate=1614729600000"
  constructor(public http: HttpClient) { }


  getdata():Observable<any> {
    return this.http.get<any>(this.apiUrl, Options)
  }
}
