import { useState } from "react";
import inputStyles from "../../styles/inputs/input.module.css";
import { PasswordInputProps, RegularInputProps } from "../../types/inputs";

// texts, names, telephone numbers, seraches, etc
export default function RegularInputs({
  label,
  id,
  type,
  name,
  onChangeEvt,
}: RegularInputProps) {
  const [focus, setFocus] = useState(false);

  const changeFocus = () => {
    setFocus(true);
  };

  return (
    <div className={inputStyles.input_wrapper}>
      <label htmlFor={id} className={focus ? inputStyles.active_label : inputStyles.inactive_label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        onChange={onChangeEvt}
        onFocus={changeFocus}
      />
    </div>
  );
}

// Passwords
export function PasswordInputs({
  label,
  id,
  name,
  onChangeEvt,
}: PasswordInputProps) {
  return (
    <div className={inputStyles.input_wrapper}>
      <label htmlFor={id}>{label}</label>
      <input type="password" name={name} id={id} onChange={onChangeEvt} />
    </div>
  );
}
