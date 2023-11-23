import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private apiUrl = 'https://2drgm3bg-8000.brs.devtunnels.ms/api';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos`).pipe(
      catchError((error) => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error); // Re-lanza el error para que sea manejado en el componente
      })
    );
  }
  getConductores(): Observable<any[]> {
    return new Observable((observer) => {
      this.http.get<any[]>(`${this.apiUrl}/conductores`).subscribe(
        (apiData) => {
          observer.next(apiData);
          observer.complete();
        },
        (error) => {
          console.error('Error en la solicitud HTTP:', error);
          observer.error(error);
        }
      );
    });
  }
}

