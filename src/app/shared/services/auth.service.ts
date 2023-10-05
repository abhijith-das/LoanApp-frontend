import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private httpClient:HttpClient,private router: Router) { 
    //verify login Useraname and password

  }
  public loginverify(user: User): Observable<any> {
    return this.httpClient.get<User>(environment.apiUrl + '/api/users/' + user.userName + '&' + user.password);
  }

  // public logOut() {
  //   //clear all session and localstorage keys
  //   sessionStorage.removeItem("USER_NAME");
  //   sessionStorage.removeItem("ROLE_ID");
  //   localStorage.removeItem("TOKEN");

  //   //redirect to login
  //   this.router.navigate(["auth/login"])
  // }

  public logOut(){
    // localStorage.removeItem("USER_NAME");
    //       sessionStorage.removeItem("USER_NAME");
    //       sessionStorage.removeItem("ROLE_ID");
    //       localStorage.removeItem("TOKEN");
    //       localStorage.removeItem("ROLE_ID");
    //       this.router.navigate(['auth/login']);
  }

}
