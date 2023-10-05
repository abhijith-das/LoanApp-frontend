import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AdminComponent, AdminAddComponent, AdminViewComponent, AdminUpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
