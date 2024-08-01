export type PrimaryButtonProps = {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  customBtnStyles?: string;
  clickEvt?: VoidFunction;
  disabled?: boolean;
};

export type SecondaryButtonProps = {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  customBtnStyles?: string;
  clickEvt?: VoidFunction;
  disabled?: boolean;
}
