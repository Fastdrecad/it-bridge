export interface CourseItem {
  icon: string;
  label:
    | string
    | {
        sr: string;
        en: string;
        de: string;
        fr: string;
      };
}

export interface CourseCategory {
  [key: string]: {
    icons: CourseItem[];
  };
}

export const courseCategories: CourseCategory = {
  hrStarter: {
    icons: [
      {
        icon: "FaBullseye",
        label: {
          sr: "Postavljanje ciljeva",
          en: "Goal Setting",
          de: "Zielsetzung",
          fr: "Définition des objectifs"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Realizacija programa",
          en: "Program Implementation",
          de: "Programmumsetzung",
          fr: "Mise en œuvre du programme"
        }
      },
      {
        icon: "FaTasks",
        label: {
          sr: "Vežbe i zadaci",
          en: "Exercises and Tasks",
          de: "Übungen und Aufgaben",
          fr: "Exercices et tâches"
        }
      },
      {
        icon: "BsPencilSquare",
        label: {
          sr: "Samoevaluacija",
          en: "Self-evaluation",
          de: "Selbstevaluierung",
          fr: "Auto-évaluation"
        }
      },
      {
        icon: "FaComments",
        label: {
          sr: "Evaluacija i feedback",
          en: "Evaluation and Feedback",
          de: "Evaluierung und Feedback",
          fr: "Évaluation et retour d'information"
        }
      }
    ]
  },
  softSkills: {
    icons: [
      {
        icon: "FaHandshake",
        label: {
          sr: "Razumevanje potreba klijenta",
          en: "Understanding Client Needs",
          de: "Verstehen der Kundenbedürfnisse",
          fr: "Comprendre les besoins du client"
        }
      },
      {
        icon: "FaClipboardList",
        label: {
          sr: "Izrada plana obuke",
          en: "Training Plan Development",
          de: "Entwicklung des Schulungsplans",
          fr: "Élaboration du plan de formation"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Teorijski delovi i praktične vežbe",
          en: "Theoretical Parts and Practical Exercises",
          de: "Theoretische Teile und praktische Übungen",
          fr: "Parties théoriques et exercices pratiques"
        }
      },
      {
        icon: "FaChartLine",
        label: {
          sr: "Evaluacija i konstruktivni feedback",
          en: "Practical Exercises and Simulations",
          de: "Praktische Übungen und Simulationen",
          fr: "Exercices pratiques et simulations"
        }
      },
      {
        icon: "FaStar",
        label: {
          sr: "Evaluacija i feedback",
          en: "Evaluation and Feedback",
          de: "Evaluierung und Feedback",
          fr: "Évaluation et retour d'information"
        }
      }
    ]
  },

  businessEnglish: {
    icons: [
      {
        icon: "FaClipboardCheck",
        label: {
          sr: "Testiranje i razvrstavanje",
          en: "Testing and Classification",
          de: "Testen und Klassifizierung",
          fr: "Test et classification"
        }
      },
      {
        icon: "FaBullseye",
        label: {
          sr: "Postavljanje ciljeva",
          en: "Goal Setting",
          de: "Zielsetzung",
          fr: "Définition des objectifs"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Realizacija programa",
          en: "Program Implementation",
          de: "Programmumsetzung",
          fr: "Mise en œuvre du programme"
        }
      },
      {
        icon: "FaTasks",
        label: {
          sr: "Vežbe i zadaci",
          en: "Exercises and Tasks",
          de: "Übungen und Aufgaben",
          fr: "Exercices et tâches"
        }
      },
      {
        icon: "BsPencilSquare",
        label: {
          sr: "Samoevaluacija",
          en: "Self-evaluation",
          de: "Selbstevaluierung",
          fr: "Auto-évaluation"
        }
      },
      {
        icon: "FaGraduationCap",
        label: {
          sr: "Završno testiranje",
          en: "Final Testing",
          de: "Abschlussprüfung",
          fr: "Test final"
        }
      }
    ]
  },
  pcm: {
    icons: [
      {
        icon: "FaHandshake",
        label: {
          sr: "Razumevanje potreba klijenta",
          en: "Understanding Client Needs",
          de: "Verstehen der Kundenbedürfnisse",
          fr: "Comprendre les besoins du client"
        }
      },
      {
        icon: "FaClipboardList",
        label: {
          sr: "Izrada plana obuke",
          en: "Training Plan Development",
          de: "Entwicklung des Schulungsplans",
          fr: "Élaboration du plan de formation"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Teorijski delovi i praktične vežbe",
          en: "Theoretical Parts and Practical Exercises",
          de: "Theoretische Teile und praktische Übungen",
          fr: "Parties théoriques et exercices pratiques"
        }
      },
      {
        icon: "FaUsersCog",
        label: {
          sr: "Primenjivanje stečenih veština u praksi",
          en: "Applying Acquired Skills in Practice",
          de: "Anwendung erworbener Fähigkeiten in der Praxis",
          fr: "Application des compétences acquises en pratique"
        }
      },
      {
        icon: "FaStar",
        label: {
          sr: "Evaluacija",
          en: "Evaluation",
          de: "Evaluierung",
          fr: "Évaluation"
        }
      }
    ]
  },
  powerBi: {
    icons: [
      {
        icon: "FaHandshake",
        label: {
          sr: "Razumevanje potreba klijenata",
          en: "Understanding Client Needs",
          de: "Verstehen der Kundenbedürfnisse",
          fr: "Comprendre les besoins du client"
        }
      },
      {
        icon: "FaClipboardList",
        label: {
          sr: "Izrada plana obuke",
          en: "Training Plan Development",
          de: "Entwicklung des Schulungsplans",
          fr: "Élaboration du plan de formation"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Teorijski delovi i praktične vežbe",
          en: "Theoretical Parts and Practical Exercises",
          de: "Theoretische Teile und praktische Übungen",
          fr: "Parties théoriques et exercices pratiques"
        }
      },
      {
        icon: "FaUsersCog",
        label: {
          sr: "Primena stečenih veština u praksi",
          en: "Applying Acquired Skills in Practice",
          de: "Anwendung erworbener Fähigkeiten in der Praxis",
          fr: "Application des compétences acquises en pratique"
        }
      },
      {
        icon: "FaStar",
        label: {
          sr: "Evaluacija",
          en: "Evaluation",
          de: "Evaluierung",
          fr: "Évaluation"
        }
      }
    ]
  },
  excel: {
    icons: [
      {
        icon: "FaBullseye",
        label: {
          sr: "Postavljanje ciljeva",
          en: "Goal Setting",
          de: "Zielsetzung",
          fr: "Définition des objectifs"
        }
      },
      {
        icon: "FaChalkboardTeacher",
        label: {
          sr: "Realizacija programa",
          en: "Program Implementation",
          de: "Programmumsetzung",
          fr: "Mise en œuvre du programme"
        }
      },
      {
        icon: "FaTasks",
        label: {
          sr: "Vežbe i zadaci",
          en: "Exercises and Tasks",
          de: "Übungen und Aufgaben",
          fr: "Exercices et tâches"
        }
      },
      {
        icon: "BsPencilSquare",
        label: {
          sr: "Evaluacija",
          en: "Evaluation",
          de: "Evaluierung",
          fr: "Évaluation"
        }
      },
      {
        icon: "FaGraduationCap",
        label: {
          sr: "Završno testiranje",
          en: "Final Testing",
          de: "Abschlussprüfung",
          fr: "Test final"
        }
      }
    ]
  }
};
