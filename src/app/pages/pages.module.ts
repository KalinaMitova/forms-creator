import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page/select-form-grid-page.component';
import { SelectFormControlsPageComponent } from './select-form-controls-page/select-form-controls-page.component';



@NgModule( {
  declarations: [
    SelectFormGridPageComponent,
    SelectFormControlsPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ]
} )
export class PagesModule { }
