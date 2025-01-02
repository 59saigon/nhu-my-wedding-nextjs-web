import Script from "next/script";

import type { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: {
    template: "%s | NhuMy Studio",
    default: "NhuMy Studio",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="M91G1IRhV2E2PMjOSxZ8bJTGa53ff9WM3xkHpPPlXZM"
        />
        <Script
          src="https://kit.fontawesome.com/b08cef85f4.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
