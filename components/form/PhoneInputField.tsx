"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Path,
  UseFormRegister,
  FieldError,
  UseFormSetValue,
  Controller,
  Control
} from "react-hook-form";
import { Icon } from "@iconify/react";
import { ContactFormValues } from "@/validations/contactSchema";

type CountryCode = {
  code: string;
  label: string;
  phone: string;
  icon: string;
  example: string;
  pattern: RegExp;
  formatRegex?: RegExp;
  formatReplacement?: string;
};

const countryCodes: CountryCode[] = [
  {
    code: "RS",
    label: "Serbia",
    phone: "381",
    icon: "emojione:flag-for-serbia",
    example: "6X XXX XXXX",
    pattern: /^[0-9]{9,10}$/,
    formatRegex: /(\d{2})(\d{3})(\d{3,4})/,
    formatReplacement: "$1 $2 $3"
  },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    icon: "emojione:flag-for-germany",
    example: "1XX XXXXXXX",
    pattern: /^[0-9]{10,11}$/,
    formatRegex: /(\d{3})(\d{7,8})/,
    formatReplacement: "$1 $2"
  },
  {
    code: "FR",
    label: "France",
    phone: "33",
    icon: "emojione:flag-for-france",
    example: "X XX XX XX XX",
    pattern: /^[0-9]{9}$/,
    formatRegex: /(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
    formatReplacement: "$1 $2 $3 $4 $5"
  },
  {
    code: "GB",
    label: "United Kingdom",
    phone: "44",
    icon: "emojione:flag-for-united-kingdom",
    example: "XXXX XXXXXX",
    pattern: /^[0-9]{10,11}$/,
    formatRegex: /(\d{4})(\d{6})/,
    formatReplacement: "$1 $2"
  }
];

interface PhoneInputFieldProps {
  id: number;
  name: string;
  placeholder: string;
  label: string;
  register: UseFormRegister<ContactFormValues>;
  error?: FieldError;
  control: Control<ContactFormValues>;
  setValue: UseFormSetValue<ContactFormValues>;
}

// Country dropdown component to reduce duplication
const CountryDropdown: React.FC<{
  countries: CountryCode[];
  onSelect: (country: CountryCode) => void;
  selectedCountry: CountryCode;
  onClose: () => void;
}> = ({ countries, onSelect, selectedCountry, onClose }) => {
  // Handle tab on the last item
  const handleLastItemKeyDown = (
    e: React.KeyboardEvent,
    country: CountryCode,
    isLastItem: boolean
  ) => {
    if (["Enter", " "].includes(e.key)) {
      onSelect(country);
      e.preventDefault();
    } else if (e.key === "Escape") {
      onClose();
      e.preventDefault();
    } else if (e.key === "Tab" && isLastItem && !e.shiftKey) {
      onClose();
    }
  };

  return (
    <div
      className="absolute z-10 top-12 mt-1 w-full bg-white border border-gray-300 rounded-md  max-h-60 overflow-auto "
      role="listbox"
      aria-labelledby="country-select"
    >
      {countries.map((country, index) => (
        <div
          key={country.code}
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors ${
            selectedCountry.code === country.code ? "bg-gray-100" : ""
          } focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
          onClick={() => onSelect(country)}
          role="option"
          aria-selected={selectedCountry.code === country.code}
          tabIndex={0}
          onKeyDown={(e) =>
            handleLastItemKeyDown(e, country, index === countries.length - 1)
          }
        >
          <Icon icon={country.icon} className="mr-2" aria-hidden="true" />
          <span className="flex-1">
            <span className="font-medium">+{country.phone}</span>{" "}
            {country.label}
          </span>
          {selectedCountry.code === country.code && (
            <Icon
              icon="mdi:check"
              className="ml-2 text-primary-500"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  id,
  name,
  placeholder,
  label,
  register,
  error,
  control,
  setValue
}) => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    countryCodes[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Update validation when country changes
  useEffect(() => {
    setValue(name as Path<ContactFormValues>, "", { shouldValidate: false });
  }, [selectedCountry, setValue, name]);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setValue(name as Path<ContactFormValues>, "", { shouldValidate: false });
  };

  // Utility function for formatting phone numbers
  const formatPhoneNumber = (value: string, country: CountryCode): string => {
    if (!value) return "";

    if (country.formatRegex && country.formatReplacement) {
      return value.replace(country.formatRegex, country.formatReplacement);
    }

    return value;
  };

  const [formattedValue, setFormattedValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    const cleaned = e.target.value.replace(/\D/g, "");
    const formatted = formatPhoneNumber(cleaned, selectedCountry);
    setFormattedValue(formatted); // for display only
    field.onChange(cleaned); // raw for form submission/validation
  };

  const inputClassName =
    "w-full text-black border rounded-md py-3 px-4 pl-32 focus:outline-none focus:ring-primary-500 focus:border-primary-500`";

  return (
    <div className="relative flex flex-col w-full mb-8">
      <div className="relative" ref={dropdownRef}>
        <div
          className={`absolute inset-y-0 left-0 z-10 flex items-center pl-3 cursor-pointer transition-colors border-r rounded-l-md ${
            error
              ? "border-red-500 bg-red-50 hover:bg-red-100 shadow-[inset_0_0_0_1px_red]"
              : "border-gray-300 hover:bg-gray-50"
          } ${isDropdownOpen ? "bg-gray-100" : ""}`}
          style={{ width: "110px" }}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          role="button"
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          aria-label={`Select country code: currently ${selectedCountry.label}`}
          onKeyDown={(e) => {
            if (["Enter", " "].includes(e.key)) {
              setIsDropdownOpen(!isDropdownOpen);
              e.preventDefault();
            } else if (e.key === "Escape") {
              setIsDropdownOpen(false);
              e.preventDefault();
            }
          }}
        >
          <div className="flex items-center justify-between w-full px-2">
            <div className="flex items-center space-x-1">
              <Icon
                icon={selectedCountry.icon}
                className="text-lg"
                aria-hidden="true"
              />
              <span className="text-gray-700 font-medium whitespace-nowrap">
                +{selectedCountry.phone}
              </span>
            </div>
            <Icon
              icon={isDropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              className="text-gray-500"
              aria-hidden="true"
            />
          </div>
        </div>

        <Controller
          control={control}
          name={name as Path<ContactFormValues>}
          rules={{
            required: t("CONTACT.VALIDATION.PHONE_REQUIRED"),
            pattern: {
              value: selectedCountry.pattern,
              message: t("CONTACT.VALIDATION.PHONE_FORMAT")
            }
          }}
          render={({ field }) => (
            <>
              <label htmlFor={id.toString()} className="sr-only">
                {label}
              </label>
              <input
                id={id.toString()}
                type="tel"
                placeholder={selectedCountry.example}
                className={`${inputClassName} ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
                value={field.value || ""}
                onChange={(e) => handleInputChange(e, field)}
                onBlur={(e) => {
                  // Format the number properly on blur for cleaner display
                  if (field.value) {
                    const formatted = formatPhoneNumber(
                      field.value,
                      selectedCountry
                    );
                    field.onChange(formatted.replace(/\s/g, "")); // Remove spaces for storage
                  }
                  field.onBlur();
                }}
                onKeyDown={(e) => {
                  if (isDropdownOpen && e.key === "Escape") {
                    setIsDropdownOpen(false);
                    e.preventDefault();
                    return;
                  }

                  if (isDropdownOpen && e.key === "Tab" && !e.shiftKey) {
                    e.preventDefault();
                    const dropdownItems =
                      dropdownRef.current?.querySelectorAll('[role="option"]');
                    if (dropdownItems && dropdownItems.length > 0) {
                      (dropdownItems[0] as HTMLElement).focus();
                    }
                    return;
                  }

                  // Allow arrow keys for navigation
                  if (e.key === "ArrowDown" && !isDropdownOpen) {
                    setIsDropdownOpen(true);
                    e.preventDefault();
                    return;
                  }

                  if (
                    !/[0-9]/.test(e.key) &&
                    ![
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab"
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${name}-error` : undefined}
              />
            </>
          )}
        />

        {isDropdownOpen && (
          <CountryDropdown
            countries={countryCodes}
            onSelect={handleCountrySelect}
            selectedCountry={selectedCountry}
            onClose={() => setIsDropdownOpen(false)}
          />
        )}
      </div>

      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className="absolute bottom-0 -mb-5 text-xs mt-1 h-5 block text-red-500 rounded py-1 font-medium"
          aria-live="assertive"
        >
          <Icon icon="mdi:alert-circle-outline" className="inline-block mr-1" />
          {error.message}
        </span>
      )}
    </div>
  );
};

export default PhoneInputField;
