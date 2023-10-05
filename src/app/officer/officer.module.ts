import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerEditComponent } from './officer-edit/officer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [OfficerComponent, OfficerListComponent, OfficerEditComponent],
  imports: [
    CommonModule,
    OfficerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class OfficerModule { }
