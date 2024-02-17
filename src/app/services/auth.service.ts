import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/envirements/environement';
import { User } from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const apiUrl = `${environment.mybaseurl}login/`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials: any): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.post<User>(apiUrl, credentials, httpOptions);
    
  }
}
