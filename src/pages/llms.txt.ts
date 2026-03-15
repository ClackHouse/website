import type { APIRoute } from "astro";

import { githubOrgUrl, homePage, privacyPage } from "../data/site";

export const GET: APIRoute = () => {
  const body = [
    "# ClackHouse",
    "Site: https://clack.house",
    `Summary: ${homePage.description}`,
    "",
    "Public pages:",
    "- /",
    "- /privacy/",
    "",
    "Markdown mirrors:",
    "- /index.md",
    "- /privacy.md",
    "",
    "Notes:",
    `- ${privacyPage.description}`,
    "",
    "GitHub:",
    `- ${githubOrgUrl}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
