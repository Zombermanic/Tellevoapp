import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDBService {

  private apiUrl='http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  infoDatos(datos:any){
    return this.http.post(`${this.apiUrl}info-user/`, datos);
  }

}
