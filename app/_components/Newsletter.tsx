"use client";
import { useState } from "react";
import Button from "@/app/_components/Button";
import { MdEmail } from "react-icons/md";
import ItBridgeLogo from "./ItBridgeLogo";
import BlurstButton from "./BlurstButton";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null); // Allow null and string

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (res.status === 200) {
        setSubmitted(true);
        setEmail("");
      } else {
        const error = await res.json();
        setError(error.error);
      }
    } catch (error) {
      setError("Nešto je pošlo naopako. Molimo pokušajte ponovo kasnije.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-[#15103E] to-[#A0C943] relative overflow-hidden">
      <div className="absolute md:w-full h-full z-0 flex items-center justify-end md:mr-36">
        <ItBridgeLogo width="900" color="#15103E" />
      </div>
      <div className="p-6 rounded-lg  w-full max-w-screen-md z-10  text-white">
        <h2 className="text-4xl font-bold mb-4 text-center ">
          Prijavite se za naš newsletter
        </h2>
        <p className="text-center mb-8 text-lg md:px-20">
          Prijavite se putem emaila kako biste dobili dodatni materijal i bili u
          toku sa novostima vezanim za naše obuke.
        </p>
        {submitted ? (
          <p className="text-green-500 text-center">Hvala na prijavi!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setEmail(e.target.value)}
                className=" appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-6"
                placeholder="Ime"
                required
              />
              <input
                type="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setEmail(e.target.value)}
                className=" appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-6"
                placeholder="Prezime"
                required
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex items-center justify-center">
              <BlurstButton className="w-1/2 flex items-center justify-center text-secondary-500">
                {" "}
                <MdEmail className="text-2xl m-0 mr-2" />
                Pošalji
              </BlurstButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
