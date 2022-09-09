import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../interfaces/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.baseUrl}/pacientes`);
  }

  getCitaPorId(id: string): Observable<Cita> {
    return this.http.get<Cita>(`${this.baseUrl}/pacientes/${id}`);
  }

  getSugerencias(termino: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(
      `${this.baseUrl}/pacientes?q=${termino}&_limit=6`
    );
  }

  agregarCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.baseUrl}/pacientes`, cita);
  }

  actualizarCita(cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.baseUrl}/pacientes/${cita.id}`, cita);
  }

  
  borrarCita(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/pacientes/${id}`);
  }
}
