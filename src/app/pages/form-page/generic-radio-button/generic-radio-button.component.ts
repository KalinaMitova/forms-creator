import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { FormControlModel } from 'src/app/shared/models/FormControlModel';

@Component( {
  selector: 'app-generic-radio-button',
  templateUrl: './generic-radio-button.component.html',
  styleUrls: [ './generic-radio-button.component.scss' ]
} )
export class GenericRadioButtonComponent {
  @Input() control: FormControlModel;
  @Input() disabledButton: FormControlModel;
  @ViewChild( 'radioButton' ) radioButton: ElementRef;
  disabled;


  writeValue( obj: any ): void {
    this.radioButton.nativeElement.value = obj;
  }
  registerOnChange( fn: any ): void {
    this.onChange = fn;
  }
  registerOnTouched( fn: any ): void {
    this.onTouched = fn;
  }
  setDisabledState?( isDisabled: boolean ): void {
    this.disabled = isDisabled;
  }
  onChange( event ) { };
  onTouched() { };
}
