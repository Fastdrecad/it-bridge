export const newsletterInputs = [
  {
    id: 1,
    name: "firstName" as const,
    type: "text",
    placeholder: "NEWSLETTER.FORM.FIRST_NAME",
    label: "NEWSLETTER.FORM.FIRST_NAME",
    errorMessage: "NEWSLETTER.VALIDATION.FIRST_NAME_MIN",
    minLength: 2
  },
  {
    id: 2,
    name: "lastName" as const,
    type: "text",
    placeholder: "NEWSLETTER.FORM.LAST_NAME",
    label: "NEWSLETTER.FORM.LAST_NAME",
    errorMessage: "NEWSLETTER.VALIDATION.LAST_NAME_MIN",
    minLength: 2
  },
  {
    id: 3,
    name: "email" as const,
    type: "email",
    placeholder: "NEWSLETTER.FORM.EMAIL",
    label: "NEWSLETTER.FORM.EMAIL",
    errorMessage: "NEWSLETTER.VALIDATION.EMAIL_INVALID",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
  }
];
