"use client";

import { FormEvent, useState } from "react";

import axios from "axios";

import { MdEmail, MdCheckCircle } from "react-icons/md";

import Button from "@/app/_components/common/Button/Button";
import ItBridgeLogo from "./icons/ItBridgeLogo";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("/api/subscribe", {
        email,
        firstName,
        lastName
      });
      setStatus("success");
      setEmail("");
      setFirstName("");
      setLastName("");
      setResponseMsg(response.data.message);
    } catch (err) {
      setStatus("error");
      if (axios.isAxiosError(err) && err.response) {
        setResponseMsg(
          err.response.data.error || "An unexpected error occurred"
        );
      } else {
        setResponseMsg("An unexpected error occurred");
      }
    }
  }

  return (
    <section className="flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-[#15103E] to-[#A0C943] relative overflow-hidden">
      <div className="absolute md:w-full h-full z-0 flex items-center justify-end md:mr-36">
        <ItBridgeLogo width="900" color="#15103E" />
      </div>
      <div className="p-6 rounded-lg w-full max-w-screen-md z-10 text-white">
        {/* Conditionally render the header and introductory text */}
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
            <MdCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Hvala vam!</h3>
            <p className="mb-4">{responseMsg}</p>
            <p>
              Na email adresu <strong>{email}</strong> poslali smo potvrdu vaše
              prijave. Proverite inbox i saznajte više o našim obukama.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe}>
            <div className="mb-8">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={status === "loading"}
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-6"
                placeholder="Ime"
                required
              />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={status === "loading"}
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-6"
                placeholder="Prezime"
                required
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant="success"
                className=" text-secondary-500 whitespace-nowrap w-2/3 md:w-1/2"
                disabled={status === "loading"}
              >
                Prijavite se
                <MdEmail className="text-xl md:text-2xl m-0 ms-2" />
              </Button>
            </div>

            <div className="server-message pt-4">
              {status === "error" && (
                <p className="text-orange-600">{responseMsg}</p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
