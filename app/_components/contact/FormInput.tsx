"use client";

import { useTranslation } from "react-i18next";
import { UseFormRegister, FieldError, Path } from "react-hook-form";

// Generic type for form values
type FormValues = Record<string, any>;

interface FormInputProps<T extends FormValues = FormValues> {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

const FormInput = <T extends FormValues>(props: FormInputProps<T>) => {
  const { t } = useTranslation();

  const {
    name,
    type,
    placeholder,
    label,
    id,
    register,
    error,
    minLength,
    maxLength,
    pattern
  } = props;

  const inputClassName = `w-full text-black border rounded-md py-3 px-4 ${
    error ? "border-red-500" : "border-gray-300"
  } focus:outline-none focus:ring-primary-500 focus:border-primary-500`;

  return (
    <div className="relative flex flex-col w-full mb-8">
      {type === "textarea" ? (
        <textarea
          className={`${inputClassName} leading-6 h-full min-h-[72px]`}
          id={id.toString()}
          placeholder={placeholder}
          rows={6}
          {...register(name as Path<T>)}
        />
      ) : (
        <input
          className={inputClassName}
          id={id.toString()}
          type={type}
          placeholder={placeholder}
          {...register(name as Path<T>)}
        />
      )}
      {error && (
        <span className="absolute bottom-0 -mb-5 text-xs mt-1 h-5 block text-red-500 rounded py-1">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
