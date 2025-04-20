import { MultilingualText } from "./heroSection";

interface Section {
  title: string | MultilingualText;
  description: string | MultilingualText;
  translationKey?: {
    title: string;
    description: string;
  };
}

interface PageFeature {
  sections: Section[];
  flags?: string[];
  translationKey?: string;
}

export const courseFeatures: Record<string, PageFeature> = {
  hrStarter: {
    sections: [
      {
        title: {
          sr: "Dvostruka ekspertiza",
          en: "Dual Expertise",
          de: "Doppelte Expertise",
          fr: "Double expertise"
        },
        description: {
          sr: "Naši mentori su iskusni HR regruteri i biznis partneri koji pružaju neophodnu podršku tokom 6 nedelja. Kroz praktične primere i realne situacije iz poslovnog okruženja, osposobićete se za efikasno upravljanje ljudskim resursima, omogućavajući brži prelazak u novu karijeru.",
          en: "Our mentors are experienced HR recruiters and business partners who provide essential support over 6 weeks. Through practical examples and real business situations, you'll be trained in effective human resource management, enabling a faster transition to a new career.",
          de: "Unsere Mentoren sind erfahrene HR-Recruiter und Geschäftspartner, die über 6 Wochen die notwendige Unterstützung bieten. Durch praktische Beispiele und reale Situationen aus dem Geschäftsumfeld werden Sie für ein effektives Personalmanagement ausgebildet, das einen schnelleren Übergang in eine neue Karriere ermöglicht.",
          fr: "Nos mentors sont des recruteurs RH expérimentés et des partenaires commerciaux qui fournissent un soutien essentiel pendant 6 semaines. Grâce à des exemples pratiques et des situations commerciales réelles, vous serez formé à la gestion efficace des ressources humaines, permettant une transition plus rapide vers une nouvelle carrière."
        }
      },
      {
        title: {
          sr: "Interaktivni pristup",
          en: "Interactive Approach",
          de: "Interaktiver Ansatz",
          fr: "Approche interactive"
        },
        description: {
          sr: "Intenzivna interakcija sa mentorima i praktičan rad kroz vežbe i zadatke, koji vam pomažu da primenite stečeno znanje u stvarnim situacijama.",
          en: "Intensive interaction with mentors and practical work through exercises and tasks that help you apply acquired knowledge in real situations.",
          de: "Intensive Interaktion mit Mentoren und praktische Arbeit durch Übungen und Aufgaben, die Ihnen helfen, das erworbene Wissen in realen Situationen anzuwenden.",
          fr: "Interaction intensive avec les mentors et travail pratique à travers des exercices et des tâches qui vous aident à appliquer les connaissances acquises dans des situations réelles."
        }
      },
      {
        title: {
          sr: "Podrška & sertifikat",
          en: "Support & Certificate",
          de: "Unterstützung & Zertifikat",
          fr: "Soutien et certificat"
        },
        description: {
          sr: "Završite kurs sa konkretnim primenljivim znanjem, podrškom u pripremi za zaokret u karijeri i sertifikatom koji je dokaz vašeg truda i rada.",
          en: "Complete the course with concrete applicable knowledge, support in preparing for a career change, and a certificate that proves your effort and work.",
          de: "Schließen Sie den Kurs mit konkretem anwendbarem Wissen ab, mit Unterstützung bei der Vorbereitung auf einen Karrierewechsel und einem Zertifikat, das Ihre Mühe und Arbeit beweist.",
          fr: "Terminez le cours avec des connaissances concrètes applicables, un soutien dans la préparation d'un changement de carrière et un certificat qui prouve votre effort et votre travail."
        }
      }
    ]
    // No flags for hrStarter
  },
  pcm: {
    sections: [
      {
        title: {
          sr: "Unapređenje komunikacije",
          en: "Enhanced Communication",
          de: "Verbesserte Kommunikation",
          fr: "Communication améliorée"
        },
        description: {
          sr: "Trening PCM (Process Communication Model) pruža vašem timu moćne alate za poboljšanje komunikacije, rešavanje konflikata i povećanje efikasnosti u radu.",
          en: "PCM (Process Communication Model) training provides your team with powerful tools to improve communication, resolve conflicts, and increase efficiency in work.",
          de: "Das PCM-Training (Process Communication Model) bietet Ihrem Team leistungsstarke Tools zur Verbesserung der Kommunikation, zur Lösung von Konflikten und zur Steigerung der Effizienz bei der Arbeit.",
          fr: "La formation PCM (Process Communication Model) fournit à votre équipe des outils puissants pour améliorer la communication, résoudre les conflits et augmenter l'efficacité au travail."
        }
      },
      {
        title: {
          sr: "Naučno zasnovan pristup",
          en: "Science-Based Approach",
          de: "Wissenschaftsbasierter Ansatz",
          fr: "Approche scientifique"
        },
        description: {
          sr: "Ovaj model je zasnovan na naučnim istraživanjima i praktičnim iskustvima, nudeći jedinstven pristup za razumevanje različitih komunikacionih stilova i motivacija.",
          en: "This model is based on scientific research and practical experience, offering a unique approach to understanding different communication styles and motivations.",
          de: "Dieses Modell basiert auf wissenschaftlicher Forschung und praktischer Erfahrung und bietet einen einzigartigen Ansatz zum Verständnis verschiedener Kommunikationsstile und Motivationen.",
          fr: "Ce modèle est basé sur la recherche scientifique et l'expérience pratique, offrant une approche unique pour comprendre les différents styles de communication et motivations."
        }
      },
      {
        title: {
          sr: "Povećanje efikasnosti",
          en: "Increased Efficiency",
          de: "Erhöhte Effizienz",
          fr: "Efficacité accrue"
        },
        description: {
          sr: "Kroz primenu PCM-a, vaš tim će naučiti kako da se bolje prilagodi različitim stilovima komunikacije, što direktno povećava efikasnost i produktivnost.",
          en: "Through the application of PCM, your team will learn how to better adapt to different communication styles, which directly increases efficiency and productivity.",
          de: "Durch die Anwendung von PCM lernt Ihr Team, sich besser an verschiedene Kommunikationsstile anzupassen, was die Effizienz und Produktivität direkt steigert.",
          fr: "Grâce à l'application du PCM, votre équipe apprendra à mieux s'adapter aux différents styles de communication, ce qui augmente directement l'efficacité et la productivité."
        }
      },
      {
        title: {
          sr: "Praktična primena",
          en: "Practical Application",
          de: "Praktische Anwendung",
          fr: "Application pratique"
        },
        description: {
          sr: "Kurs uključuje interaktivne vežbe i studije slučaja koje omogućavaju polaznicima da primene PCM u realnim situacijama, poboljšavajući njihove veštine rešavanja konflikata i komunikacije.",
          en: "The course includes interactive exercises and case studies that allow participants to apply PCM in real situations, improving their conflict resolution and communication skills.",
          de: "Der Kurs umfasst interaktive Übungen und Fallstudien, die es den Teilnehmern ermöglichen, PCM in realen Situationen anzuwenden und ihre Konfliktlösungs- und Kommunikationsfähigkeiten zu verbessern.",
          fr: "Le cours comprend des exercices interactifs et des études de cas qui permettent aux participants d'appliquer le PCM dans des situations réelles, améliorant leurs compétences en résolution de conflits et en communication."
        }
      },
      {
        title: {
          sr: "Kontinuirana podrška",
          en: "Continuous Support",
          de: "Kontinuierliche Unterstützung",
          fr: "Soutien continu"
        },
        description: {
          sr: "Posvećeni smo vašem uspehu, pružajući podršku tokom obuke i pomoć u implementaciji PCM principa u radnu sredinu, kako biste postigli trajne rezultate i poboljšali međuljudske odnose unutar tima.",
          en: "We are dedicated to your success, providing support during training and assistance in implementing PCM principles in the work environment, so you can achieve lasting results and improve interpersonal relationships within the team.",
          de: "Wir sind Ihrem Erfolg verpflichtet und bieten Unterstützung während des Trainings und Hilfe bei der Implementierung von PCM-Prinzipien in der Arbeitsumgebung, damit Sie dauerhafte Ergebnisse erzielen und die zwischenmenschlichen Beziehungen innerhalb des Teams verbessern können.",
          fr: "Nous sommes dédiés à votre succès, fournissant un soutien pendant la formation et une assistance dans la mise en œuvre des principes PCM dans l'environnement de travail, afin que vous puissiez obtenir des résultats durables et améliorer les relations interpersonnelles au sein de l'équipe."
        }
      }
    ]
    // No flags for pcm
  },
  businessEnglish: {
    sections: [
      {
        title: {
          sr: "Ekspertiza i iskustvo",
          en: "Expertise and Experience",
          de: "Expertise und Erfahrung",
          fr: "Expertise et expérience"
        },
        description: {
          sr: "Naši profesori su stručnjaci sa bogatim iskustvom u radu sa korporativnim klijentima, pružajući vam visokokvalitetnu obuku koja se temelji na stvarnim poslovnim situacijama.",
          en: "Our professors are experts with extensive experience working with corporate clients, providing you with high-quality training based on real business situations.",
          de: "Unsere Professoren sind Experten mit umfangreicher Erfahrung in der Zusammenarbeit mit Unternehmenskunden und bieten Ihnen qualitativ hochwertige Schulungen auf der Grundlage realer Geschäftssituationen.",
          fr: "Nos professeurs sont des experts avec une vaste expérience de travail avec des clients corporatifs, vous fournissant une formation de haute qualité basée sur des situations commerciales réelles."
        }
      },
      {
        title: {
          sr: "Fleksibilnost",
          en: "Flexibility",
          de: "Flexibilität",
          fr: "Flexibilité"
        },
        description: {
          sr: "Nudimo časove prilagođene vašem rasporedu, omogućavajući vam učenje bez ometanja svakodnevnih poslovnih aktivnosti, čime osiguravamo da se obuka uklopi u vaš radni dan.",
          en: "We offer classes tailored to your schedule, allowing you to learn without disrupting daily business activities, ensuring that the training fits into your workday.",
          de: "Wir bieten Kurse, die auf Ihren Zeitplan zugeschnitten sind, sodass Sie lernen können, ohne die täglichen Geschäftsaktivitäten zu stören, und stellen sicher, dass die Schulung in Ihren Arbeitstag passt.",
          fr: "Nous proposons des cours adaptés à votre emploi du temps, vous permettant d'apprendre sans perturber les activités commerciales quotidiennes, en veillant à ce que la formation s'intègre dans votre journée de travail."
        }
      },
      {
        title: {
          sr: "Rezultati",
          en: "Results",
          de: "Ergebnisse",
          fr: "Résultats"
        },
        description: {
          sr: "Posvećeni smo vašem uspehu i redovno pratimo napredak vašeg tima. Pružamo kontinuiranu podršku i jednom mesečno izdajemo relacione izveštaje o napretku svakog polaznika, kako biste u svakom trenutku imali uvid u njihov razvoj i postignuća.",
          en: "We are committed to your success and regularly monitor the progress of your team. We provide continuous support and issue monthly progress reports for each participant, so you can have insight into their development and achievements at any time.",
          de: "Wir setzen uns für Ihren Erfolg ein und überwachen regelmäßig die Fortschritte Ihres Teams. Wir bieten kontinuierliche Unterstützung und erstellen monatliche Fortschrittsberichte für jeden Teilnehmer, damit Sie jederzeit Einblick in deren Entwicklung und Erfolge haben.",
          fr: "Nous nous engageons pour votre succès et surveillons régulièrement les progrès de votre équipe. Nous fournissons un soutien continu et émettons des rapports d'avancement mensuels pour chaque participant, afin que vous puissiez avoir un aperçu de leur développement et de leurs réalisations à tout moment."
        }
      }
    ],
    flags: [
      "/assets/images/flags/gb.jpg",
      "/assets/images/flags/de.jpg",
      "/assets/images/flags/fr.jpg"
    ]
  },
  powerBi: {
    sections: [
      {
        title: {
          sr: "Integracija podataka",
          en: "Data Integration",
          de: "Datenintegration",
          fr: "Intégration de données"
        },
        description: {
          sr: "Spojite podatke iz različitih izvora (SQL, SAP, Excel) u jedinstvene i pregledne izveštaje.",
          en: "Combine data from different sources (SQL, SAP, Excel) into unified and clear reports.",
          de: "Kombinieren Sie Daten aus verschiedenen Quellen (SQL, SAP, Excel) zu einheitlichen und übersichtlichen Berichten.",
          fr: "Combinez des données de différentes sources (SQL, SAP, Excel) dans des rapports unifiés et clairs."
        }
      },
      {
        title: {
          sr: "Aktualni izveštaji u oblaku",
          en: "Real-time Cloud Reports",
          de: "Echtzeit-Cloud-Berichte",
          fr: "Rapports cloud en temps réel"
        },
        description: {
          sr: "Pristupite podacima u realnom vremenu i istražujte ih po različitim kriterijumima.",
          en: "Access data in real-time and explore it by various criteria.",
          de: "Greifen Sie in Echtzeit auf Daten zu und untersuchen Sie sie nach verschiedenen Kriterien.",
          fr: "Accédez aux données en temps réel et explorez-les selon différents critères."
        }
      },
      {
        title: {
          sr: "Ušteda vremena",
          en: "Time Saving",
          de: "Zeitersparnis",
          fr: "Gain de temps"
        },
        description: {
          sr: "Smanjite vreme izrade izveštaja za čak 90%.",
          en: "Reduce report creation time by up to 90%.",
          de: "Reduzieren Sie die Berichtserstellungszeit um bis zu 90%.",
          fr: "Réduisez le temps de création de rapports jusqu'à 90%."
        }
      },
      {
        title: {
          sr: "Neprekidan pristup",
          en: "Continuous Access",
          de: "Kontinuierlicher Zugriff",
          fr: "Accès continu"
        },
        description: {
          sr: "Analizirajte podatke 24/7 s bilo kog uređaja.",
          en: "Analyze data 24/7 from any device.",
          de: "Analysieren Sie Daten rund um die Uhr von jedem Gerät aus.",
          fr: "Analysez les données 24h/24 et 7j/7 depuis n'importe quel appareil."
        }
      },
      {
        title: {
          sr: "Napredna analitika",
          en: "Advanced Analytics",
          de: "Fortschrittliche Analytik",
          fr: "Analytique avancée"
        },
        description: {
          sr: "Donosite bolje odluke uz pomoć sofisticiranih analitičkih alata u realnom vremenu.",
          en: "Make better decisions with the help of sophisticated real-time analytical tools.",
          de: "Treffen Sie bessere Entscheidungen mit Hilfe ausgeklügelter Echtzeit-Analysetools.",
          fr: "Prenez de meilleures décisions à l'aide d'outils d'analyse sophistiqués en temps réel."
        }
      }
    ]
    // No flags for powerBI
  },
  softSkills: {
    sections: [
      {
        title: {
          sr: "Efikasna komunikacija",
          en: "Effective Communication",
          de: "Effektive Kommunikation",
          fr: "Communication efficace"
        },
        description: {
          sr: "Naš program omogućava vašem timu da efikasnije komunicira, rešava probleme i vodi, što direktno utiče na produktivnost i uspeh organizacije.",
          en: "Our program enables your team to communicate more efficiently, solve problems, and lead, which directly impacts the productivity and success of the organization.",
          de: "Unser Programm ermöglicht es Ihrem Team, effizienter zu kommunizieren, Probleme zu lösen und zu führen, was sich direkt auf die Produktivität und den Erfolg der Organisation auswirkt.",
          fr: "Notre programme permet à votre équipe de communiquer plus efficacement, de résoudre des problèmes et de diriger, ce qui impacte directement la productivité et le succès de l'organisation."
        }
      },
      {
        title: {
          sr: "Transformativna moć",
          en: "Transformative Power",
          de: "Transformative Kraft",
          fr: "Pouvoir transformateur"
        },
        description: {
          sr: "Verujemo u transformativnu moć mekih veština i posvećeni smo njihovom razvoju kod vaših zaposlenih kako bi vaša kompanija ostvarila dugoročne rezultate.",
          en: "We believe in the transformative power of soft skills and are committed to developing them in your employees so that your company can achieve long-term results.",
          de: "Wir glauben an die transformative Kraft von Soft Skills und setzen uns dafür ein, sie bei Ihren Mitarbeitern zu entwickeln, damit Ihr Unternehmen langfristige Ergebnisse erzielen kann.",
          fr: "Nous croyons au pouvoir transformateur des soft skills et nous nous engageons à les développer chez vos employés afin que votre entreprise puisse obtenir des résultats à long terme."
        }
      },
      {
        title: {
          sr: "Strukturirani treninzi",
          en: "Structured Training",
          de: "Strukturierte Schulungen",
          fr: "Formation structurée"
        },
        description: {
          sr: "Treninzi se sastoje od 4 modula, svaki koji kombinuje teorijsko predavanje sa interaktivnim vežbama, studijama slučaja, diskusijama i feedback sesijama. Ovaj pristup omogućava polaznicima da steknu praktično iskustvo i primene naučene veštine u stvarnim situacijama.",
          en: "The training consists of 4 modules, each combining theoretical lectures with interactive exercises, case studies, discussions, and feedback sessions. This approach allows participants to gain practical experience and apply learned skills in real situations.",
          de: "Die Schulung besteht aus 4 Modulen, die jeweils theoretische Vorträge mit interaktiven Übungen, Fallstudien, Diskussionen und Feedback-Sitzungen kombinieren. Dieser Ansatz ermöglicht es den Teilnehmern, praktische Erfahrungen zu sammeln und erlernte Fähigkeiten in realen Situationen anzuwenden.",
          fr: "La formation se compose de 4 modules, chacun combinant des conférences théoriques avec des exercices interactifs, des études de cas, des discussions et des sessions de feedback. Cette approche permet aux participants d'acquérir une expérience pratique et d'appliquer les compétences apprises dans des situations réelles."
        }
      },
      {
        title: {
          sr: "Praktična primena",
          en: "Practical Application",
          de: "Praktische Anwendung",
          fr: "Application pratique"
        },
        description: {
          sr: "Naši kursevi su dizajnirani da obezbede konkretne rezultate i primenljive veštine koje mogu direktno poboljšati performanse vašeg tima i doprineti uspehu vaše organizacije.",
          en: "Our courses are designed to provide concrete results and applicable skills that can directly improve your team's performance and contribute to the success of your organization.",
          de: "Unsere Kurse sind darauf ausgelegt, konkrete Ergebnisse und anwendbare Fähigkeiten zu vermitteln, die die Leistung Ihres Teams direkt verbessern und zum Erfolg Ihrer Organisation beitragen können.",
          fr: "Nos cours sont conçus pour fournir des résultats concrets et des compétences applicables qui peuvent directement améliorer les performances de votre équipe et contribuer au succès de votre organisation."
        }
      }
    ]
    // No flags for softSkills
  },
  excel: {
    sections: [
      {
        title: {
          sr: "Praktične veštine za svaku profesiju",
          en: "Practical Skills for Every Profession",
          de: "Praktische Fähigkeiten für jeden Beruf",
          fr: "Compétences pratiques pour chaque profession"
        },
        description: {
          sr: "Excel je neophodan alat u gotovo svim profesijama. Naš kurs vam pruža konkretne veštine za organizaciju podataka, analizu i vizualizaciju koja će vam dati prednost u svakom okruženju.",
          en: "Excel is an essential tool in almost all professions. Our course provides you with specific skills for data organization, analysis, and visualization that will give you an advantage in any environment.",
          de: "Excel ist ein unverzichtbares Tool in fast allen Berufen. Unser Kurs vermittelt Ihnen spezifische Fähigkeiten zur Datenorganisation, -analyse und -visualisierung, die Ihnen in jeder Umgebung einen Vorteil verschaffen.",
          fr: "Excel est un outil essentiel dans presque toutes les professions. Notre cours vous fournit des compétences spécifiques pour l'organisation, l'analyse et la visualisation des données qui vous donneront un avantage dans n'importe quel environnement."
        }
      },
      {
        title: {
          sr: "Prilagođen sadržaj",
          en: "Customized Content",
          de: "Angepasster Inhalt",
          fr: "Contenu personnalisé"
        },
        description: {
          sr: "Kurs pokriva osnove i napredne funkcionalnosti Excel-a, uključujući rad sa formulama, analizom podataka, pivot tabelama, grafikama i makroima, sa konkretnim primerima i vežbama iz realnog života.",
          en: "The course covers basic and advanced Excel functionalities, including working with formulas, data analysis, pivot tables, charts, and macros, with concrete examples and exercises from real life.",
          de: "Der Kurs behandelt grundlegende und fortgeschrittene Excel-Funktionalitäten, einschließlich der Arbeit mit Formeln, Datenanalyse, Pivot-Tabellen, Diagrammen und Makros, mit konkreten Beispielen und Übungen aus dem realen Leben.",
          fr: "Le cours couvre les fonctionnalités de base et avancées d'Excel, notamment le travail avec des formules, l'analyse de données, les tableaux croisés dynamiques, les graphiques et les macros, avec des exemples concrets et des exercices tirés de la vie réelle."
        }
      },
      {
        title: {
          sr: "Interaktivni pristup",
          en: "Interactive Approach",
          de: "Interaktiver Ansatz",
          fr: "Approche interactive"
        },
        description: {
          sr: "Učenje kroz praksu je naš princip. Radićete na konkretnim zadacima i projektima, što vam omogućava da odmah vidite kako nove veštine funkcionišu u stvarnom svetu.",
          en: "Learning through practice is our principle. You will work on specific tasks and projects, allowing you to immediately see how new skills work in the real world.",
          de: "Lernen durch Praxis ist unser Prinzip. Sie werden an konkreten Aufgaben und Projekten arbeiten, sodass Sie sofort sehen können, wie neue Fähigkeiten in der realen Welt funktionieren.",
          fr: "L'apprentissage par la pratique est notre principe. Vous travaillerez sur des tâches et des projets spécifiques, vous permettant de voir immédiatement comment les nouvelles compétences fonctionnent dans le monde réel."
        }
      },
      {
        title: {
          sr: "Personalizovana podrška",
          en: "Personalized Support",
          de: "Personalisierte Unterstützung",
          fr: "Soutien personnalisé"
        },
        description: {
          sr: "Naši instruktori pružaju individualnu podršku i pažnju. Pitajte, eksperimentišite i istražujte uz stručnog vodiča koji će vam pomoći da prevaziđete sve izazove.",
          en: "Our instructors provide individual support and attention. Ask, experiment, and explore with an expert guide who will help you overcome all challenges.",
          de: "Unsere Ausbilder bieten individuelle Unterstützung und Aufmerksamkeit. Fragen Sie, experimentieren Sie und erkunden Sie mit einem Experten, der Ihnen hilft, alle Herausforderungen zu meistern.",
          fr: "Nos instructeurs fournissent un soutien et une attention individuels. Demandez, expérimentez et explorez avec un guide expert qui vous aidera à surmonter tous les défis."
        }
      }
    ]
  },
  softwareTesting: {
    sections: [
      {
        title: {
          sr: "Struktura i organizacija kursa",
          en: "Course Structure and Organization",
          de: "Kursstruktur und Organisation",
          fr: "Structure et organisation du cours"
        },
        description: {
          sr: "Format: Kurs se izvodi online (putem MS Teams-a, Google Meet-a i drugih platformi).",
          en: "Format: The course is conducted online (via MS Teams, Google Meet, and other platforms).",
          de: "Format: Der Kurs wird online durchgeführt (über MS Teams, Google Meet und andere Plattformen).",
          fr: "Format: Le cours est dispensé en ligne (via MS Teams, Google Meet et autres plateformes)."
        }
      },
      {
        title: {
          sr: "Efikasno učenje sa mentorom",
          en: "Efficient Learning with a Mentor",
          de: "Effizientes Lernen mit einem Mentor",
          fr: "Apprentissage efficace avec un mentor"
        },
        description: {
          sr: "Kurs se odvija online uz direktnu interakciju sa mentorom. Učenje na svojim i tuđim greškama omogućava brže usvajanje znanja i odmah primenljive veštine.",
          en: "The course takes place online with direct interaction with a mentor. Learning from your own and others' mistakes allows for faster knowledge acquisition and immediately applicable skills.",
          de: "Der Kurs findet online mit direkter Interaktion mit einem Mentor statt. Das Lernen aus eigenen und fremden Fehlern ermöglicht einen schnelleren Wissenserwerb und sofort anwendbare Fähigkeiten.",
          fr: "Le cours se déroule en ligne avec une interaction directe avec un mentor. Apprendre de vos propres erreurs et de celles des autres permet une acquisition plus rapide des connaissances et des compétences immédiatement applicables."
        }
      },
      {
        title: {
          sr: "Prilagođen sadržaj",
          en: "Customized Content",
          de: "Angepasster Inhalt",
          fr: "Contenu personnalisé"
        },
        description: {
          sr: "Kurs pokriva osnove i napredne funkcionalnosti Excel-a, uključujući rad sa formulama, analizom podataka, pivot tabelama, grafikama i makroima, sa konkretnim primerima i vežbama iz realnog života.",
          en: "The course covers basic and advanced Excel functionalities, including working with formulas, data analysis, pivot tables, charts, and macros, with concrete examples and exercises from real life.",
          de: "Der Kurs behandelt grundlegende und fortgeschrittene Excel-Funktionalitäten, einschließlich der Arbeit mit Formeln, Datenanalyse, Pivot-Tabellen, Diagrammen und Makros, mit konkreten Beispielen und Übungen aus dem realen Leben.",
          fr: "Le cours couvre les fonctionnalités de base et avancées d'Excel, notamment le travail avec des formules, l'analyse de données, les tableaux croisés dynamiques, les graphiques et les macros, avec des exemples concrets et des exercices tirés de la vie réelle."
        }
      }
    ]
    // No flags for softwareTesting
  }
};
