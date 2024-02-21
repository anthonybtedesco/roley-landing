import React from "react";
import Navbar from "../components/containers/Navbar";
import Footer from "../components/containers/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  metadataBase: new URL("https://roley.me"),
  title: "Roley | Automatic Acting Applications",
  description:
    "Roley is an acting role auto-applier that provides actors with the power of time.",
  keywords: [
    "acting roles",
    "acting agent",
    "acting manager",
    "backstage",
    "actors access",
    "casting networks",
    "acting auditions",
    "acting jobs",
    "acting gigs",
    "acting work",
    "acting career",
    "acting",
    "acting agent",
    "acting manager",
    "acting agency",
    "acting agencies",
    "acting representation",
    "acting rep",
    "acting",
  ],
  openGraph: {
    title: "Roley | Automatic Acting Applications",
    description:
      "Roley is an acting role auto-applier that provides actors with the power of time.",
    url: "https://roley.me",
    siteName: "Roley",
    images: {
      url: "/Spotlight.png",
      width: 800,
      height: 600,
      alt: "Spotlight",
    },

    locale: "en_US",
    type: "website",
    // Add the og:image property heregit add
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://roley.me${router.asPath}`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://roley.me" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head> */}
      <body>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
