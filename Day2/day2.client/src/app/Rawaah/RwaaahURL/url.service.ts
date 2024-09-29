/// <reference path="../../app.component.spec.ts" />
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7185/api"
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/GetAllServices`);
  }
  getSubServices(id:any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID?id=${id}`);
  }
}

