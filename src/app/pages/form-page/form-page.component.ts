import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { FormControlModel } from '../../shared/models/FormControlModel'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

const inputTypes = [
  'text', 'number', 'date', 'email', 'password', 'çolor' ];
const buttonTypes = [ 'Cancel', 'Submit', 'Basic' ];

@Component( {
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: [ './form-page.component.scss' ]
} )


export class FormPageComponent implements OnInit, OnDestroy {
  @ViewChild( 'form' ) form: any;
  public controls: Array<FormControlModel>;
  private formControlsSubsc: Subscription;


  constructor ( private router: Router ) {
    const payload = this.router.getCurrentNavigation().extras.state;
    console.log( payload );
    const payloadGrid = payload[ 'grid' ];
    delete payload.grid;
    console.log( payloadGrid );
    console.log( payload );

    this.controls = Object.keys( payload ).map( function ( index ) {
      let fc = payload[ index ];

      const control: FormControlModel = {
        label: fc.formControlLabel,
        type: fc.formControlType.split( '-' )[ 1 ],
        selectOptions: fc.selectOptions,
        validatorMaxLength: fc.validatorMaxLength,
        validatorMaxValue: fc.validatorMaxValue,
        validatorMinLength: fc.validatorMinLength,
        validatorMinValue: fc.validatorMinValue,
        validators: fc.validators,
        color: null
      }
      console.log( control );
      return control;
    } );
    console.log( this.controls );
  }
  //fromControl-1:
  // formControlLabel: "vdfbdf"
  // formControlType: "Input-number"
  // selectOptions: ( 2 )[ "", ""]
  // validatorMaxLength: null
  // validatorMaxValue: null
  // validatorMinLength: null
  // validatorMinValue: null
  // validators: null

  ngOnInit(): void {

  }

  isInputType( fcontrol: FormControlModel ): boolean {
    return inputTypes.includes( fcontrol.type );
  }
  isButtonType( fcontrol: FormControlModel ): boolean {
    return buttonTypes.includes( fcontrol.type );
  }


  ngOnDestroy(): void {
    if ( this.formControlsSubsc ) {
      this.formControlsSubsc.unsubscribe();
    }
  }

  onSubmit() {
    if ( this.form.valid ) {
      console.log( "Form Submitted!" );
      console.log( this.form.value );
      this.form.reset();
    }
  }
}
