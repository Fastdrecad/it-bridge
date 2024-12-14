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
    value,
    ...inputProps
  } = props;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e); // Propagate the change first

    const currentValue = e.target.value;
    let isValidInput = true;

    // Provera pattern-a (za email)
    if (pattern) {
      const regex = new RegExp(pattern);
      isValidInput = isValidInput && regex.test(currentValue);
    }

    // Provera minLength (za ime i prezime)
    if (minLength && currentValue.length > 0) {
      isValidInput = isValidInput && currentValue.length >= minLength;
    }

    // Provera maxLength
    if (maxLength) {
      isValidInput = isValidInput && currentValue.length <= maxLength;
    }

    setIsValid(isValidInput);
  };

  const handleBlur = () => {
    setIsFocused(true);

    if (minLength && value.length > 0) {
      setIsValid(value.length >= minLength);
    }
  };

  const inputClassName = `w-full text-black border rounded-md py-2 px-3 ${
    isFocused && !isValid ? "border-red-500" : "border-gray-300"
  } focus:outline-none focus:ring-primary-500 focus:border-primary-500`;

  return (
    <div className="relative flex flex-col h-full">
      <label className="text-white" htmlFor={id.toString()}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`${inputClassName} leading-6 h-full min-h-[72px]`}
          id={id.toString()}
          {...inputProps}
          onChange={handleInputChange}
          onBlur={handleBlur}
          data-focused={isFocused.toString()}
          minLength={minLength}
          maxLength={maxLength}
          rows={6}
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
          minLength={minLength}
          maxLength={maxLength}
        />
      )}
      <span
        style={{ color: "red" }}
        className={`text-xs mt-1 h-5 block ${
          isFocused && !isValid ? "visible" : "invisible"
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
