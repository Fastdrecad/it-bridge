"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import "@/hooks/i18n";
import { PlaneIcon } from "@/components/icons";

export default function Partner() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      alert(`Email submitted: ${email}`);
      router.push("/thank-you");
    } else {
      alert(t("PARTNER.VALIDATION.EMAIL_REQUIRED"));
    }
  };

  return (
    <section className="my-10 px-4">
      <div className="flex max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-16 md:gap-32">
          <div className="flex flex-col flex-1 gap-4 ">
            <h2 className="text-3xl">{t("PARTNER.TITLE")}</h2>
            <p>{t("PARTNER.DESCRIPTION")}</p>
          </div>
          <div className="flex-1 flex flex-col items-start gap-4 w-full">
            {/* <p>{t("PARTNER.CONTACT_PROMPT")}</p>
            <form
              className="flex flex-col md:flex-row w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder={t("PARTNER.EMAIL_PLACEHOLDER")}
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
                {t("PARTNER.BUTTON")}
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
