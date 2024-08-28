"use client";

import Image from "next/image";
import ItBridgeLogo from "../_components/ItBridgeLogo";
import kontaktBg from "@/public/kontakt-bg.jpg";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import BlurstButton from "../_components/BlurstButton";
import GoogleMapComponent from "../_components/GoogleMap";
import { capitalizeFirstLetter } from "../_utils/stringUtils";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

interface FormData {
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  poruka: string;
}

interface FormErrors {
  ime?: string;
  prezime?: string;
  email?: string;
  telefon?: string;
  poruka?: string;
}

export default function KontaktPage() {
  const [formData, setFormData] = useState<FormData>({
    ime: "",
    prezime: "",
    email: "",
    telefon: "",
    poruka: ""
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");

  const formVariants = {
    hidden: { scale: 0, filter: "blur(20px)" },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        scale: {
          duration: 0.8,
          ease: "easeInOut"
        },
        filter: {
          duration: 0.8,
          ease: "easeInOut"
        }
      }
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = (): FormErrors => {
    let errors: FormErrors = {};
    if (!formData.ime.trim()) {
      errors.ime = "Ime je obavezno.";
    }
    if (!formData.prezime.trim()) {
      errors.prezime = "Prezime je obavezno.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email je obavezan.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Email nije ispravan.";
    }
    if (
      formData.telefon &&
      !/^\+?381[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})$/.test(
        formData.telefon.trim()
      )
    ) {
      errors.telefon =
        "Broj telefona nije ispravan. Molimo unesite broj u formatu +381 XX XXX XXXX.";
    }
    if (!formData.poruka.trim()) {
      errors.poruka = "Poruka je obavezna.";
    }
    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.error("Form errors:", errors);
      alert("Ispravite greške u formi.");
      return;
    }

    // Formatiranje imena i prezimena
    const formattedData = {
      ...formData,
      ime: capitalizeFirstLetter(formData.ime),
      prezime: capitalizeFirstLetter(formData.prezime)
    };

    setStatus("loading");

    try {
      const response = await axios.post("/api/contact", formattedData);
      if (response.status === 200) {
        setStatus("success");
        setResponseMsg("Vaša poruka je uspešno poslata!");
        setFormData({
          ime: "",
          prezime: "",
          email: "",
          telefon: "",
          poruka: ""
        });
        setFormErrors({});
      } else {
        throw new Error("Greška pri slanju poruke.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setResponseMsg(
        "Došlo je do greške pri slanju poruke. Pokušajte ponovo kasnije."
      );
    }
  };

  return (
    <>
      <section className="flex flex-col overflow-hidden items-center justify-center relative bg-secondary-500">
        <div className="absolute w-full h-full z-0 opacity-30 flex justify-center">
          <Image
            src={kontaktBg}
            alt="Handshake"
            className="object-cover"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <ItBridgeLogo
          width="100"
          color="#8BFC40"
          className="m-0 p-0 opacity-100 absolute right-12 md:bottom-16 hidden md:block"
          showText
          fill="white"
        />
        <div className="z-10 px-8 xl:max-w-[75%] w-full min-h-[90dvh] rounded-lg">
          <h2 className="relative text-4xl font-extrabold my-10 md:my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-20px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 text-white">
            KONTAKT
          </h2>
          {status === "success" ? (
            <div className="text-center text-white">
              <MdCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 ">Hvala vam!</h3>
              <p className="mb-4">{responseMsg}</p>
              <p>Obratićemo vam se u najkraćem mogućem roku.</p>
            </div>
          ) : (
            <motion.form
              className="md:mt-4 space-y-4 relative"
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={formVariants}
            >
              <div className="flex flex-col md:flex-row gap-8 lg:gap-14">
                <div className="flex-1 flex flex-col gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      name="ime"
                      id="ime"
                      placeholder="Ime"
                      value={formData.ime}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full border rounded-lg py-3 px-3 ${
                        formErrors.ime ? "border-red-500" : "border-gray-300"
                      }  focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
                    />
                    {formErrors.ime && (
                      <p className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {formErrors.ime}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="prezime"
                      name="prezime"
                      placeholder="Prezime"
                      value={formData.prezime}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full border rounded-lg py-3 px-3 ${
                        formErrors.prezime
                          ? "border-red-500"
                          : "border-gray-300"
                      }  focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
                    />
                    {formErrors.prezime && (
                      <p className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {formErrors.prezime}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full border rounded-lg py-3 px-3 ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      }  focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      placeholder="Telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full pborder rounded-lg py-3 px-3 ${
                        formErrors.telefon
                          ? "border-red-500"
                          : "border-gray-300"
                      }  focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
                    />
                    {formErrors.telefon && (
                      <p className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {formErrors.telefon}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-1 ">
                  <div className="relative h-full">
                    <textarea
                      name="poruka"
                      id="poruka"
                      placeholder="Unesi poruku"
                      rows={4}
                      value={formData.poruka}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full border rounded-lg py-3 px-3 ${
                        formErrors.poruka ? "border-red-500" : "border-gray-300"
                      }  focus:outline-none focus:ring-primary-500 focus:border-primary-500 h-full`}
                    ></textarea>
                    {formErrors.poruka && (
                      <p className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {formErrors.poruka}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-10  md:pt-10 w-full md:w-1/2 md:pr-4 lg:pr-7 xl:pr-0">
                <BlurstButton
                  className="w-full flex items-center justify-center px-14 xl:w-1/2"
                  disabled={status === "loading"}
                >
                  Pošalji
                </BlurstButton>
              </div>
            </motion.form>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4">{responseMsg}</p>
          )}
        </div>
      </section>
      <GoogleMapComponent />
    </>
  );
}
