import {
  NG_VALIDATORS,
  Validator,
  AbstractControl
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive( {
  selector: '[appMinMaxValidator]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: MinMaxValidatorDirective,
    multi: true
  } ]
} )

export class MinMaxValidatorDirective implements Validator {
  @Input() appMinMaxValidator: string
  validate( control: AbstractControl ): { [ key: string ]: any } | null {
    const controlToCompare = control.parent.get( this.appMinMaxValidator );
    if ( controlToCompare && control.value < controlToCompare.value ) {
      return { 'minGrеaterThanMax': true };
    }
    return null;
  }
}
