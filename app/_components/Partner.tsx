"use client";

import { FormEvent, useState } from "react";
import Button from "./common/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import PlaneIcon from "@/app/_components/icons/PlaneIcon";

export default function Partner() {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      alert(`Email submitted: ${email}`);
      router.push("/thank-you");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="my-10 px-4">
      <div className="flex max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-16 md:gap-32">
          <div className="flex flex-col flex-1 gap-4 ">
            <h2 className="text-3xl">Vaš partner u transformaciji</h2>
            <p>
              IT Bridge je posvećen stvaranju vrednih partnerstava koja kroz
              prilagođene programe omogućavaju rast i transformaciju vašeg
              poslovanja.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start gap-4 w-full">
            {/* <p>Za sva pitanja slobodno nas kontaktirajte</p>
            <form
              className="flex flex-col md:flex-row w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`appearance-none border  w-full py-3 px-3 ${
                  focus
                    ? "text-warning-700"
                    : "text-gray-700 rounded-none appearance-none"
                }   leading-tight focus:outline-none focus:shadow-outline text-md`}
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
              />
              <Button
                variant="warning"
                className="text-md text-nowrap px-4 py-0 flex justify-center border-none rounded-none"
              >
                Pitajte nas
                <BsArrowRight className="text-xl font-bold" />
              </Button>
            </form> */}
            <PlaneIcon
              width={200}
              className="mt-8 animate-fly self-center mr-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
