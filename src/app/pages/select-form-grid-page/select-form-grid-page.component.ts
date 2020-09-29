import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GridModel } from '../../shared/models/GridModel';
import { EventService } from '../../shared/services/event.service';
import { Router } from '@angular/router'

@Component( {
  selector: 'app-select-form-grid-page',
  templateUrl: './select-form-grid-page.component.html',
  styleUrls: [ './select-form-grid-page.component.scss' ]
} )
export class SelectFormGridPageComponent implements OnInit {

  gridForm: FormGroup;
  private gridInfo: GridModel;

  constructor (
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.gridForm = this.formBuilder.group( {
      rowsNumber: [ 1, [ Validators.min( 1 ), Validators.max( 10 ), Validators.required ] ],
      rowsHeight: [ 100, [ Validators.max( 500 ), Validators.min( 100 ), Validators.required ] ],
      colsNumber: [ 1, [ Validators.min( 1 ), Validators.max( 8 ), Validators.required ] ],
      colsWidth: [ 200, [ Validators.min( 200 ), Validators.max( 500 ), Validators.required ] ]
    } )
  }

  public hasError = ( controlName: string, errorName: string ) => {
    return this.gridForm.controls[ controlName ].errors ? this.gridForm.controls[ controlName ].errors[ errorName ] : false;
  }

  public onCreate() {
    if ( this.gridForm.valid ) {
      this.eventService.emit(
        {
          name: 'select grid',
          value: this.gridForm.value
        }
      )
      console.log( this.gridForm );
      this.router.navigate( [ 'form-creator', 'select-form-controls' ] );
      this.gridForm.reset;
    }
  }
  onCancel() {
    this.gridForm.reset();
  }
}
