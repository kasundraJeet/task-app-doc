import * as React from "react";

export default {
  projectLink: "https://github.com/kasundraJeet/task-app-doc",
  docsRepositoryBase:
    "https://github.com/kasundraJeet/task-app-doc/tree/main/src/pages",
  titleSuffix: " – Task Management System by Jeet kasundra",
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
        content="Task Management System documentation by Jeet kasundra"
      />
      <meta
        name="og:description"
        content="Task Management System documentation by Jeet kasundra"
      />
      <meta
        name="og:title"
        content="Task Management System documentation by Jeet kasundra"
      />
      <link rel="sitemap" href="/sitemap.xml" />
      <link rel="robots" href="/robots.txt" />
      <meta name="robots" content="index, follow" />
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
