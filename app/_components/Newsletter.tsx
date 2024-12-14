"use client";

import { FormEvent, useState } from "react";

import axios from "axios";

import { MdCheckCircle, MdEmail } from "react-icons/md";

import Button from "@/app/_components/common/Button/Button";
import { newsletterInputs } from "@/app/_data";
import useNewsletterForm from "@/app/_hooks/useNewsletterForm";
import { capitalizeFirstLetter } from "../_utils/stringUtils";
import FormInput from "./contact/FormInput";
import ItBridgeLogo from "./icons/ItBridgeLogo";

export default function Newsletter() {
  const { values, errors, handleChange, isFormValidState } =
    useNewsletterForm();
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFormValidState) {
      setStatus("error");
      setResponseMsg("Molimo popunite sva polja ispravno.");
      return;
    }

    setStatus("loading");

    try {
      const response = await axios.post("/api/subscribe", {
        email: values.email.trim(),
        firstName: capitalizeFirstLetter(values.firstName.trim()),
        lastName: capitalizeFirstLetter(values.lastName.trim())
      });

      setStatus("success");
      setResponseMsg(response.data.message);
    } catch (err: unknown) {
      console.error("Subscription error:", err);
      setStatus("error");
      if (axios.isAxiosError(err) && err.response) {
        setResponseMsg(
          err.response.data.error || "Došlo je do greške prilikom prijave"
        );
      } else {
        setResponseMsg("Došlo je do greške prilikom prijave");
      }
    }
  }

  const resetForm = () => {
    setStatus("idle");
    setResponseMsg("");
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
              Prijavite se za naš newsletter
            </h2>
            <p className="text-center mb-8 text-lg md:px-20">
              Budite u toku sa najnovijim obukama i prilikama
            </p>
          </>
        )}

        {status === "success" ? (
          <div className="text-center">
            <MdCheckCircle className="text-5xl text-warning-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Hvala vam!</h3>
            <p className="mb-4">{responseMsg}</p>
            <Button
              variant="success"
              className="mt-4 m-auto"
              onClick={resetForm}
            >
              Nova prijava
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="mb-8 space-y-2">
              {newsletterInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name as keyof typeof values]}
                  onChange={handleChange}
                  errorMessage={errors[input.name as keyof typeof errors]}
                />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Button
                variant="success"
                className="text-secondary-500 whitespace-nowrap md:w-2/5"
                disabled={status === "loading" || !isFormValidState}
              >
                {status === "loading" ? "Slanje..." : "Prijavite se"}
                <MdEmail className="text-xl md:text-2xl m-0 ms-2" />
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
