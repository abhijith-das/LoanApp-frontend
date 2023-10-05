import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [SharedComponent, NotFoundComponent, ModelsComponent, ServicesComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
