import { useState } from "react";
import inputStyles from "../../styles/inputs/input.module.css";
import {
  PasswordInputProps,
  RegularInputProps,
  SelectInputProps,
  TextAreaInputProps,
} from "../../types/inputs";

// texts, names, telephone numbers, dates, searches, etc
export default function RegularInputs({
  label,
  id,
  type,
  name,
  placeholder,
  onChangeEvt,
}: RegularInputProps) {
  const [focus, setFocus] = useState(false);

  const changeFocus = () => {
    setFocus(true);
  };

  return (
    <div className={inputStyles.input_wrapper}>
      <label
        htmlFor={id}
        className={
          focus ? inputStyles.active_label : inputStyles.inactive_label
        }
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
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

// Select inputs
export function SelectInput({ name, id, label, options }: SelectInputProps) {
  return (
    <div className={inputStyles.input_wrapper}>
      <select name={name} id={id}>
        <option value="">{label}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

// Text area inputs
export function TextAreaInput({ name, id, label, placeholder }: TextAreaInputProps) {
  return (
    <div className={inputStyles.input_wrapper}>
      <label htmlFor={id}>{label}</label>
      <textarea name={name} id={id} placeholder={placeholder} rows={3}></textarea>
    </div>
  );
}
