export const newsletterInputs = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "Ime",
    label: "Ime",
    errorMessage: "Ime mora imati najmanje 2 karaktera",
    minLength: 2
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Prezime",
    label: "Prezime",
    errorMessage: "Prezime mora imati najmanje 2 karaktera",
    minLength: 2
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    errorMessage: "Unesite validnu email adresu",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
  }
];
