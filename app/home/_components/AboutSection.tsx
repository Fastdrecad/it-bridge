"use client";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="text-left max-w-7xl w-full mx-auto mt-28 md:mt-44 px-4">
      <h2 className="relative uppercase text-4xl font-extrabold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
        {t("HOME.ABOUT.TITLE")}
      </h2>

      <p className="mb-5 text-lg">{t("HOME.ABOUT.DESCRIPTION")}</p>
      <p className="mb-5 text-lg">
        {t(
          "HOME.ABOUT.PARAGRAPH_1",
          "Svakoj kompaniji pristupamo na autentičan način jer verujemo da je svaka kompanija jedinstvena. Pažljivo se obraćamo svakom klijentu i razumemo specifičnosti njihovih potreba što dovodi do dubljeg i efikasnijeg partnerstva."
        )}
      </p>
      <p className="mb-5 text-lg">
        {t(
          "HOME.ABOUT.PARAGRAPH_2",
          "Naša suštinska svrha je vaše zadovoljstvo našim obukama koje dovode do konkretne transformacije i postizanja željenih rezultata."
        )}
      </p>
      <p className="mb-5 text-lg">
        {t(
          "HOME.ABOUT.PARAGRAPH_3",
          "Kroz posvećeno mentorstvo, interaktivne sesije i podršku, gradimo vezu koja prevazilazi granice kursa postižući ciljeve zajedno. Svaki modul je pažljivo osmišljen da vam pruži praktično iskustvo i vrednost koja prevazilazi očekivanja."
        )}
      </p>
    </section>
  );
}
