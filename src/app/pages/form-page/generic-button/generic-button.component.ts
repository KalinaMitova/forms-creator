import { Component, Input, OnInit } from '@angular/core';
import { FormControlModel } from 'src/app/shared/models/FormControlModel';

@Component( {
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: [ './generic-button.component.scss' ]
} )
export class GenericButtonComponent {
  @Input() control: FormControlModel;
  @Input() disabledButton: FormControlModel;
  constructor () { }

  buttonColor( buttonType: string ) {
    switch ( buttonType ) {
      case 'Submit': return 'primary';
      case 'Cancel': return 'warn';
      default: return null
    }
  }

}
