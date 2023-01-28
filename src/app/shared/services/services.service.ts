import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // amount: number = 1;

  constructor(private http: HttpClient) {}

  DB_URL: string = 'https://api.vatcomply.com/rates?base=';

  getExchanges(country: any){
    return this.http.get(this.DB_URL + country);
  }
}
