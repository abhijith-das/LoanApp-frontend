import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
const routes: Routes = [
  
    //view all loans
    {path: 'view', component: AdminViewComponent},
   
    //view all purchases
    {path: 'edit/:id', component: AdminUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
