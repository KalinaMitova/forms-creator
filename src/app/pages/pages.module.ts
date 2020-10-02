import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page/select-form-grid-page.component';
import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page.component'
import { SelectFormControlsPageComponent } from './select-form-controls-page/select-form-controls-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SingleGridCellComponent } from './select-form-controls-page/single-grid-cell/single-grid-cell.component';
import { GenericInputComponent, inputValidator } from './form-page/generic-input/generic-input.component';
import { GenericTextareaComponent } from './form-page/generic-textarea/generic-textarea.component';
import { GenericSelectComponent } from './form-page/generic-select/generic-select.component';
import { GenericRadioButtonComponent } from './form-page/generic-radio-button/generic-radio-button.component';
import { GenericButtonComponent } from './form-page/generic-button/generic-button.component';



@NgModule( {
  declarations: [
    SelectFormGridPageComponent,
    SelectFormControlsPageComponent,
    FormPageComponent,
    SingleGridCellComponent,
    GenericInputComponent,
    GenericTextareaComponent,
    GenericSelectComponent,
    GenericRadioButtonComponent,
    GenericButtonComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: GenericInputComponent
  },
  {
    provide: NG_VALIDATORS,
    useValue: inputValidator,
    multi: true
  } ]
} )
export class PagesModule { }
