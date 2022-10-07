import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../uploadfile.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: boolean = true;
  loading: boolean = false; // Flag variable
  file: File| any = null; // Variable to store file

  constructor( private uploadfileservice:UploadfileService) { 
    this.getPatientAllPatients();
   
  }

  ngOnInit(): void {
  }
// On file Select
onChange(event:any) {
  this.file = event.target.files[0];
  this.shortLink=false;
  
}

onUpload() {
  
  this.loading = !this.loading;
  console.log(this.file);
  console.log(this.shortLink);
  if(this.shortLink==true)
  {
    alert("File not uploaded");
  }
  else{
  this.uploadfileservice.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {
            alert("Uploaded Successfully");

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
          
          
          
      },
     
  );
    }
}

getPatientAllPatients()
{
  this.uploadfileservice.getallpatients().subscribe(
    (resp) =>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }
  );
}


}
