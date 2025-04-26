export type courseConfig = {
  translationKey: string;
  heroContentKey: string;
  featureKey: string;
  gridCardsKey: string;
  trainingStructureKey: string;
  trainingScheduleKey: string;
  optionalSections?: {
    // Optional sections to be displayed on the course page
    faq?: boolean;
    testimonials?: boolean;
    [key: string]: boolean | undefined;
  };
};

//  Map of course configs, keyed by course slug
const courseConfigurations: Record<string, courseConfig> = {
  "hr-starter": {
    translationKey: "HERO_SECTION.HR_STARTER",
    heroContentKey: "hrStarter",
    featureKey: "hrStarterFeatures",
    gridCardsKey: "hrStarterGridCards",
    trainingStructureKey: "hrStarterTrainingStructure",
    trainingScheduleKey: "hrStarterTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  },
  "soft-skills": {
    translationKey: "HERO_SECTION.SOFT_SKILLS",
    heroContentKey: "softSkills",
    featureKey: "softSkillsFeatures",
    gridCardsKey: "softSkillsGridCards",
    trainingStructureKey: "softSkillsTrainingStructure",
    trainingScheduleKey: "softSkillsTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  },
  "pcm": {
    translationKey: "HERO_SECTION.PCM",
    heroContentKey: "pcm",
    featureKey: "pcmFeatures",
    gridCardsKey: "pcmGridCards",
    trainingStructureKey: "pcmTrainingStructure",
    trainingScheduleKey: "pcmTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  },
  "business-english": {
    translationKey: "HERO_SECTION.BUSINESS_ENGLISH",
    heroContentKey: "businessEnglish",
    featureKey: "pcmFeatures",
    gridCardsKey: "pcmGridCards",
    trainingStructureKey: "pcmTrainingStructure",
    trainingScheduleKey: "pcmTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  },
  "power-bi": {
    translationKey: "HERO_SECTION.POWER_BI",
    heroContentKey: "powerBi",
    featureKey: "pcmFeatures",
    gridCardsKey: "pcmGridCards",
    trainingStructureKey: "pcmTrainingStructure",
    trainingScheduleKey: "pcmTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  },
  "excel": {
    translationKey: "HERO_SECTION.EXCEL",
    heroContentKey: "excel",
    featureKey: "pcmFeatures",
    gridCardsKey: "pcmGridCards",
    trainingStructureKey: "pcmTrainingStructure",
    trainingScheduleKey: "pcmTrainingSchedule",
    optionalSections: {
      faq: true,
      testimonials: false
    }
  }
};

export default courseConfigurations;
