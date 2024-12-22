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
