"use client";

import { useState } from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { PlaneIcon } from "./ItBridgeLogo";

export default function Partner() {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <section className="my-10 px-4">
      <div className="flex max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-16 md:gap-32">
          <div className="flex flex-col flex-1 gap-4 ">
            <h2 className="text-3xl">
              IT Bridge je Vaš partner <br /> u transformaciji
            </h2>
            <p>
              Svakom transformacijom poslovanja klijenata transformišemo i sebe.
              Ta neprekidna transformacija nam daje visok nivo spremnosti da
              omogućimo uspešnu transformaciju svim našim klijentima.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start gap-4 w-full">
            <p>Za sva pitanja slobodno nas kontaktirajte</p>
            <form action="submit" className="flex flex-col w-full">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`appearance-none border  w-full py-3 px-3 ${
                  focus ? "text-warning-700" : "text-gray-700"
                }   leading-tight focus:outline-none focus:shadow-outline text-md`}
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
              />
              <Button
                variant="warning"
                className="text-md text-nowrap  px-4 py-0 border flex justify-center"
              >
                Pitajte nas
                <BsArrowRight className="text-xl font-bold" />
              </Button>
            </form>
            <PlaneIcon width={200} className="mt-6  animate-fly self-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
