export interface FormControlModel {
  label: string;
  type: string;
  validators: Array<string>;
  selectOptions: Array<string>;
  validatorMinValue: number;
  validatorMaxValue: number;
  validatorMinLength: number;
  validatorMaxLength: number;
  color: string
}
