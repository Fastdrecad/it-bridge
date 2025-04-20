import { z } from "zod";
import i18next from "../hooks/i18n";

// Helper to get translation function that can be refreshed
const getT = () => (key: string) => i18next.t(key);

export const getContactSchema = () => {
  const t = getT();

  return z.object({
    ime: z
      .string()
      .min(3, { message: t("CONTACT.VALIDATION.FIRST_NAME_REQUIRED") })
      .max(15, { message: t("CONTACT.VALIDATION.FIRST_NAME_FORMAT") })
      .regex(/^[A-Za-z]{3,15}$/, {
        message: t("CONTACT.VALIDATION.FIRST_NAME_FORMAT")
      }),

    prezime: z
      .string()
      .min(3, { message: t("CONTACT.VALIDATION.LAST_NAME_REQUIRED") })
      .max(15, { message: t("CONTACT.VALIDATION.LAST_NAME_FORMAT") })
      .regex(/^[A-Za-z]{3,15}$/, {
        message: t("CONTACT.VALIDATION.LAST_NAME_FORMAT")
      }),

    email: z
      .string()
      .min(1, { message: t("CONTACT.VALIDATION.EMAIL_REQUIRED") })
      .email({ message: t("CONTACT.VALIDATION.EMAIL_FORMAT") }),

    telefon: z
      .string()
      .min(9, { message: t("CONTACT.VALIDATION.PHONE_REQUIRED") })
      .max(10, { message: t("CONTACT.VALIDATION.PHONE_FORMAT") })
      .regex(/^[0-9]{9,10}$/, {
        message: t("CONTACT.VALIDATION.PHONE_FORMAT")
      }),

    poruka: z
      .string()
      .min(10, { message: t("CONTACT.VALIDATION.MESSAGE_MIN") })
      .max(300, { message: t("CONTACT.VALIDATION.MESSAGE_MAX") })
  });
};

export type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;
