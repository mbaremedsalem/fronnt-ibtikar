import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mescoursesModel } from '../model/mescourses.model';
import { environment } from 'src/envirements/environement';
const apiUrl = `${environment.mybaseurl}cours/get-course-by-manager/`;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCoursesbyenseignant(): Observable<mescoursesModel[]> {
    const headers = new HttpHeaders().set('Authorization','JWT '+localStorage.getItem('access'));
    return this.http.get<any[]>(apiUrl,{headers});

  }

}
