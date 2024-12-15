import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

interface FormValues {
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  poruka: string;
}

const useContactForm = () => {
  const [values, setValues] = useState<FormValues>({
    ime: "",
    prezime: "",
    email: "",
    telefon: "",
    poruka: ""
  });

  // Debounce the form values
  const debouncedValues = useDebounce<FormValues>(values, 300);

  const [isFormValidState, setIsFormValidState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Use debounced values for validation
  useEffect(() => {
    const isFormValid =
      debouncedValues.ime.trim().length >= 3 &&
      debouncedValues.ime.trim().length <= 15 &&
      /^[A-Za-z]{3,15}$/.test(debouncedValues.ime) &&
      debouncedValues.prezime.trim().length >= 3 &&
      debouncedValues.prezime.trim().length <= 15 &&
      /^[A-Za-z]{3,15}$/.test(debouncedValues.prezime) &&
      /^\S+@\S+\.\S+$/.test(debouncedValues.email) &&
      debouncedValues.email.trim().length >= 10 &&
      /^[0-9]{9,10}$/.test(debouncedValues.telefon) &&
      debouncedValues.poruka.length >= 10 &&
      debouncedValues.poruka.length <= 300;

    setIsFormValidState(isFormValid);
  }, [debouncedValues]);

  return {
    values,
    setValues,
    handleChange,
    isFormValidState,
    loading,
    setLoading,
    responseMessage,
    setResponseMessage
  };
};

export default useContactForm;
