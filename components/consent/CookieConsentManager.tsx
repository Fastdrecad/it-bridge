"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import type { CookieConsent } from "@/types/analytics";

const CONSENT_COOKIE_NAME = "cookie-consent";

export default function CookieConsentManager() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = Cookies.get(CONSENT_COOKIE_NAME);
    if (!hasConsent) setShowConsent(true);
  }, []);

  const handleConsent = (type: "all" | "necessary") => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: type === "all",
      marketing: type === "all"
    };

    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consent), {
      expires: 365,
      sameSite: "strict"
    });

    setShowConsent(false);

    // Reload page to apply consent settings
    window.location.reload();
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg z-50 border-t">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Privacy Settings</h3>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleConsent("necessary")}
              className="px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Necessary Only
            </button>
            <button
              onClick={() => handleConsent("all")}
              className="px-6 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Accept All
            </button>
            <a
              href="/privacy-policy"
              className="text-sm text-blue-600 hover:underline self-center ml-auto"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
