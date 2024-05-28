import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpservService {

  constructor(private http: HttpClient) { }

  addData(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/posts', data);
  }

  showData(): Observable<any> {
    return this.http.get(`http://localhost:3000/posts`);
  }

  getallDataEdit(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/posts/${id}`)
  }

  getEditedData(id: any, body: any): Observable<any> {
    return this.http.put(`http://localhost:3000/posts/${id}`, body)
  }

  deleteData(id: any):Observable<any> {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}