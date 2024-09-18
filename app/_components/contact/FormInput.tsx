import test from "node:test";
import { type } from "os";
import { ChangeEvent, FC } from "react";
import { useState } from "react";

interface FormInputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  errorMessage?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  focused?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const {
    onChange,
    errorMessage,
    label,
    minLength,
    maxLength,
    type,
    id,
    pattern,
    ...inputProps
  } = props;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e); // Propagate the change first

    if (pattern) {
      const regex = new RegExp(pattern);
      setIsValid(regex.test(e.target.value));
    } else {
      setIsValid(true); // No pattern means always valid unless overridden by specific logic
    }

    // Additional validations for textarea based on length
    if (type === "textarea" && (minLength || maxLength)) {
      const length = e.target.value.length;
      setIsValid(
        (minLength ? length >= minLength : true) &&
          (maxLength ? length <= maxLength : true)
      );
    }
  };

  const handleBlur = () => {
    setIsFocused(true); // Only check for errors after the field has been touched
  };

  const inputClassName = `w-full border rounded-lg py-3 px-3 ${
    isFocused && !isValid ? "border-red-500" : "border-gray-300"
  } focus:outline-none focus:ring-primary-500 focus:border-primary-500`;

  return (
    <div className="relative flex flex-col h-full">
      <label className="text-white" htmlFor={id.toString()}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`${inputClassName} leading-6 h-full`}
          id={id.toString()}
          {...inputProps}
          onChange={handleInputChange}
          onBlur={handleBlur}
          data-focused={isFocused.toString()}
          minLength={minLength}
          maxLength={maxLength}
        />
      ) : (
        <input
          className={inputClassName}
          id={id.toString()}
          type={type}
          {...inputProps}
          onChange={handleInputChange}
          onBlur={handleBlur}
          data-focused={isFocused.toString()}
          pattern={pattern}
        />
      )}
      {/* {!isValid && errorMessage && (
        <span className="text-red-500 text-xs mt-1">{errorMessage}</span>
      )} */}
      <span
        className={`text-red-500 text-xs mt-1 ${
          !isValid && errorMessage ? "visible" : "invisible"
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
