export interface CourseSchedule {
  participants: string;
  location: string;
  schedule: string;
  duration: string;
  price?: string;
}

export interface LocalizedCourseSchedules {
  sr: Record<string, CourseSchedule[]>;
  en: Record<string, CourseSchedule[]>;
  de: Record<string, CourseSchedule[]>;
  fr: Record<string, CourseSchedule[]>;
}

// Serbian (original) course schedules
const srCourseSchedules: Record<string, CourseSchedule[]> = {
  hr: [
    {
      participants: "Do 10",
      location: "Online",
      schedule: "Vikendom / Dogovor",
      duration: "24 sata / 6 nedelja",
      price: "27.900 din"
    }
  ],
  softSkills: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "6 sati / 1 dan"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dana"
    }
  ],
  pcm: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dan"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "6 sati / 1 dan"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "Online",
      schedule: "Dogovor",
      duration: "32 časa / 8 nedelja"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "Online",
      schedule: "Dogovor",
      duration: "2 puta / 6 nedelja"
    }
  ],
  excel: [
    {
      participants: "Do 10",
      location: "Online",
      schedule: "Dogovor",
      duration: "2 puta / 4 nedelje",
      price: ""
    }
  ]
};

// English course schedules
const enCourseSchedules: Record<string, CourseSchedule[]> = {
  hr: [
    {
      participants: "Up to 10",
      location: "Online",
      schedule: "Weekends / By appointment",
      duration: "24 hours / 6 weeks",
      price: "27,900 RSD"
    }
  ],
  softSkills: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "By appointment",
      duration: "6 hours / 1 day"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "By appointment",
      duration: "12 hours / 2 days"
    }
  ],
  pcm: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "By appointment",
      duration: "12 hours / 2 days"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "By appointment",
      duration: "6 hours / 1 day"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "Online",
      schedule: "By appointment",
      duration: "32 hours / 8 weeks"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "Online",
      schedule: "By appointment",
      duration: "2 times / 6 weeks"
    }
  ],
  excel: [
    {
      participants: "Up to 10",
      location: "Online",
      schedule: "By appointment",
      duration: "2 times / 4 weeks",
      price: ""
    }
  ]
};

// German course schedules
const deCourseSchedules: Record<string, CourseSchedule[]> = {
  hr: [
    {
      participants: "Bis zu 10",
      location: "Online",
      schedule: "Wochenende / Nach Vereinbarung",
      duration: "24 Stunden / 6 Wochen",
      price: "27.900 RSD"
    }
  ],
  softSkills: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Nach Vereinbarung",
      duration: "6 Stunden / 1 Tag"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Nach Vereinbarung",
      duration: "12 Stunden / 2 Tage"
    }
  ],
  pcm: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Nach Vereinbarung",
      duration: "12 Stunden / 2 Tage"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Nach Vereinbarung",
      duration: "6 Stunden / 1 Tag"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "Online",
      schedule: "Nach Vereinbarung",
      duration: "32 Stunden / 8 Wochen"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "Online",
      schedule: "Nach Vereinbarung",
      duration: "2 mal / 6 Wochen"
    }
  ],
  excel: [
    {
      participants: "Bis zu 10",
      location: "Online",
      schedule: "Nach Vereinbarung",
      duration: "2 mal / 4 Wochen",
      price: ""
    }
  ]
};

// French course schedules
const frCourseSchedules: Record<string, CourseSchedule[]> = {
  hr: [
    {
      participants: "Jusqu'à 10",
      location: "En ligne",
      schedule: "Weekends / Sur rendez-vous",
      duration: "24 heures / 6 semaines",
      price: "27 900 RSD"
    }
  ],
  softSkills: [
    {
      participants: "5-12",
      location: "Sur place",
      schedule: "Sur rendez-vous",
      duration: "6 heures / 1 jour"
    },
    {
      participants: "5-12",
      location: "Sur place",
      schedule: "Sur rendez-vous",
      duration: "12 heures / 2 jours"
    }
  ],
  pcm: [
    {
      participants: "5-12",
      location: "Sur place",
      schedule: "Sur rendez-vous",
      duration: "12 heures / 2 jours"
    },
    {
      participants: "5-12",
      location: "Sur place",
      schedule: "Sur rendez-vous",
      duration: "6 heures / 1 jour"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "En ligne",
      schedule: "Sur rendez-vous",
      duration: "32 heures / 8 semaines"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "En ligne",
      schedule: "Sur rendez-vous",
      duration: "2 fois / 6 semaines"
    }
  ],
  excel: [
    {
      participants: "Jusqu'à 10",
      location: "En ligne",
      schedule: "Sur rendez-vous",
      duration: "2 fois / 4 semaines",
      price: ""
    }
  ]
};

export const courseSchedules: LocalizedCourseSchedules = {
  sr: srCourseSchedules,
  en: enCourseSchedules,
  de: deCourseSchedules,
  fr: frCourseSchedules
};
