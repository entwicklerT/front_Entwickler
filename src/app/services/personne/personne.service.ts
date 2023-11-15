import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private apiBaseUrl = 'api/personnes'; // Update to match the in-memory route

  constructor(private http: HttpClient) {}

  getPersonnes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiBaseUrl);
  }

  createPersonne(personneData: any): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl, personneData);
  }

  updatePersonne(id: number, personneData: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/${id}`, personneData);
  }

  deletePersonne(personneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/${personneId}`);
  }

  getPersonne(personneId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${personneId}`);
  }
}
