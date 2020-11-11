import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpModel } from './http.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getDataFromServer(): Observable<any> {
    return this.http.get('https://kt-project-54a3d.firebaseio.com/kt.json');
  }

  postDataToServer(data: HttpModel): Observable<any> {
    return this.http.post('https://kt-project-54a3d.firebaseio.com/kt.json', data);
  }
}
