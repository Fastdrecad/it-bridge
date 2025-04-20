"use client";

import Button from "@/components/common/Button/Button";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import api from "@/services/contactService";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getContactSchema,
  ContactFormValues
} from "@/validations/contactSchema";
import { useTranslation } from "react-i18next";
import i18next from "@/hooks/i18n"; // Import to ensure i18n is initialized
import { formInputs } from "@/data/formData";
import FormInput from "@/components/form/FormInput";
import PhoneInputField from "@/components/form/PhoneInputField";

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

export default function ContactForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(getContactSchema()),
    mode: "onSubmit" // Change from onBlur to onSubmit
  });

  // Reset form validation when language changes
  useEffect(() => {
    const handleLanguageChanged = () => {
      if (currentLanguage !== i18next.language) {
        setCurrentLanguage(i18next.language);
        // Reset with current values to trigger revalidation with new language
        reset({}, { keepValues: true });
      }
    };

    i18next.on("languageChanged", handleLanguageChanged);

    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, [reset, currentLanguage]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const formattedData = {
        ime: capitalizeFirstLetter(data.ime),
        prezime: capitalizeFirstLetter(data.prezime),
        email: data.email,
        telefon: data.telefon,
        poruka: data.poruka
      };

      const response = await api.post("/contact", formattedData);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setServerError(t("CONTACT.FORM.ERROR"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="z-10 px-8 pb-64 xl:max-w-[60%] w-full rounded-lg">
      <h2 className="relative text-4xl font-extrabold my-10 md:my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-20px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 text-white">
        {t("CONTACT.FORM.TITLE")}
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
              {t("CONTACT.FORM.SUCCESS_TITLE")}
            </h3>
            <p className="text-lg">{t("CONTACT.FORM.SUCCESS_MESSAGE")}</p>
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
            <p className="text-white text-lg">{t("CONTACT.FORM.LOADING")}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="md:mt-4 space-y-6 relative"
            onSubmit={handleSubmit(onSubmit)}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="flex-1 flex flex-col">
                {formInputs
                  .filter(
                    (input) =>
                      input.type !== "textarea" && input.name !== "telefon"
                  )
                  .map((input) => (
                    <FormInput
                      key={input.id}
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      placeholder={t(
                        `CONTACT.FORM.${input.name.toUpperCase()}`
                      )}
                      label={t(`CONTACT.FORM.${input.name.toUpperCase()}`)}
                      register={register}
                      error={errors[input.name]}
                    />
                  ))}

                <PhoneInputField
                  id={4}
                  name="telefon"
                  placeholder={t("CONTACT.FORM.TELEFON")}
                  label={t("CONTACT.FORM.TELEFON")}
                  register={register}
                  error={errors.telefon}
                  control={control}
                  setValue={setValue}
                />
              </div>
              <div className="flex-1">
                <div className="relative h-full">
                  {formInputs
                    .filter((input) => input.type === "textarea")
                    .map((input) => (
                      <FormInput
                        key={input.id}
                        id={input.id}
                        name={input.name}
                        type={input.type}
                        placeholder={t(
                          `CONTACT.FORM.${input.name.toUpperCase()}`
                        )}
                        label={t(`CONTACT.FORM.${input.name.toUpperCase()}`)}
                        register={register}
                        error={errors[input.name]}
                        minLength={input.minLength}
                        maxLength={input.maxLength}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="my-24 pt-10 pb-10 md:pt-10 w-full md:w-1/2 md:pr-4 lg:pr-7 xl:pr-0 relative">
              <Button
                disabled={isLoading}
                variant="secondary"
                className="w-full flex items-center justify-center px-14 xl:w-1/2"
                loading={isLoading}
              >
                {t("CONTACT.FORM.SEND")}
              </Button>
            </div>

            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              >
                {serverError}
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
