import { ChangeEvent, useState } from "react";

interface NewsletterFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default function useNewsletterForm() {
  const [values, setValues] = useState<NewsletterFormValues>({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isFormValidState, setIsFormValidState] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "email":
        if (!value) return "Email je obavezan";
        if (!validateEmail(value)) return "Unesite validnu email adresu";
        break;
      case "firstName":
        if (!value) return "Ime je obavezno";
        if (value.length < 2) return "Ime mora imati najmanje 2 karaktera";
        break;
      case "lastName":
        if (!value) return "Prezime je obavezno";
        if (value.length < 2) return "Prezime mora imati najmanje 2 karaktera";
        break;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    // Check if all fields are valid
    const newErrors = { ...errors, [name]: error };
    const isValid =
      !Object.values(newErrors).some((error) => error) &&
      Object.values(values).every((value) => value.trim() !== "");

    setIsFormValidState(isValid);
  };

  return {
    values,
    errors,
    handleChange,
    isFormValidState
  };
}
