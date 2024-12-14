"use client";

import Button from "@/app/_components/common/Button/Button";
import FormInput from "@/app/_components/contact/FormInput";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import { inputs } from "@/app/_data";
import useContactForm from "@/app/_hooks/useContactForm";
import api from "@/app/_services/contactService";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { capitalizeFirstLetter } from "../_utils/stringUtils";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const successMessageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function KontaktForm() {
  const {
    values,
    handleChange,
    isFormValidState,
    responseMessage,
    setResponseMessage
  } = useContactForm();

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValidState) {
      setResponseMessage("Please fill in all fields correctly.");
      return;
    }

    setIsLoading(true);
    setResponseMessage(null);

    try {
      const formattedData = {
        ime: capitalizeFirstLetter(values.ime),
        prezime: capitalizeFirstLetter(values.prezime),
        email: values.email,
        telefon: values.telefon,
        poruka: values.poruka
      };
      const response = await api.post("/contact", formattedData);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setResponseMessage(
        "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="z-10 px-8 xl:max-w-[75%] w-full rounded-lg">
      <h2 className="relative text-4xl font-extrabold my-10 md:my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-20px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 text-white">
        KONTAKT
      </h2>

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            variants={successMessageVariants}
            initial="hidden"
            animate="visible"
            className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-2">
              Uspešno poslata poruka!
            </h3>
            <p className="text-lg">
              Hvala vam na interesovanju. Kontaktiraćemo vas u najkraćem mogućem
              roku.
            </p>
          </motion.div>
        ) : isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center space-y-4 py-20"
          >
            <LoadingSpinner />
            <p className="text-white text-lg">Šalje se vaša poruka...</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="md:mt-4 space-y-6 relative"
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col md:flex-row gap-8 lg:gap-20">
              <div className="flex-1 flex flex-col gap-4">
                {inputs
                  .filter((input) => input.type !== "textarea")
                  .map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name as keyof typeof values]}
                      onChange={handleChange}
                    />
                  ))}
              </div>
              <div className="flex-1">
                <div className="relative h-full">
                  {inputs
                    .filter((input) => input.type === "textarea")
                    .map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name as keyof typeof values]}
                        onChange={handleChange}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="my-24 pt-10 pb-10 md:pt-10 w-full md:w-1/2 md:pr-4 lg:pr-7 xl:pr-0 relative">
              <Button
                disabled={!isFormValidState}
                variant="secondary"
                className="w-full flex items-center justify-center px-14 xl:w-1/2"
              >
                Pošalji
              </Button>
            </div>

            {responseMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              >
                {responseMessage}
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
