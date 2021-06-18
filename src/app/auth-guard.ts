import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authservice: AuthService){}
    canActivate(): boolean{
        if(this.authservice.isAuthenticated())
            return true;
        else
            this.router.navigate(['/home']);
    }
}
