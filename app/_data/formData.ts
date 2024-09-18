import { type } from "os";

// Input fields configuration for form
export const inputs = [
  {
    id: 1,
    name: "ime",
    type: "text",
    placeholder: "Ime",
    errorMessage: "Ime mora imati 3 do 15 karaktera i bez specijalnih znakova.",
    label: "Ime",
    pattern: "^[A-Za-z]{3,15}$",
    required: true
  },
  {
    id: 2,
    name: "prezime",
    type: "text",
    placeholder: "Prezime",
    errorMessage:
      "Prezime mora imati minimun 3 slova i bez specijalnih znakova.",
    label: "Prezime",
    pattern: "^[A-Za-z]{3,15}$",
    required: true
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage:
      "Email je neispravan. Unesite validan email sa znakom '@' i domenom.",
    label: "Email",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    required: true
  },
  {
    id: 4,
    name: "telefon",
    type: "tel",
    placeholder: "06X XXX XXXX",
    errorMessage: "Telefon mora imati 9 do 10 brojeva.",
    label: "Telefon",
    pattern: "^[0-9]{9,10}$",
    required: true
  },
  {
    id: 5,
    name: "poruka",
    type: "textarea",
    placeholder: "Poruka",
    errorMessage: "Poruka mora biti između 10 i 300 karaktera.",
    label: "Poruka",
    minLength: 10,
    maxLength: 300,
    required: true
  }
];
