import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerEditComponent } from './officer-edit/officer-edit.component';


const routes: Routes = [
    //view all loans
    {path: 'view', component: OfficerListComponent},
   
    //view all purchases
    {path: 'edit/:id', component: OfficerEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule { }
