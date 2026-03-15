import type { APIRoute } from "astro";

import { privacyPage } from "../data/site";

export const GET: APIRoute = () => {
  const body = [
    `# ${privacyPage.title}`,
    "",
    privacyPage.intro,
    "",
    ...privacyPage.sections.flatMap((section) => [
      `## ${section.title}`,
      ...section.points.map((point) => `- ${point}`),
      "",
    ]),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
