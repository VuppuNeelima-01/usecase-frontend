

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import {  FormControl } from '@angular/forms'
	
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
 selector: 'app-signup',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  book:any
  signin=new FormGroup({email:new FormControl(''),
  password:new FormControl('')});
  title = 'reactiveformproject';
  signInForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private user:BookService) {
    this.book=this.user;
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      //firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    console.log("Loggedin Successfully!!",this.signInForm.value);
    console.log( this.signInForm.value);
    this.user.signinUser(this.signInForm.value).subscribe((data:any)=>{
      console.log(data,"datavalidationfrom ApI");
      alert('LoggedIn Successfully!!');
     // routerLink="/fileupload"
     this.router.navigateByUrl('/fileupload');
  });;

   //alert('Logged In Successfully!!');
   //this.router.navigateByUrl('/addbook');
  }
}

