import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { NgControl, ValidatorFn, Validators } from '@angular/forms';
import { FormControlModel } from 'src/app/shared/models/FormControlModel';

@Component( {
  selector: 'app-generic-textarea',
  templateUrl: './generic-textarea.component.html',
  styleUrls: [ './generic-textarea.component.scss' ]
} )
export class GenericTextareaComponent implements OnInit {
  @Input() control: FormControlModel;
  @ViewChild( 'textarea' ) textarea: ElementRef;
  disabled;

  constructor ( @Self() public controlDir: NgControl ) {
    if ( this.controlDir ) {
      this.controlDir.valueAccessor = this;
    }
  }

  ngOnInit() {
    const fcontrol = this.controlDir.control;

    const validators: ValidatorFn[] = fcontrol.validator ? [ fcontrol.validator ] : [];
    if ( this.hasValidator( 'required' ) ) {
      validators.push( Validators.required );
    }
    fcontrol.setValidators( validators );
    fcontrol.updateValueAndValidity();
  }
  writeValue( obj: any ): void {
    this.textarea.nativeElement.value = obj;
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

  hasValidator( validatorName: string ): boolean {
    return this.control.validators ? this.control.validators.includes( validatorName ) : false;

  }
}
