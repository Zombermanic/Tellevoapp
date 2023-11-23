import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-ver-conductores',
  templateUrl: './ver-conductores.page.html',
  styleUrls: ['./ver-conductores.page.scss'],
})
export class VerConductoresPage implements OnInit{

  conductores: any [] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Realizar la solicitud HTTP para obtener la lista de conductores
    this.http.get<any[]>('http://127.0.0.1:8000/api/conductores').subscribe(
      conductores => {
        this.conductores = conductores;
      },
      error => {
        console.error('Error al obtener la lista de conductores', error);
      }
    );
  }
}