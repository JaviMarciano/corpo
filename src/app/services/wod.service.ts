import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { wodTemplateResponse } from '../domain/workout/wod';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WodService {
  url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') url: string) {
    this.url = url;
  }

  public getAll() {
    return this.http.get(this.url + 'api/wod-member');
  }
  public getById(id: number) {
    return this.http.get<wodTemplateResponse>(this.url + 'api/wod-member/getById?id=' + id);
  } 
}
