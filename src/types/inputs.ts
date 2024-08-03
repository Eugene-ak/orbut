export type RegularInputProps = {
  label?: string;
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChangeEvt: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlurEvt?: React.FocusEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  customStyles?: string;
  errorMsg?: string;
};

export type PasswordInputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChangeEvt: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlurEvt?: React.FocusEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  customStyles?: string;
  errorMsg?: string;
};

export type SelectInputProps = {
  name: string;
  id: string;
  label: string;
  value: string;
  options: string[];
  onChangeEvt: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  onBlurEvt?: React.FocusEventHandler<HTMLSelectElement> | undefined;
  required?: boolean;
  customStyles?: string;
  errorMsg?: string;
};

export type TextAreaInputProps = {
  name: string;
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChangeEvt: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onBlurEvt?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
  required?: boolean;
  customStyles?: string;
  errorMsg?: string;
};
