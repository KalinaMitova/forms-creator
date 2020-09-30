import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControls } from '../../../shared/models/FormControls';

@Component( {
  selector: 'app-single-grid-cell',
  templateUrl: './single-grid-cell.component.html',
  styleUrls: [ './single-grid-cell.component.scss' ]
} )
export class SingleGridCellComponent implements OnInit, OnDestroy {
  gridCellForm: FormGroup;
  formControls = FormControls;
  private onChangesSubs: Subscription;


  constructor ( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.gridCellForm = this.formBuilder.group( {
      formControlLabel: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 100 ) ] ],
      formControlType: [ null, Validators.required ],
      validators: [ null ],
      validatorMinValue: [ 0, [ Validators.required ] ],
      validatorMaxValue: [ 0, [ Validators.required ] ],
      validatorMinLength: [ 0, [ Validators.required ] ],
      validatorMaxLength: [ 0, [ Validators.required ] ],
      selectOptions: this.formBuilder.array( [
        this.formBuilder.control( '', [ Validators.required ] ),
        this.formBuilder.control( '', [ Validators.required ] ),
      ] )
    } );
    this.onChanges();
  }
  get selectOptions() {
    return this.gridCellForm.get( 'selectOptions' ) as FormArray;
  }
  get validators() { return this.gridCellForm.get( 'validators' ) };
  get validatorMinValue() { return this.gridCellForm.get( 'validators' ) };
  get validatorMaxValue() { return this.gridCellForm.get( 'validators' ) };
  get validatorMinLength() { return this.gridCellForm.get( 'validators' ) };
  get validatorMaxLength() { return this.gridCellForm.get( 'validators' ) };

  onChanges(): void {
    this.onChangesSubs = this.gridCellForm.get( 'formControlType' ).valueChanges.subscribe( formControl => {
      this.validators.setValue( null );
      this.validatorMinValue.setValue( 0 );
      this.validatorMaxValue.setValue( 0 );
      this.validatorMinLength.setValue( 0 );
      this.validatorMaxLength.setValue( 0 );
    } );

  }

  ngOnDestroy(): void {
    if ( this.onChangesSubs ) {
      this.onChangesSubs.unsubscribe();
    }
  }


  hasError( controlName: string, errorName: string ) {
    return this.gridCellForm.controls[ controlName ].errors ? this.gridCellForm.controls[ controlName ].errors[ errorName ] : false;
  }

  getAvailableValidatorsForFormControl() {
    const inputTypes: Array<Object> = this.formControls[ 0 ].types
    return inputTypes.find( fc => fc[ 'type' ] === this.gridCellForm.value.formControlType.substring( 6 ) )[ 'validators' ];
  }
  selected( event ) {
    const validatorsArray = event.value;
    if ( validatorsArray.indexOf( 'min' ) < 0 ) {
      this.validatorMinValue.setValue( 0 );
    }
    if ( validatorsArray.indexOf( 'max' ) < 0 ) {
      this.validatorMaxValue.setValue( 0 );
    }
    if ( validatorsArray.indexOf( 'minLength' ) < 0 ) {
      this.validatorMinLength.setValue( 0 );
    }
    if ( validatorsArray.indexOf( 'maxLength' ) < 0 ) {
      this.validatorMaxLength.setValue( 0 );
    }
  }

  addOption() {
    this.selectOptions.push( this.formBuilder.control( '', [ Validators.required ] ) );
    console.log( this.selectOptions.controls )
  }

  deleteOption( index: number ) {
    this.selectOptions.removeAt( index );
  }
}
