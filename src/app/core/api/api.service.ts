import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseUrl}${path}`, { params });
  }

  post(path: string, body = {}): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    );
  }

  put(path: string, body = {}): Observable<any> {
    return this.http.put(`${environment.baseUrl}${path}`, JSON.stringify(body));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.baseUrl}${path}`);
  }
}
