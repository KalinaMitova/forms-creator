import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page/select-form-grid-page.component';
import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page.component'
import { SelectFormControlsPageComponent } from './select-form-controls-page/select-form-controls-page.component';
import { FormPageComponent } from './form-page/form-page.component';



@NgModule( {
  declarations: [
    SelectFormGridPageComponent,
    SelectFormControlsPageComponent,
    FormPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
  ]
} )
export class PagesModule { }
