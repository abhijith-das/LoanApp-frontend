import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import{NotFoundComponent} from './shared/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { OfficerComponent } from './officer/officer.component';
import { CustomerComponent } from './customer/customer.component';
const routes: Routes = [
  {
    path:'',redirectTo:'/auth/login',pathMatch:'full'
  },
  //lazy loading
{path:'admin',component:AdminComponent,
  loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminModule)
},
{path:'officer',component:OfficerComponent,
loadChildren:()=>import('./officer/officer.module').then(x=>x.OfficerModule)
},
{path:'customer',component:CustomerComponent,
loadChildren:()=>import('./customer/customer.module').then(x=>x.CustomerModule)
},
{path:'auth',component:AuthComponent,
loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
},

{
  path:"**",component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
