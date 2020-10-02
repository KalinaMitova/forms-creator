export const FormControls = [
  {
    name: 'Input',
    types: [
      {
        type: 'text',
        validators: [
          'required',
          'minLength',
          'maxLength'
        ]
      },
      {
        type: 'number',
        validators: [
          'required',
          'min',
          'max'
        ]
      },
      {
        type: 'color',
        validators: [
          'required'
        ]
      },
      {
        type: 'date',
        validators: [
          'required'
        ]
      },
      {
        type: 'email',
        validators: [
          'required',
          'email',
          'minLength',
          'maxLength',
        ]
      },
      {
        type: 'password',
        validators: [
          'required',
          'minLength',
          'maxLength',
        ]
      },
      {
        type: 'textarea',
        validators: [
          'required',
        ]
      },
      {
        type: 'select',
        validators: [
          'required',
        ]
      },
      {
        type: 'multiple select',
        validators: [
          'required',
        ]
      },
      {
        type: 'radio button',
        validators: []
      },
    ],
  },
  {
    name: 'Button',
    types: [
      {
        type: 'Basic',
        color: null
      },
      {
        type: 'Submit',
        color: 'primary'
      },
      {
        type: 'Cancel',
        color: 'warn'
      },
    ]
  }
]

//   Buuiled -in validators
//    static min( min: number ): ValidatorFn
//  static max( max: number ): ValidatorFn
//  static required( control: AbstractControl ): ValidationErrors | null
//  static requiredTrue( control: AbstractControl ): ValidationErrors | null
//  static email( control: AbstractControl ): ValidationErrors | null
//  static minLength( minLength: number ): ValidatorFn
//  static maxLength( maxLength: number ): ValidatorFn
