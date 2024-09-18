"use client";

import { FormEvent } from "react";

import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

import { capitalizeFirstLetter } from "../_utils/stringUtils";

import Button from "@/app/_components/common/Button/Button";

import { inputs } from "@/app/_data";
import useContactForm from "@/app/_hooks/useContactForm";
import api from "@/app/_services/contactService";

import FormInput from "@/app/_components/contact/FormInput";
import { type } from "os";
import { map } from "zod";

const formVariants = {
  hidden: { scale: 0, filter: "blur(20px)" },
  visible: {
    scale: 1,
    filter: "blur(0px)",
    transition: {
      scale: {
        duration: 0.5,
        ease: "easeInOut"
      },
      filter: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }
};

export default function KontaktForm() {
  const {
    values,
    handleChange,
    isFormValidState,
    loading,
    setLoading,
    responseMessage,
    setResponseMessage
  } = useContactForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValidState) {
      setResponseMessage("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    setResponseMessage(null);

    try {
      const formattedData = {
        ime: capitalizeFirstLetter(values.ime),
        prezime: capitalizeFirstLetter(values.prezime),
        email: values.email,
        telefon: values.telefon,
        poruka: values.poruka
      };
      const response = await api.post("/contact", formattedData); // Use service to send the form
      if (response.status === 200) {
        setResponseMessage("Your message has been sent successfully!");
      }
    } catch (error) {
      setResponseMessage("There was an error sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="z-10 px-8 xl:max-w-[75%] w-full min-h-[95dvh] rounded-lg">
        <h2 className="relative text-4xl font-extrabold my-10 md:my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-20px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 text-white">
          KONTAKT
        </h2>
        <motion.form
          className="md:mt-4 space-y-6 relative"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="flex flex-col md:flex-row gap-4 lg:gap-14">
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
              loading={loading}
              disabled={!isFormValidState}
              variant="secondary"
              className="w-full flex items-center justify-center px-14 xl:w-1/2"
            >
              {loading ? "SLANJE..." : "POŠALJI"}
            </Button>
          </div>
        </motion.form>
      </div>
    </>
  );
}
