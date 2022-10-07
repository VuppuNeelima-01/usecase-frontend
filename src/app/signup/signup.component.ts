
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import {  FormControl } from '@angular/forms'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
 selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  book:any
  signup=new FormGroup({email:new FormControl(''),
  password:new FormControl('')});
  title = 'reactiveformproject';
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private user:BookService) {
    this.book=this.user;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log("Registered Successfully!!",this.registerForm.value);
    console.log( this.registerForm.value);
    this.user.signUpUser(this.registerForm.value).subscribe((data:any)=>{
      console.log(data,"datavalidationfrom ApI");
      alert('Registered Successfully!!');
      this.router.navigateByUrl('/signin');
  });;
    
   // alert('Registered Successfully!!');
    //this.router.navigateByUrl('/signin');

  }
}