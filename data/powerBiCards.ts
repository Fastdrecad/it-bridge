import { StaticImageData } from "next/image";

import powerBiImage1 from "@/public/assets/images/courses/PowerBI-kurs-1.webp";
import powerBiImage2 from "@/public/assets/images/courses/PowerBI-kurs-2.webp";
import powerBiImage3 from "@/public/assets/images/courses/power-bi.webp";

interface MultilingualText {
  sr: string;
  en: string;
  de: string;
  fr: string;
}

export interface PowerBiCardItem {
  titleHeading: MultilingualText;
  titleSpan: MultilingualText;
  img: StaticImageData;
  description: MultilingualText;
}

export const powerBiCards: PowerBiCardItem[] = [
  {
    titleHeading: {
      sr: "upravljanje",
      en: "management",
      de: "verwaltung",
      fr: "gestion"
    },
    titleSpan: {
      sr: "Jednostavnije ",
      en: "Simpler ",
      de: "Einfachere ",
      fr: "Plus simple "
    },
    img: powerBiImage1,
    description: {
      sr: "Organizujte i analizirajte svoje podatke na intuitivan način bez komplikovanih alata. Power BI vam omogućava da brzo povežete i upravljate svim izvorima podataka na jednom mestu.",
      en: "Organize and analyze your data in an intuitive way without complicated tools. Power BI allows you to quickly connect and manage all data sources in one place.",
      de: "Organisieren und analysieren Sie Ihre Daten auf intuitive Weise ohne komplizierte Tools. Power BI ermöglicht es Ihnen, alle Datenquellen schnell zu verbinden und an einem Ort zu verwalten.",
      fr: "Organisez et analysez vos données de manière intuitive sans outils compliqués. Power BI vous permet de connecter et de gérer rapidement toutes les sources de données en un seul endroit."
    }
  },
  {
    titleHeading: {
      sr: "donošenje odluka",
      en: "decision making",
      de: "entscheidungsfindung",
      fr: "prise de décision"
    },
    titleSpan: {
      sr: "Brže ",
      en: "Faster ",
      de: "Schnellere ",
      fr: "Plus rapide "
    },
    img: powerBiImage2,
    description: {
      sr: "Donosite ključne poslovne odluke na osnovu tačnijih ažuriranih informacija. Uz Power BI, dobijate uvid u podatke u realnom vremenu što vam omogućava agilnije reakcije na tržišne promene.",
      en: "Make key business decisions based on more accurate updated information. With Power BI, you get real-time data insights that allow you to react more agilely to market changes.",
      de: "Treffen Sie wichtige Geschäftsentscheidungen auf der Grundlage genauerer aktualisierter Informationen. Mit Power BI erhalten Sie Echtzeit-Dateneinblicke, die es Ihnen ermöglichen, agiler auf Marktveränderungen zu reagieren.",
      fr: "Prenez des décisions commerciales clés basées sur des informations mises à jour plus précises. Avec Power BI, vous obtenez des informations en temps réel qui vous permettent de réagir plus rapidement aux changements du marché."
    }
  },
  {
    titleHeading: {
      sr: "analiza poslovanja",
      en: "business analysis",
      de: "geschäftsanalyse",
      fr: "analyse commerciale"
    },
    titleSpan: {
      sr: "Lakša ",
      en: "Easier ",
      de: "Einfachere ",
      fr: "Plus facile "
    },
    img: powerBiImage3,
    description: {
      sr: "Organizujte i analizirajte svoje podatke na intuitivan način bez komplikovanih alata. Power BI vam omogućava da brzo povežete i upravljate svim izvorima podataka na jednom mestu.",
      en: "Organize and analyze your data in an intuitive way without complicated tools. Power BI allows you to quickly connect and manage all data sources in one place.",
      de: "Organisieren und analysieren Sie Ihre Daten auf intuitive Weise ohne komplizierte Tools. Power BI ermöglicht es Ihnen, alle Datenquellen schnell zu verbinden und an einem Ort zu verwalten.",
      fr: "Organisez et analysez vos données de manière intuitive sans outils compliqués. Power BI vous permet de connecter et de gérer rapidement toutes les sources de données en un seul endroit."
    }
  }
];
