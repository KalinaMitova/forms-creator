import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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


export class FormPageComponent implements OnDestroy {
  @ViewChild( 'form' ) form: any;
  public controls: Array<FormControlModel>;
  private formControlsSubsc: Subscription;
  gridParams

  constructor ( private router: Router ) {
    const payload = this.router.getCurrentNavigation().extras.state;
    this.gridParams = payload[ 'grid' ];
    delete payload.grid;

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
      return control;
    } );
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
      this.form.reset();
    }
  }
}
