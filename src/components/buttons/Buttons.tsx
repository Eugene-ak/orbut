import { PrimaryButtonProps, SecondaryButtonProps } from "../../types/buttons";
import buttonStyles from "../../styles/buttons/button.module.css";

export function PrimaryButton({
  label,
  type,
  customBtnStyles,
  clickEvt,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${buttonStyles.primary_btn} ${customBtnStyles}`}
      disabled={disabled}
      onClick={clickEvt}
      type={type}
    >
      {label}
    </button>
  );
}

export function SecondaryButton({
  label,
  type,
  customBtnStyles,
  clickEvt,
  disabled,
}: SecondaryButtonProps) {
  return (
    <button
      className={`${buttonStyles.secondary_btn} ${customBtnStyles}`}
      type={type}
      onClick={clickEvt}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
