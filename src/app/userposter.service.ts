import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserposterService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  get_posts(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders()
    };

    return this.http.get<any>(`${this.baseUrl}posts`, httpOptions);
  }

  get_users(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders()
    };

    return this.http.get<any>(`${this.baseUrl}users`, httpOptions);
  }

  get_todo(id : number){
    let httpOptions = {
      headers: new HttpHeaders()
    };

    return this.http.get<any>(`${this.baseUrl}todos/${id}`, httpOptions);
  }
  
}