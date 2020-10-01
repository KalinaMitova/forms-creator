import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControls } from '../../../shared/models/FormControls';

@Component( {
  selector: 'app-single-grid-cell',
  templateUrl: './single-grid-cell.component.html',
  styleUrls: [ './single-grid-cell.component.scss' ]
} )
export class SingleGridCellComponent implements OnInit, OnDestroy {
  @Output()
  private gridCellFormReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private form: FormGroup;
  gridCellForm: FormGroup;
  formControls = FormControls;
  private onChangesSubs: Subscription;


  constructor ( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.gridCellForm = this.formBuilder.group( {
      formControlLabel: [ null, [ Validators.required, Validators.minLength( 2 ), Validators.maxLength( 50 ) ] ],
      formControlType: [ null, Validators.required ],
      validators: [ null ],
      validatorMinValue: [ null ],
      validatorMaxValue: [ null ],
      validatorMinLength: [ null ],
      validatorMaxLength: [ null ],
      selectOptions: this.formBuilder.array( [
        this.formBuilder.control( '', ),
        this.formBuilder.control( '', ),
      ] )
    } );
    this.onChanges();
    this.gridCellFormReady.emit( this.gridCellForm );
  }
  get selectOptions() {
    return this.gridCellForm.get( 'selectOptions' ) as FormArray;
  }
  get validators() { return this.gridCellForm.get( 'validators' ) };
  get validatorMinValue() { return this.gridCellForm.get( 'validatorMinValue' ) };
  get validatorMaxValue() { return this.gridCellForm.get( 'validatorMaxValue' ) };
  get validatorMinLength() { return this.gridCellForm.get( 'validatorMinLength' ) };
  get validatorMaxLength() { return this.gridCellForm.get( 'validatorMaxLength' ) };
  get formControlType() { return this.gridCellForm.get( 'formControlType' ) };

  onChanges(): void {
    this.onChangesSubs = this.formControlType.valueChanges.subscribe( formControl => {
      this.validators.setValue( null );
      this.validatorMinValue.setValue( null );
      this.validatorMaxValue.setValue( null );
      this.validatorMinLength.setValue( null );
      this.validatorMaxLength.setValue( null );
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
      this.validatorMinValue.setValue( null );
    }
    if ( validatorsArray.indexOf( 'max' ) < 0 ) {
      this.validatorMaxValue.setValue( null );
    }
    if ( validatorsArray.indexOf( 'minLength' ) < 0 ) {
      this.validatorMinLength.setValue( null );
    }
    if ( validatorsArray.indexOf( 'maxLength' ) < 0 ) {
      this.validatorMaxLength.setValue( null );
    }
  }

  addOption() {
    this.selectOptions.push( this.formBuilder.control( '', ) );
    console.log( this.gridCellForm.controls );
  }

  deleteOption( index: number ) {
    this.selectOptions.removeAt( index );
  }
}
