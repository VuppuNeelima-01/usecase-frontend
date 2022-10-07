import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ReaderComponent } from './/';
import { SignupComponent } from './/signup/signup.component';
import { SigninComponent } from './/signin/signin.component';
import { HomeComponent } from './/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbookComponent } from './/addbook/addbook.component';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ReadersignupComponent } from './readersignup/readersignup.component';
import { ReadersigninComponent } from './readersignin/readersignin.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UploadfileService } from './uploadfile.service';
import { UpdateComponent } from './update/update.component';
//import { ReadersignupComponent } from './readersignup/readersignup.component';
const routes:Routes=[

  {
    path:'signin',component:SigninComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'addbook',component:AddbookComponent
  },
  {
    path:'readersignup',component:ReadersignupComponent
  },
  {
    path:'readersignin',component:ReadersigninComponent
  },
  {
    path:'viewbook',component:ViewbookComponent
  },
  {
    path:'fileupload',component:FileuploadComponent
},
  {
    path:'update',component:UpdateComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    
    
  
    //ReaderComponent,
       SignupComponent,
       SigninComponent,
       HomeComponent,
       AddbookComponent,
       ReadersignupComponent,
       ReadersignupComponent,
       ReadersigninComponent,
       ViewbookComponent,
       FileuploadComponent,
       UpdateComponent,
      
       
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }