import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/shared/models/loan';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  constructor(public adminService:AdminService,private router:Router) { }
  
//search term
searchTerm='';
  ngOnInit(): void {
    console.log("Loan List Component Loaded");
    this.adminService.getAllLoans();
  }

  //for updating Loan details
  updateLoan(loan:Loan){
    console.log("updating...");
    console.log(loan);
    this.populateLoan(loan);
    this.router.navigate(['/admin/edit', loan.loanId]);

  }
  populateLoan(loan:Loan){
    this.adminService.formData = Object.assign({}, loan);
  }

}
