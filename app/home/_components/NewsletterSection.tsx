"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MdCheckCircle, MdEmail } from "react-icons/md";

import "@/hooks/i18n";
import { getNewsletterSchema } from "@/validations/newsletterSchema";
import { NewsletterFormValues } from "@/validations/newsletterSchema";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import Button from "@/components/common/Button/Button";
import { newsletterInputs } from "@/data/newsletterInputs";
import FormInput from "@/components/form/FormInput";
import { ItBridgeLogo } from "@/components/icons";
import i18next from "@/hooks/i18n";

export default function Newsletter() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(getNewsletterSchema()),
    mode: "onBlur" // Validate on blur for better UX
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

  const onSubmit: SubmitHandler<NewsletterFormValues> = async (data) => {
    setStatus("loading");

    try {
      const response = await axios.post("/api/subscribe", {
        firstName: capitalizeFirstLetter(data.firstName.trim()),
        lastName: capitalizeFirstLetter(data.lastName.trim()),
        email: data.email.trim()
      });

      setStatus("success");
      setResponseMsg(response.data.message);
      reset();
    } catch (err: unknown) {
      console.error("Subscription error:", err);
      setStatus("error");
      if (axios.isAxiosError(err) && err.response) {
        setResponseMsg(
          err.response.data.error || t("NEWSLETTER.FORM.SERVER_ERROR")
        );
      } else {
        setResponseMsg(t("NEWSLETTER.FORM.SERVER_ERROR"));
      }
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setResponseMsg("");
    reset();
  };

  return (
    <section className="flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-[#15103E] to-[#A0C943] relative overflow-hidden">
      <div className="absolute md:w-full h-full z-0 flex items-center justify-end md:mr-36">
        <ItBridgeLogo width="900" color="#15103E" />
      </div>
      <div className="p-6 rounded-lg w-full max-w-screen-sm z-10 text-white">
        {status !== "success" && (
          <>
            <h2 className="text-4xl font-bold mb-4 text-center">
              {t("NEWSLETTER.TITLE")}
            </h2>
            <p className="text-center mb-8 text-lg md:px-20">
              {t("NEWSLETTER.SUBTITLE")}
            </p>
          </>
        )}

        {status === "success" ? (
          <div className="text-center">
            <MdCheckCircle className="text-5xl text-warning-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {t("NEWSLETTER.FORM.THANKS_TITLE")}
            </h3>
            <p className="mb-4">{responseMsg}</p>
            <Button
              variant="success"
              className="mt-4 m-auto"
              onClick={resetForm}
            >
              {t("NEWSLETTER.FORM.NEW_SUBSCRIPTION")}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {newsletterInputs.map((input) => (
              <FormInput
                key={input.id}
                id={input.id}
                name={input.name}
                type={input.type}
                placeholder={t(input.placeholder)}
                label={t(input.label)}
                register={register}
                error={errors[input.name]}
              />
            ))}

            <div className="flex items-center justify-center w-fit mx-auto">
              <Button
                variant="success"
                className="text-secondary-500 whitespace-nowrap w-full"
                disabled={status === "loading"}
                loading={status === "loading"}
              >
                {t("NEWSLETTER.FORM.SUBMIT")}
                <MdEmail className="text-xl m-0 ms-2" />
              </Button>
            </div>

            {status === "error" && (
              <div className="text-orange-600 bg-orange-100 p-3 rounded-lg">
                {responseMsg}
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
