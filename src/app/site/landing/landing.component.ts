import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  contactform;
  constructor(private fb: FormBuilder, private ds: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.contactform = this.fb.group({
      sendername: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['',Validators.required]
    })
  }
  sendmail(){
    const maildata = {
      'sendername' : this.contactform.get('sendername').value,
      'emailid' : this.contactform.get('email').value,
      'mailbody' : this.contactform.get('message').value
    }
    this.ds.sendmail(maildata).subscribe((data)=>{
      console.log(data);
      this.toastr.success('Mail Sent');
    })
  }

}
