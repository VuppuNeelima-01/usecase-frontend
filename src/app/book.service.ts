import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 

  }
  save(user: any) {//authorId/{authorId}
    return this.http.post<any>('http://localhost:8098/bookservice/authorId/5',{authorId:user.authorId,
    title:user.bookTitle,
    category:user.bookCategory,
    price:user.bookPrice,
    author:user.bookAuthor,
    publiaher:user.bookPublisher,
    p_date:user.publishDate},)

  }

  getUserInfo(user:any): Observable<any> {
    console.log('user values',user);
    return this.http
      .get<any>(  '/user?email='+user.email+'&password='+user.password)
      .pipe(retry(1), catchError(this.handleError));
  }

 /* signUpUser(user:any): Observable<any>{
    console.log('user values',user);
    return this.http.post<any>('/user', JSON.stringify(user),
      )
     // .pipe(retry(1), catchError(this.handleError));
  }*/

  signUpUser(user:any){
    
    return this.http.post<any>('http://localhost:8090/adminuser/signup',{userName:user.email,
  password:user.password},
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  signinUser(user:any){
    
    return this.http.post<any>('http://localhost:8090/adminuser/signin',{userName:user.email,
    password:user.password})
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}