import {
  EarthIcon,
  FlowerIcon,
  HandshakeIcon,
  HeartIcon,
  StarIcon
} from "@/components/icons";
import uob from "@/public/assets/images/crest/uob-crest.webp";
import uons from "@/public/assets/images/crest/uons-crest.webp";
import starsArrow from "@/public/assets/images/values/stars-arrow.png";

export const valuesContent = [
  {
    title: "MENTORSTVO",
    description:
      " Nudimo posvećeno mentorstvo uz naš tim sastavljen od stručnjaka, profesora, psihologa i inženjera sa više od 10 godina iskustva u obrazovnom sektoru i IT industriji kao i vođenje kako bi svaki polaznik ostvario svoje potencijale i ciljeve.",
    uoIcons: [uob, uons]
  },
  {
    title: "VIZIJA",
    description: "Znanje koje transformiše, edukacija koja inspiriše.",
    uoIcons: [starsArrow]
  },
  {
    title: "MISIJA",
    description:
      "Naša misija je da postanemo servant leader No1 u pružanju tailor-made edukacija najvišeg kvaliteta koje osnažuju pojedince i kompanije da ostvare svoj puni potencijal, prilagođavajući se potrebama savremenog poslovnog sveta. Dozvolite nam da vas inspirišemo i osnažimo da prevaziđete granice jer vaš uspeh je naša strast i predanost dok gradimo pouzdano partnerstvo radi zajedničkog napretka."
  },
  {
    title: "VREDNOSTI",
    description: "Naše vrednosti definišu našu kulturu i način poslovanja."
  }
];

export const valuesCard = [
  {
    title: "Poštovanje",
    description:
      "Poštovanje pojedinca je temelj našeg tima jer verujemo da svaki član doprinosi jedinstvenim perspektivama i idejama.",
    icon: HandshakeIcon
  },
  {
    title: "Odgovornost",
    description:
      "Odgovornost je naša obaveza prema klijentima i zajednici koja nas motiviše da donosimo odluke sa integritetom i posvećenošću.",
    icon: EarthIcon
  },
  {
    title: "Integritet",
    description:
      "Integritet je osnova našeg poslovanja jer se držimo najviših standarda etike i poštenja u svim našim aktivnostima.",
    icon: FlowerIcon
  },
  {
    title: "Autentičnost",
    description:
      "Naš odnos prema klijentima je poverljiv i autentičan, pa se trudimo da razumemo njihove potrebe i ciljeve na istinski način.",
    icon: StarIcon
  },
  {
    title: "Posvećenost i strast",
    description:
      "Posvećenost i strast su pokretači našeg uspeha jer radimo sa entuzijazmom i predanošću, kako bismo postigli izvanredne rezultate.",
    icon: HeartIcon
  }
];
