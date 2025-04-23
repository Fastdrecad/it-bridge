import { z } from "zod";
import i18next from "../hooks/i18n";

// Helper to get translation function that can be refreshed
const getT = () => (key: string) => i18next.t(key);

export const getNewsletterSchema = () => {
  const t = getT();

  return z.object({
    firstName: z
      .string()
      .min(2, { message: t("NEWSLETTER.VALIDATION.FIRST_NAME_MIN") }),

    lastName: z
      .string()
      .min(2, { message: t("NEWSLETTER.VALIDATION.LAST_NAME_MIN") }),

    email: z
      .string()
      .min(1, { message: t("NEWSLETTER.VALIDATION.EMAIL_REQUIRED") })
      .email({ message: t("NEWSLETTER.VALIDATION.EMAIL_INVALID") })
  });
};

export type NewsletterFormValues = z.infer<
  ReturnType<typeof getNewsletterSchema>
>;
