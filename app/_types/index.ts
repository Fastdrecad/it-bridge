export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
}

export interface AppointmentData {
  date: string;
  time: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export {};
