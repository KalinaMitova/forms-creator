import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component( {
  selector: 'app-select-form-controls-page',
  templateUrl: './select-form-controls-page.component.html',
  styleUrls: [ './select-form-controls-page.component.scss' ]
} )
export class SelectFormControlsPageComponent implements OnInit {

  // gridCellForm: FormGroup;
  // formControlTypes = FormControlTypes;


  constructor ( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    // this.gridCellForm = this.formBuilder.group( {
    //   formControlLabel: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 100 ) ] ],
    //   formControlType: [ null, Validators.required ]

    // } )
  }

  // public hasError = ( controlName: string, errorName: string ) => {
  //   return this.gridCellForm.controls[ controlName ].errors ? this.gridCellForm.controls[ controlName ].errors[ errorName ] : false;
  // }


}
