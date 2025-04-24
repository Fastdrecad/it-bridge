export type SupportedLanguage = "sr" | "en" | "de" | "fr";

export type MultilingualText = {
  [key in SupportedLanguage]?: string;
};
