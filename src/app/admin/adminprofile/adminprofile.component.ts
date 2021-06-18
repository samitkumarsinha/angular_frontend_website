import { environment } from './../../../environments/environment';
import { DataService } from "app/data.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-adminprofile",
  templateUrl: "./adminprofile.component.html",
  styleUrls: ["./adminprofile.component.css"],
})
export class AdminprofileComponent implements OnInit {
  country: string[];
  user = [];
  profileform: FormGroup;
  current_user:string = '';
  user_position = '';
  filename:string = 'assets/img/faces/ayo-ogunseinde-2.jpg';
  constructor(private ds: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileform = this.fb.group({
      files: [null, null],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      country: ["", Validators.required],
      position: ["", Validators.required],
    });
    this.ds.getcountry().subscribe((data) => {
      this.country = data;
    });
    this.getprofile();
  }
  submitform(): void {
    const formData = new FormData();
    formData.append("files", this.profileform.get("files").value);
    formData.append("email", this.profileform.get("email").value);
    formData.append("phone", this.profileform.get("phone").value);
    formData.append("address", this.profileform.get("address").value);
    formData.append("country", this.profileform.get("country").value);
    formData.append("position", this.profileform.get("position").value);
    formData.append("filename", this.user[0].profile[0].filename);
    this.ds.updateprofile(formData).subscribe((item) => {
      console.log(item);
      this.getprofile();
    });
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profileform.get("files").setValue(file);
    }
  }
  getprofile() {
    const loggedin_user = localStorage.getItem('user')
    this.ds.getprofile(loggedin_user).subscribe((data) => {
      this.user = data;
      console.log(data);
      this.setprofile();
    });
  }
  setprofile() {
    this.current_user = this.user[0].username;
    this.user_position = this.user[0].profile[0].position;
    this.profileform.get("username").setValue(this.user[0].username);
    this.profileform.get("email").setValue(this.user[0].email);
    this.profileform.get("password").setValue(this.user[0].password);
    this.profileform.get("phone").setValue(this.user[0].profile[0].phone);
    this.profileform.get("address").setValue(this.user[0].profile[0].address);
    this.profileform.get("country").setValue(this.user[0].profile[0].country);
    this.profileform.get("position").setValue(this.user[0].profile[0].position);
    if(this.user[0].profile[0].filename)
      this.filename = environment.base_url + "/uploads/" + this.user[0].profile[0].filename;
    else
      this.filename = 'assets/img/faces/ayo-ogunseinde-2.jpg';
  }
  getimage(){
    return this.filename;
  }
}
