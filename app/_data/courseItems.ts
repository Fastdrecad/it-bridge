export interface CourseItem {
  icon: string;
  label: string;
}

export interface CourseCategory {
  categoryName: string;
  icons: CourseItem[];
}

export const courseItems: CourseCategory[] = [
  {
    categoryName: "hr",
    icons: [
      { icon: "FaBullseye", label: "Postavljanje ciljeva" },
      { icon: "FaChalkboardTeacher", label: "Realizacija programa" },
      { icon: "FaTasks", label: "Vežbe i zadaci" },
      { icon: "BsPencilSquare", label: "Samoevaluacija" },
      { icon: "FaComments", label: "Evaluacija i feedback" }
    ]
  },
  {
    categoryName: "softSkills",
    icons: [
      { icon: "FaHandshake", label: "Razumevanje potreba klijenta" },
      { icon: "FaClipboardList", label: "Izrada plana obuke" },
      {
        icon: "FaChalkboardTeacher",
        label: "Teorijski delovi i praktične vežbe"
      },
      { icon: "FaChartLine", label: "Praktične vežbe i simulacije" },
      { icon: "FaStar", label: "Evaluacija i feedback" }
    ]
  },
  {
    categoryName: "pcm",
    icons: [
      { icon: "FaHandshake", label: "Razumevanje potreba klijenta" },
      { icon: "FaClipboardList", label: "Izrada plana obuke" },
      {
        icon: "FaChalkboardTeacher",
        label: "Teorijski delovi i praktične vežbe"
      },
      { icon: "FaUsersCog", label: "Primenjivanje stečenih veština u praksi" },
      { icon: "FaStar", label: "Evaluacija" }
    ]
  },
  {
    categoryName: "businessEnglish",
    icons: [
      { icon: "FaClipboardCheck", label: "Testiranje i razvrstavanje" },
      { icon: "FaBullseye", label: "Postavljanje ciljeva" },
      { icon: "FaChalkboardTeacher", label: "Realizacija programa" },
      { icon: "FaTasks", label: "Vežbe i zadaci" },
      { icon: "BsPencilSquare", label: "Samoevaluacija" },
      { icon: "FaGraduationCap", label: "Završno testiranje" }
    ]
  },
  {
    categoryName: "powerBI",
    icons: [
      { icon: "FaHandshake", label: "Razumevanje potreba klijenata" },
      {
        icon: "FaClipboardList",
        label: "Izrada plana obuke"
      },
      {
        icon: "FaChalkboardTeacher",
        label: "Teorijski delovi i praktične vežbe"
      },
      { icon: "FaUsersCog", label: "Primena stečenih veština u praksi" },
      { icon: "FaStar", label: "Evaluacija" }
    ]
  },
  {
    categoryName: "qaAutomation",
    icons: [
      { icon: "FaBullseye", label: "Postavljanje ciljeva" },
      { icon: "FaChalkboardTeacher", label: "Realizacija programa" },
      { icon: "FaTasks", label: "Vežbe i zadaci" },
      { icon: "BsPencilSquare", label: "Evaluacija" },
      { icon: "FaGraduationCap", label: "Završno testiranje" }
    ]
  }
];
