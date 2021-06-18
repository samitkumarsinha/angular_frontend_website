import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) { }
  sendmail(data):Observable<any>{
    console.log(data, this.base_url)
    return this.http.post(`${this.base_url}/mail`,data);
  }
  login(data):Observable<any>{
    console.log(data, this.base_url)
    return this.http.post<any>(`${this.base_url}/login`,data);
  }
  register(data):Observable<any>{
    console.log(data, this.base_url)
    return this.http.post<any>(`${this.base_url}/register`,data);
  }
  updateprofile(data):Observable<any>{
    return this.http.put<any>(`${this.base_url}/updateprofile`,data);
  }
  getcountry(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/countries`)
  }
  getprofile(id){
    return this.http.get<any>(`${this.base_url}/getprofile/${id}`)
  }
}
