import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadfileService } from '../uploadfile.service';
import { FormsModule } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  file: File| any = null; // Variable to store file
  pupdate= new FormGroup({pid:new FormControl('')});
  updateform!: FormGroup;
  submitted = false;
  patientId=null;
  searchpatientId:string='';
  isPatientAvail=false;
  nopatientfound:any;
  pdata:boolean=true;

  patientValues:any
  patientValues1:any
  patientForm = new FormGroup({
    address: new FormControl(''),
    dob: new FormControl(''),
    email:new FormControl(''),
    phonenumber: new FormControl('')
  });
  patientForm1=new FormGroup({
    id1:new FormControl(''),
    address1: new FormControl(''),
    dob1: new FormControl(''),
    email1:new FormControl(''),
    phonenumber1: new FormControl('')
  });
  constructor(private uploadfileservice:UploadfileService) { 
    this.patientForm1.controls['id1'].disable();
    this.patientForm1.controls['address1'].disable();
    this.patientForm1.controls['dob1'].disable();
    this.patientForm1.controls['email1'].disable();
   this.patientForm1.controls['phonenumber1'].disable();
  }
  ngOnInit(): void {
  }
  onChange(event:any) {
    this.file = event.target.files[0];
  }
  search(searchpatientId:string)
  {
    console.log(searchpatientId);
    const observable=this.uploadfileservice.getPatientDetails(searchpatientId);
    observable.subscribe((response:any)=>
    {
      console.log(response);
      if(response==null){
        alert("Patient Id Not Found");
      }
      this.patientValues=response;
      this.patientForm.get('address')?.setValue(response.patientAddress);
    this.patientForm.get('dob')?.setValue(response.patientdob);
    this.patientForm.get('email')?.setValue(response.patientemialId);
    this.patientForm.get('phonenumber')?.setValue(response.contactNumber);
    
      
      this.patientId=response;
      console.log(this.patientId);
      if(this.patientId!=null){
        this.isPatientAvail=true;
      }
      else{
        this.nopatientfound="No Patient Details Found";
        console.log( this.nopatientfound);
        alert("No Patient Details Found");


      }
    },
    (error:any)=>{
      console.log(error);
      alert("enter patient Id");

    });
  }


  enableFields(val:any){
    
    if(val=='address'){
      this.patientForm.controls['address'].enable();
    }
    else if(val=='dob')
    this.patientForm.controls['dob'].enable();
    else if(val=='email')
    this.patientForm.controls['email'].enable();
    else
    this.patientForm.controls['phonenumber'].enable();
    console.log("enable fields",val)
  }

  formSubmit(){
    alert("submit");
console.log("submit value",this.patientForm.value);
//console.log("submit value", this.patientForm.get('address'));
//console.log("submit value", this.patientForm.get('dob'));
//console.log("submit value", this.patientForm.get('email'));
//console.log("submit value", this.patientForm.get('phonenumber'));

this.patientValues.patientAddress=this.patientForm.get('address')?.value;

this.patientValues.patientdob=this.patientForm.get('dob')?.value;
this.patientValues.patientemialId=this.patientForm.get('email')?.value;
this.patientValues.contactNumber=this.patientForm.get('phonenumber')?.value;
//console.log(this.patientValues.address);
//console.log(this.patientValues.dob);
//console.log(this.patientValues.dob);
//console.log(this.patientValues.email);
//console.log(this.patientValues.phonenumber);
console.log("patient value",this.patientValues);

      const observable=this.uploadfileservice.updatedetails(this.patientValues);
      observable.subscribe((response:any)=>
    {
  console.log(response);

  this.patientValues1=response;//all values
  console.log("Patient Values1",this.patientValues1);
 // console.log("Patient Form 1",response.patientAddress);
  //console.log("Patient Form 1",this.patientForm1.get('address1')?.value);//form group
  
  this.patientForm1.get('id1')?.setValue(response.patientId);
  this.patientForm1.get('address1')?.setValue(response.patientAddress);
    this.patientForm1.get('dob1')?.setValue(response.patientdob);
    this.patientForm1.get('email1')?.setValue(response.patientemialId);
    this.patientForm1.get('phonenumber1')?.setValue(response.contactNumber);
    console.log("Patient Form 1",this.patientForm1.get('address1')?.value);


  
});


   
   
  }


  }

  
  
  


