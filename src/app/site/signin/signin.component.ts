import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  loginform;
  constructor(private fb: FormBuilder, private router: Router, private ds: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }
  login(){
    const logindata = {
      'email' : this.loginform.get('email').value,
      'password' : this.loginform.get('password').value
    }
    this.ds.login(logindata).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token', data.accessToken)
      this.router.navigate(['/admin'])
      localStorage.setItem('user', logindata.email)
    }, (err)=>{
      this.toastr.error('Credentials mismatch, Retry');
    })
  }
}
