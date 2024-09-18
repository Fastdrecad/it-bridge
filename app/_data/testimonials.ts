export interface Testimonial {
  id: number;
  name: string;
  title: string;
  position: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Radoslav Karajović",
    title: "Business English",
    position: "Head of Plant CBS at Continental",
    review:
      "Iskazali smo potrebu da usavršimo prezentovanje na engleskom jeziku pred najvišim strukturama korporacije… Posvećenost u pružanju vrhunske usluge i sposobnost da brzo odgovore na naše zahteve, čine ovog partnera neprocenjivim."
  },
  {
    id: 2,
    name: "Marko Nikolić",
    title: "Business English",
    position: "CEO at NEIMAR D.O.O.",
    review:
      "Nastava je bila detaljno prilagođena mojim specifičnim potrebama i zahtevima industrije u kojoj radim. Časovi su bili izuzetno zanimljivi i interaktivni. Posebno bih istakao rad na stvarnim poslovnim situacijama i dokumentima što je učinilo proces učenja vrlo praktičnim i korisnim."
  },
  {
    id: 3,
    name: "Anđela Stojanović",
    title: "HR Starter",
    position: "HR Recruiter",
    review:
      "Kurs, više od kursa zapravo. Pružio mi je dragocena praktična znanja i unapredio veštine što je rezultiralo promenom pozicije tokom kursa. Od logistike do HR-a. Moguće je! Prezadovoljna sam mentorkama i kompletnom organizacijom. Preporučujem svima koji žele da se bave HR-om. "
  },
  {
    id: 4,
    name: "Ana Kuzmanović",
    title: "HR Starter",
    position: "HR & Payroll Associate",
    review:
      "Zahvalna sam na svim podeljenim iskustvima i podršci tokom ovog kursa. Bilo je pravo zadovoljstvo sarađivati sa vama. Uverena sam da će ovaj kurs inspirisati mnoge i omogućiti im da naprave značajan zaokret u svojoj karijeri.  "
  }
];
