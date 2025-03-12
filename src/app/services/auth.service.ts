import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5281/api/';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"User/login", { username, password }).pipe(
      tap(Response => localStorage.setItem('jwtToken', Response.token))
    );
  }

  // LoadStudent(){
  //   return this.http.get(this.apiUrl+"StudentApi");
  // }

  LoadStudent(): Observable<any> {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage or sessionStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // Attach token here
      'Content-Type': 'application/json'
    });

    return this.http.get(this.apiUrl+"StudentApi", { headers });
  }


  CreateNewStudent(obj : any){
    return this.http.post(this.apiUrl+"StudentApi",obj);
  }

  DeleteStudent(id :any){
    return this.http.delete(this.apiUrl+"StudentApi/"+id);
  }

  EditStudent(id :any,  obj : any){
    return this.http.put(this.apiUrl+"StudentApi/"+id,obj);
  }


  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  //hard coded 
  //constructor(private router: Router) { }

  // login(username: string, password: string): boolean {
  //   if (username === 'admin' && password === 'password') {
  //     localStorage.setItem('user', JSON.stringify({ username }));
  //     return true;
  //   }
  //   return false;
  // }

  // logout(): void {

  //   localStorage.removeItem('user');
  //   this.router.navigate(['/login']);
  // }

  // isAuthenticated(): boolean {
  //   return localStorage.getItem('user') !== null;
  // }

}
