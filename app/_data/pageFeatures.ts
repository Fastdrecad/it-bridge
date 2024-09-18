interface Section {
  title: string;
  description: string;
}

interface PageFeature {
  sections: Section[];
  flags?: string[];
}

export const pageFeatures: Record<string, PageFeature> = {
  hrStarter: {
    sections: [
      {
        title: "Dvostruka ekspertiza",
        description:
          "Naši mentori su iskusni HR regruteri i biznis partneri koji pružaju neophodnu podršku tokom 6 nedelja. Kroz praktične primere i realne situacije iz poslovnog okruženja, osposobićete se za efikasno upravljanje ljudskim resursima, omogućavajući brži prelazak u novu karijeru."
      },
      {
        title: "Interaktivni pristup",
        description:
          "Intenzivna interakcija sa mentorima i praktičan rad kroz vežbe i zadatke, koji vam pomažu da primenite stečeno znanje u stvarnim situacijama."
      },
      {
        title: "Podrška & sertifikat",
        description:
          "Završite kurs sa konkretnim primenljivim znanjem, podrškom u pripremi za zaokret u karijeri i sertifikatom koji je dokaz vašeg truda i rada."
      }
    ]
    // No flags for hrStarter
  },
  pcm: {
    sections: [
      {
        title: "Unapređenje komunikacije",
        description:
          "Trening PCM (Process Communication Model) pruža vašem timu moćne alate za poboljšanje komunikacije, rešavanje konflikata i povećanje efikasnosti u radu."
      },
      {
        title: "Naučno zasnovan pristup",
        description:
          "Ovaj model je zasnovan na naučnim istraživanjima i praktičnim iskustvima, nudeći jedinstven pristup za razumevanje različitih komunikacionih stilova i motivacija."
      },
      {
        title: "Povećanje efikasnosti",
        description:
          "Kroz primenu PCM-a, vaš tim će naučiti kako da se bolje prilagodi različitim stilovima komunikacije, što direktno povećava efikasnost i produktivnost."
      },
      {
        title: "Praktična primena",
        description:
          "Kurs uključuje interaktivne vežbe i studije slučaja koje omogućavaju polaznicima da primene PCM u realnim situacijama, poboljšavajući njihove veštine rešavanja konflikata i komunikacije."
      },
      {
        title: "Kontinuirana podrška",
        description:
          "Posvećeni smo vašem uspehu, pružajući podršku tokom obuke i pomoć u implementaciji PCM principa u radnu sredinu, kako biste postigli trajne rezultate i poboljšali međuljudske odnose unutar tima."
      }
    ]
    // No flags for pcm
  },
  businessEnglish: {
    sections: [
      {
        title: "Ekspertiza i iskustvo",
        description:
          "Naši profesori su stručnjaci sa bogatim iskustvom u radu sa korporativnim klijentima, pružajući vam visokokvalitetnu obuku koja se temelji na stvarnim poslovnim situacijama."
      },
      {
        title: "Fleksibilnost",
        description:
          "Nudimo časove prilagođene vašem rasporedu, omogućavajući vam učenje bez ometanja svakodnevnih poslovnih aktivnosti, čime osiguravamo da se obuka uklopi u vaš radni dan."
      },
      {
        title: "Rezultati",
        description:
          "Posvećeni smo vašem uspehu i redovno pratimo napredak vašeg tima. Pružamo kontinuiranu podršku i jednom mesečno izdajemo relacione izveštaje o napretku svakog polaznika, kako biste u svakom trenutku imali uvid u njihov razvoj i postignuća."
      }
    ],
    flags: [
      "/assets/images/flags/gb.jpg",
      "/assets/images/flags/de.jpg",
      "/assets/images/flags/fr.jpg"
    ]
  },
  powerBI: {
    sections: [
      {
        title: "Integracija podataka",
        description:
          "Spojite podatke iz različitih izvora (SQL, SAP, Excel) u jedinstvene i pregledne izveštaje."
      },
      {
        title: "Aktualni izveštaji u oblaku",
        description:
          "Pristupite podacima u realnom vremenu i istražujte ih po različitim kriterijumima."
      },
      {
        title: "Ušteda vremena",
        description: "Smanjite vreme izrade izveštaja za čak 90%."
      },
      {
        title: "Neprekidan pristup",
        description: "Analizirajte podatke 24/7 s bilo kog uređaja."
      },
      {
        title: "Napredna analitika",
        description:
          "Donosite bolje odluke uz pomoć sofisticiranih analitičkih alata u realnom vremenu."
      }
    ]
    // No flags for powerBI
  },
  softSkills: {
    sections: [
      {
        title: "Efikasna komunikacija",
        description:
          "Naš program omogućava vašem timu da efikasnije komunicira, rešava probleme i vodi, što direktno utiče na produktivnost i uspeh organizacije."
      },
      {
        title: "Transformativna moć",
        description:
          "Verujemo u transformativnu moć mekih veština i posvećeni smo njihovom razvoju kod vaših zaposlenih kako bi vaša kompanija ostvarila dugoročne rezultate."
      },
      {
        title: "Strukturirani treninzi",
        description:
          "Treninzi se sastoje od 4 modula, svaki koji kombinuje teorijsko predavanje sa interaktivnim vežbama, studijama slučaja, diskusijama i feedback sesijama. Ovaj pristup omogućava polaznicima da steknu praktično iskustvo i primene naučene veštine u stvarnim situacijama."
      },
      {
        title: "Praktična primena",
        description:
          "Naši kursevi su dizajnirani da obezbede konkretne rezultate i primenljive veštine koje mogu direktno poboljšati performanse vašeg tima i doprineti uspehu vaše organizacije."
      }
    ]
    // No flags for softSkills
  },
  softwareTesting: {
    sections: [
      {
        title: "Kompletan transfer znanja",
        description:
          "Oko testiranja i kvaliteta nema kompromisa, a naše obuke pružaju kompletan transfer znanja koji omogućava brzu prekvalifikaciju u IT sektor. Naši polaznici će biti spremni za ozbiljan, zahtevan i dobro plaćen posao."
      },
      {
        title: "Efikasno učenje sa mentorom",
        description:
          "Kurs se odvija online uz direktnu interakciju sa mentorom. Učenje na svojim i tuđim greškama omogućava brže usvajanje znanja i odmah primenljive veštine."
      },
      {
        title: "Sveobuhvatan program",
        description:
          "Kurs uključuje sveobuhvatan i koncizan nastavni plan i program koji se sprovodi do kraja kursa, obuhvatajući sve aspekte automatskog testiranja softvera."
      },
      {
        title: "Praktična primena",
        description:
          "Kurs nudi intenzivan praktičan rad kroz vežbe i zadatke, uključujući pripremu za završni ispit i simulaciju ispita. Praktičan rad omogućava polaznicima da usvoje i primene naučeno znanje u stvarnim situacijama."
      },
      {
        title: "Podrška i sertifikacija",
        description:
          "Uključuje podršku posvećenog mentora tokom trajanja kursa, kao i lekcije u online formatu. Po završetku kursa, polaznici dobijaju sertifikat i pomoć u pripremi CV-ja, portfolia i intervjua sa našim HR timom."
      }
    ]
    // No flags for softwareTesting
  }
};
