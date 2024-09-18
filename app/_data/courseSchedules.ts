export interface CourseSchedule {
  participants: string;
  location: string;
  schedule: string;
  duration: string;
  price?: string;
}

export const courseSchedules: Record<string, CourseSchedule[]> = {
  hr: [
    {
      participants: "5-8",
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
      duration: "6 sati / 1 dana"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "Online via MS Teams",
      schedule: "Dogovor",
      duration: "32 časa / 8 nedelja"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dana"
    },
    {
      participants: "5-10",
      location: "Hybrid",
      schedule: "Dogovor",
      duration: "16 sati"
    }
  ],
  qa: [
    {
      participants: "Do 8",
      location: "Online via MS Teams",
      schedule: "Dogovor",
      duration: "32 sata / 6 nedelja",
      price: "38.900 din"
    }
  ]
};
