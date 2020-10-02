import {
  NG_VALIDATORS,
  Validator,
  AbstractControl
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive( {
  selector: '[minMaxValidator]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: MinMaxValidatorDirective,
    multi: true
  } ]
} )

export class MinMaxValidatorDirective implements Validator {
  @Input() minMaxValidator: string
  validate( control: AbstractControl ): { [ key: string ]: any } | null {
    const controlToCompare = control.parent.get( this.minMaxValidator );
    if ( controlToCompare && control.value < controlToCompare.value ) {
      return { 'minGrеaterThanMax': true };
    }
    return null;
  }
}
