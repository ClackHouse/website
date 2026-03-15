import type { APIRoute } from "astro";

import { homePage } from "../data/site";

export const GET: APIRoute = () => {
  const platformSummary = homePage.platformStatus
    .map(({ platform, status }) => `${platform}: ${status}`)
    .join("; ");

  const body = [
    `# ${homePage.title}`,
    "",
    homePage.description,
    "",
    `Platform status: ${platformSummary}`,
    "",
    "## What ClackHouse is",
    ...homePage.truths.map((truth) => `- **${truth.title}**: ${truth.copy}`),
    "",
    "## Privacy / Trust",
    ...homePage.trustClaims.map((claim) => `- ${claim}`),
    "",
    "## Local-first architecture",
    `Flow: ${homePage.architectureFlow.join(" -> ")}`,
    ...homePage.architecturePoints.map((point) => `- ${point}`),
    "",
    "## Open core",
    ...homePage.openCoreParagraphs.map((paragraph) => `${paragraph}\n`),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
