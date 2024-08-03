export type RegularInputProps = {
  label?: string;
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  onChangeEvt: VoidFunction;
};

export type PasswordInputProps = {
  label: string;
  id: string;
  name: string;
  onChangeEvt: VoidFunction;
};

export type SelectInputProps = {
  name: string;
  id: string;
  label: string;
  options: string[];
};

export type TextAreaInputProps = {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
}
