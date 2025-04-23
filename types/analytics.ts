declare global {
  interface Window {
    fbq: any;
  }
}

export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
};
