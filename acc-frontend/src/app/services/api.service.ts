import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/hello';

  getHello(): Observable<{ message: string }> {
    console.log('Calling API:', this.apiUrl);
    return this.http.get<{ message: string }>(this.apiUrl);
  }
}