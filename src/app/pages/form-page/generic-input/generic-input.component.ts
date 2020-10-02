import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormControlModel } from 'src/app/shared/models/FormControlModel';

export function inputValidator( c: AbstractControl ): ValidationErrors {
  const validators: ValidatorFn[] = [];
  if ( this.hasValidator( 'required' ) ) {
    validators.push( Validators.required );
  }
  if ( this.hasValidator( 'min' ) ) {
    validators.push( Validators.min( this.control.validatorMinValue ) );
  }
  if ( this.hasValidator( 'max' ) ) {
    validators.push( Validators.max( this.control.validatorMaxValue ) );
  }
  if ( this.hasValidator( 'minLength' ) ) {
    validators.push( Validators.minLength( this.control.validatorMinLength ) );
  }
  if ( this.hasValidator( 'maxLength' ) ) {
    validators.push( Validators.maxLength( this.control.validatorMaxLength ) );
  }
  return validators;
}

@Component( {
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: [ './generic-input.component.scss' ],
} )


export class GenericInputComponent implements OnInit, ControlValueAccessor {
  @Input() control: FormControlModel;
  @ViewChild( 'input' ) input: ElementRef;
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
    if ( this.hasValidator( 'min' ) ) {
      validators.push( Validators.min( this.control.validatorMinValue ) );
    }
    if ( this.hasValidator( 'max' ) ) {
      validators.push( Validators.max( this.control.validatorMaxValue ) );
    }
    if ( this.hasValidator( 'minLength' ) ) {
      validators.push( Validators.minLength( this.control.validatorMinLength ) );
    }
    if ( this.hasValidator( 'maxLength' ) ) {
      validators.push( Validators.maxLength( this.control.validatorMaxLength ) );
    }
    fcontrol.setValidators( validators );
    fcontrol.updateValueAndValidity();
  }
  writeValue( obj: any ): void {
    this.input.nativeElement.value = obj;
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
