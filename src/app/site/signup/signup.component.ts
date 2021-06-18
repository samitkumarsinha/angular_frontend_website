import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  registerform;
  constructor(private fb: FormBuilder, private ds: DataService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  register(){
    const registerdata = {
      'email' : this.registerform.get('email').value,
      'username' : this.registerform.get('username').value,
      'password' : this.registerform.get('password').value
    }
    this.ds.register(registerdata).subscribe((data)=>{
      console.log(data);
      this.toastr.success('Registered Successfully!!');
      this.router.navigate(['/login']);
    }, (err)=>{
      this.toastr.error('Email exists, Retry');
    })
  }
}
