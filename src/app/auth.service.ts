import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated(){
    let token = localStorage.getItem('token');
    if (token) 
      return true;
    else
      return false;
  }
}
