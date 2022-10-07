import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-readersignup',
  templateUrl: './readersignup.component.html',
  styleUrls: ['./readersignup.component.css']
})
export class ReadersignupComponent implements OnInit {

  title = 'reactiveformproject';
  readerregisterForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.readerregisterForm = this.formBuilder.group({
      
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.readerregisterForm.invalid) {
      return;
    }

    alert('Registered Successfully!!');
  }

}
