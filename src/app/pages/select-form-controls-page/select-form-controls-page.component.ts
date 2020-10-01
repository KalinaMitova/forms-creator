import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GridModel } from 'src/app/shared/models/GridModel';
import { EventService } from '../../shared/services/event.service';


@Component( {
  selector: 'app-select-form-controls-page',
  templateUrl: './select-form-controls-page.component.html',
  styleUrls: [ './select-form-controls-page.component.scss' ]
} )
export class SelectFormControlsPageComponent implements OnInit, OnDestroy, AfterViewInit {

  formControlsForm: FormGroup;
  gridParams
  gridElNumber: Number;
  private pageLoaded: boolean = false;
  private gridSubsc: Subscription;


  constructor (
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.gridParams = this.router.getCurrentNavigation().extras.state;
    console.log( this.gridParams );
    this.gridElNumber = this.gridParams[ 'rowsNumber' ] * this.gridParams[ 'colsNumber' ];
    console.log( this.gridElNumber );
  }



  ngOnInit(): void {
    this.formControlsForm = this.formBuilder.group( {} );

  }

  ngAfterViewInit() {
    this.pageLoaded = true;
  }

  isFormValid(): boolean {
    return this.pageLoaded ? this.formControlsForm.valid : false
  }
  ngOnDestroy(): void {
    if ( this.gridSubsc ) {
      this.gridSubsc.unsubscribe();
    }
  }
  addFormControl( name: string, formGroup: FormGroup ): void {
    this.formControlsForm.addControl( name, formGroup );
  }
  setFormGroupName( index: number ): string {
    return `fromControl-${index + 1}`;
  }
  onCreateForm() {
    if ( this.formControlsForm.valid ) {
      // this.eventService.emit( {
      //   name: 'formControlsSelected',
      //   value: this.formControlsForm.value
      // } )
      const payload = this.formControlsForm.value;
      payload.grid = {
        cols: this.gridParams.colsNumber,
        gridElNum: this.gridElNumber,
        rowHeight: this.gridParams.rowsHeight,
        colWidth: this.gridParams.colsWidth
      }

      this.router.navigate( [ 'form-creator', 'form' ], { state: payload } );
      this.formControlsForm.reset;
    }
  }
  onCancel() {
    this.router.navigate( [ 'form-creator', 'select-form-grid' ] );
    this.formControlsForm.reset;
  }


}
