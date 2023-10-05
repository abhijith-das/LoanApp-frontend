import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {

  constructor(public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    console.log("Loan ListnUpdate Component Loaded");
    this.adminService.getAllCustomers();
    this.adminService.getAllOfficers();

  }

  editLoan(form?:NgForm){
    console.log("inserting values");
    console.log(form.value);
    console.log(form.value.bgVerification);
    this.adminService.updateLoan(form.value)
    
    .subscribe(res=>{
      console.log("loan updated Successfully");
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }
  onSubmit(form?:NgForm){
    console.log(form);
    console.log("Inserting...");

    // insert a purchase
    this.editLoan(form);

    //reset the form
    form.reset();

    //navigate to purchase list
    this.router.navigate(['/admin/view']);
  }

}
