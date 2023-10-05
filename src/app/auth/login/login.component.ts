import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

//declare variables
loginForm!:FormGroup;
isSubmitted:boolean=false;
error:string=''
loginUser?:User=new User();


constructor(private formBuilder:FormBuilder,
  private authService:AuthService,
  private router:Router) { }

ngOnInit(): void {
  //create a reactive form
  this.loginForm=this.formBuilder.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required]]
  });
}

get formControls(){
  return this.loginForm.controls;
}




loginCredentials():void{
  this.isSubmitted=true;
  console.log("login");
  if(this.loginForm.invalid){
    this.error="Please enter user name and password";
    return;
  }
  
  if(this.loginForm.valid){
    this.error="";
    console.log(this.loginForm.value);
    this.authService.loginverify(this.loginForm.value)
    .subscribe(response=>{
      console.log(response);

      if(response==null){
        this.error="Invalid user name and password";
      }
      if(response.data.role===1){
        console.log("admin");
        this.router.navigate(['admin/view']);
      }
      if(response.data.role===2){
          this.router.navigate(['officer/view']);
      }
      if(response.data.role===3){
        this.router.navigate(['customer']);
      }
      
      

    })
   
  }
  
}

}

