import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  // API url
  baseApiUrl = "http://localhost:8090/admin/";
  

  constructor(private http:HttpClient) { 
    
  }
  // Returns an observable
  upload(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl + 'upload', formData)
}
    public getStudentsbyId(patientId: any)
    {
      console.log(patientId);
      //const formData = new FormData(); 
      let appendedURL=this.baseApiUrl + 'patientbyid/';
      appendedURL=appendedURL.concat(patientId);
      return this.http.get(appendedURL)
    }
    public getallpatients()
    {
      return this.http.get(this.baseApiUrl+'patients')
    }

    public getPatientDetails(searchpatientId:any)
    {
      let appendedURL=this.baseApiUrl + 'patientbyid/';
      appendedURL=appendedURL.concat(searchpatientId);
      return this.http.get(appendedURL)
    }

    public updatedetails(data:any )
    {
     return this.http.post<any>(this.baseApiUrl+'update',data)
    // return this.http.post(this.baseApiUrl + 'upload', formData)
     // }
    }
}
