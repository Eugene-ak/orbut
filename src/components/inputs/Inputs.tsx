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
  value,
  placeholder,
  onChangeEvt,
  onBlurEvt,
  required,
  customStyles,
  errorMsg,
}: RegularInputProps) {
  const [focus, setFocus] = useState(false);

  const activateFocus = () => {
    setFocus(true);
  };

  // const disableFocus = () => {
  //   setFocus(false);
  // }

  return (
    <div className={`${inputStyles.input_wrapper} ${customStyles}`}>
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
        value={value}
        placeholder={placeholder}
        onChange={onChangeEvt}
        onFocus={activateFocus}
        onBlur={onBlurEvt}
        required={required}
      />
      <p>{errorMsg}</p>
    </div>
  );
}

// Passwords
export function PasswordInputs({
  label,
  id,
  name,
  value,
  onChangeEvt,
  onBlurEvt,
  required,
  customStyles,
  errorMsg,
}: PasswordInputProps) {
  const [focus, setFocus] = useState(false);

  const activateFocus = () => {
    setFocus(true);
  };

  return (
    <div className={`${inputStyles.input_wrapper} ${customStyles}`}>
      <label
        htmlFor={id}
        className={
          focus ? inputStyles.active_label : inputStyles.inactive_label
        }
      >
        {label}
      </label>
      <input
        type="password"
        name={name}
        id={id}
        value={value}
        onChange={onChangeEvt}
        onFocus={activateFocus}
        onBlur={onBlurEvt}
        required={required}
      />
      <p>{errorMsg}</p>
    </div>
  );
}

// Select inputs
export function SelectInput({
  name,
  id,
  label,
  value,
  options,
  onChangeEvt,
  onBlurEvt,
  required,
  customStyles,
  errorMsg,
}: SelectInputProps) {
  return (
    <div className={`${inputStyles.input_wrapper} ${customStyles}`}>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChangeEvt}
        onBlur={onBlurEvt}
        required={required}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <p>{errorMsg}</p>
    </div>
  );
}

// Text area inputs
export function TextAreaInput({
  name,
  id,
  label,
  value,
  placeholder,
  onChangeEvt,
  onBlurEvt,
  required,
  customStyles,
  errorMsg,
}: TextAreaInputProps) {
  const [focus, setFocus] = useState(false);

  const activateFocus = () => {
    setFocus(true);
  };

  return (
    <div className={`${inputStyles.input_wrapper} ${customStyles}`}>
      <label
        htmlFor={id}
        className={
          focus ? inputStyles.active_label : inputStyles.inactive_label
        }
      >
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChangeEvt}
        onFocus={activateFocus}
        onBlur={onBlurEvt}
        rows={3}
        required={required}
      ></textarea>
      <p>{errorMsg}</p>
    </div>
  );
}
