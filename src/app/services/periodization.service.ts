import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PeriodizationService {
  url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') url: string) {
    this.url = url;
  }

  public get() {
    return this.http.get<any>(this.url + 'api/periodization');
  }

  public getByYear() {
     return this.http.get<any>(this.url + 'api/periodization/by-year');
   }
}
