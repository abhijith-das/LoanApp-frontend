import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../models/loan';
import { Customer } from '../models/customer';
import { Officer } from '../models/officer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //declare variable
  formData: Loan= new Loan();

  ///declaring of list
  loans:Loan[];

  //list of customers
  customers:Customer[];
  //list of officers
  officers:Officer[];

     //dependency injection 
     constructor(private httpClient:HttpClient) { }
     
  getAllLoans(): void {
    this.httpClient
      .get(environment.apiUrl + '/api/loan')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.loans = response as Loan[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getAllCustomers(): void {
    this.httpClient
      .get(environment.apiUrl + '/api/customer')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.customers = response as Customer[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getAllOfficers(): void {
    this.httpClient
      .get(environment.apiUrl + '/api/officer')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.officers = response as Officer[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
//update a loan
  updateLoan(loan:Loan):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/loan',loan);
  }



}
