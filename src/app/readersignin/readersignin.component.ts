import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readersignin',
  templateUrl: './readersignin.component.html',
  styleUrls: ['./readersignin.component.css']
})
export class ReadersigninComponent implements OnInit {

  title = 'reactiveformproject';
  readersignInForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.readersignInForm = this.formBuilder.group({
      //firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.readersignInForm.invalid) {
      return;
    }

    alert('LoggedIn Successfully!!');
    this.router.navigateByUrl('/addbook');
  }

}
