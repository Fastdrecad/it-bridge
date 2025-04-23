import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ClientProviders from "@/contexts/ClientProviders";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { organizationSchema } from "@/lib/schemas";
import { defaultMetadata } from "@/lib/metadata.config";
import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning={true}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '833146791324769');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=833146791324769&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <meta
          property="og:image:url"
          content="https://itbridge-services.com/og/opengraph-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://itbridge-services.com/og/opengraph-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="fb:app_id"
          content={process.env.NEXT_PUBLIC_FB_APP_ID}
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <ErrorBoundary>
          <Header />
          <ClientProviders>
            <main id="main-content" className="flex-1 min-h-screen grid">
              {children}
            </main>
          </ClientProviders>
          <Footer>
            <div className="flex gap-4 justify-center mt-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cookie Policy
              </Link>
            </div>
          </Footer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
