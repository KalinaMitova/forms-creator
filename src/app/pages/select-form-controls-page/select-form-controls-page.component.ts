import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  counter: number = 1;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.gridParams = this.router.getCurrentNavigation().extras.state;
    this.gridElNumber = this.gridParams[ 'rowsNumber' ] * this.gridParams[ 'colsNumber' ];
  }

  ngOnInit(): void {
    this.formControlsForm = this.formBuilder.group( {} );
  }

  ngAfterViewInit() {
    this.pageLoaded = true;
  }

  isFormValid(): boolean {
    return this.pageLoaded ? this.formControlsForm.valid : true
  }
  ngOnDestroy(): void {
    if ( this.gridSubsc ) {
      this.gridSubsc.unsubscribe();
    }
  }
  addFormControl( name: string, formGroup: FormGroup ): void {
    this.formControlsForm.addControl( name, formGroup );
    this.counter++;
  }
  setFormGroupName(): string {
    return `formControl-${this.counter}`;
  }
  onCreateForm() {
    if ( this.formControlsForm.valid ) {
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
