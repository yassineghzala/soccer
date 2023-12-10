import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm !:FormGroup
  users!:any
  user:any={}
  id: any;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ["",[Validators.minLength(3),Validators.maxLength(10), Validators.required]],
      lastname: ["",[Validators.minLength(3),Validators.maxLength(10), Validators.required]],
      email: ["",[Validators.email,Validators.required]],
      password: [""],
    })
  }
  signup(){
    console.log(this.signupForm.value)
    let T = JSON.parse(localStorage.getItem("users") || "[]")
    this.signupForm.value.id = T.length == 0 ? 0 : T.at(-1).id + 1;
    T.push(this.signupForm.value)
    console.log(T)
    localStorage.setItem("users",JSON.stringify(T))
  }
}
