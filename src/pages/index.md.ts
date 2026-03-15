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
    "## Privacy / Trust",
    homePage.trustSummary,
    ...homePage.trustClaims.map((claim) => `- ${claim}`),
    "",
    "## What ClackHouse is",
    ...homePage.truths.map((truth) => `- **${truth.title}**: ${truth.copy}`),
    "",
    "## Open core",
    ...homePage.openCorePoints.map(
      (point) => `- **${point.title}**: ${point.copy}`,
    ),
    "",
    `## ${homePage.finalCtaTitle}`,
    homePage.finalCtaCopy,
    "",
    `Platform status: ${platformSummary}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
