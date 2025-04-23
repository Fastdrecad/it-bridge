"use client";

declare global {
  interface Window {
    fbq: any;
  }
}

export const useFacebookPixel = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.fbq) {
      // Only add test event code in development
      const eventData =
        process.env.NODE_ENV === "development"
          ? { ...data, test_event_code: "TEST54349" }
          : data;

      window.fbq("track", eventName, eventData);
    }
  };

  const trackViewContent = (
    contentName: string,
    contentType: string = "course",
    currency: string = "EUR",
    value?: number
  ) => {
    trackEvent("ViewContent", {
      content_name: contentName,
      content_type: contentType,
      currency,
      value
    });
  };

  const trackLead = (formName: string) => {
    trackEvent("Lead", {
      form_name: formName
    });
  };

  const trackPurchase = (
    courseName: string,
    value: number,
    currency: string = "EUR"
  ) => {
    trackEvent("Purchase", {
      content_name: courseName,
      content_type: "course",
      currency,
      value
    });
  };

  return {
    trackEvent,
    trackViewContent,
    trackLead,
    trackPurchase
  };
};
