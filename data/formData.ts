export const formInputs = [
  {
    id: 1,
    name: "ime" as const,
    type: "text",
    placeholder: "Ime",
    label: "Ime"
  },
  {
    id: 2,
    name: "prezime" as const,
    type: "text",
    placeholder: "Prezime",
    label: "Prezime"
  },
  {
    id: 3,
    name: "email" as const,
    type: "email",
    placeholder: "Email",
    label: "Email"
  },
  {
    id: 4,
    name: "telefon" as const,
    type: "tel",
    placeholder: "06X XXX XXXX",
    label: "Telefon"
  },
  {
    id: 5,
    name: "poruka" as const,
    type: "textarea",
    placeholder: "Poruka",
    label: "Poruka",
    minLength: 10,
    maxLength: 300
  }
];
