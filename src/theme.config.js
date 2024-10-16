import * as React from "react";
import Script from "next/script";

/**
 * @type {import('nextra-theme-blinkshell').DocsThemeConfig}
 */
export default {
  projectLink: "https://github.com/kasundraJeet/task-app-doc",
  docsRepositoryBase:
    "https://github.com/kasundraJeet/task-app-doc/tree/main/src/pages",
  titleSuffix: " – Jeet kasundra",
  logo: (
    <>
      <span className="mr-2 ml-2 font-extrabold hidden md:inline">Task</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Manager App
      </span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Blink Shell: The top mobile terminal for Apple devices. Blazing fast, full-featured, and loved by developers around the world. It's giving you the freedom to develop anywhere, anytime."
      />
      <meta
        name="og:description"
        content="Blink Shell: The top mobile terminal for Apple devices. Blazing fast, full-featured, and loved by developers around the world. It's giving you the freedom to develop anywhere, anytime."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:handle" content="blinkshell" />
      <meta name="twitter:image" content="https://blink.sh/og.png" />
      <meta name="twitter:site:domain" content="blink.sh" />
      <meta name="twitter:url" content="https://blink.sh" />
      <meta
        name="og:title"
        content="Blink Shell: Blink Shell: The top mobile terminal for Apple devices."
      />
      <meta name="og:image" content="https://docs.blink.sh/og.png" />
      <meta name="apple-mobile-web-app-title" content="Blink Shell" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="apple-itunes-app" content="app-id=1594898306" />
    </>
  ),
  search: true,
  unstable_faviconGlyph: "✦",
  defaultMenuCollapsed: true,
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <>© {new Date().getFullYear()} developed by Kasundra Jeet.</>,
  darkMode: true,
};
