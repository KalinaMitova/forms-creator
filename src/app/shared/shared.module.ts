import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinMaxValidatorDirective } from './directives/min-max-validator.directive'


@NgModule( {
  declarations: [
    MinMaxValidatorDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    MinMaxValidatorDirective
  ]
} )
export class SharedModule { }
