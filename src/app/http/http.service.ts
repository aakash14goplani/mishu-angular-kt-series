import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    return this.http.post('https://kt-project-54a3d77.firebaseio.com/kt.json', data, {
      headers: new HttpHeaders({ 'Custom-Header': 'Aakash', 'Access-Control-Allow-Origin': '*'}),
      params: new HttpParams().set('mishu', 'sriyansh')
    });
  }

  updateDataInServer(data: HttpModel): Observable<any> {
    return this.http.put('https://kt-project-54a3d.firebaseio.com/kt.json', data);
  }

  deleteDataFromServer(): Observable<any> {
    return this.http.delete('https://kt-project-54a3d.firebaseio.com/kt.json');
  }
}
