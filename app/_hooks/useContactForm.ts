import { useEffect, useState } from "react";

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

  const [isFormValidState, setIsFormValidState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Effect to validate the form whenever values change
  useEffect(() => {
    const isFormValid =
      values.ime.trim().length >= 3 &&
      values.ime.trim().length <= 15 &&
      /^[A-Za-z]{3,15}$/.test(values.ime) &&
      values.prezime.trim().length >= 3 &&
      values.prezime.trim().length <= 15 &&
      /^[A-Za-z]{3,15}$/.test(values.prezime) &&
      /^\S+@\S+\.\S+$/.test(values.email) &&
      values.email.trim().length >= 10 &&
      /^[0-9]{9,10}$/.test(values.telefon) &&
      values.poruka.length >= 10 &&
      values.poruka.length <= 300;

    setIsFormValidState(isFormValid);
  }, [values]); // Dependency array to run the effect when values change

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
