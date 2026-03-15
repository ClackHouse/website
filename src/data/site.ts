export const githubOrgUrl = "https://github.com/ClackHouse";

export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems: SiteLink[] = [
  { label: "Privacy", href: "/privacy/" },
] as const;

export const footerLinks: SiteLink[] = [
  { label: "Privacy", href: "/privacy/" },
  { label: "GitHub", href: githubOrgUrl, external: true },
  { label: "llms.txt", href: "/llms.txt" },
] as const;

export const homePage = {
  eyebrow: "Local-first typing analytics",
  title: "Measure how you type. Not what you type.",
  description:
    "Analyze your typing patterns entirely on-device, with zero content capture.",
  ctaPrimary: { label: "Get started", href: githubOrgUrl },
  ctaSecondary: { label: "GitHub", href: githubOrgUrl },
  platformStatus: [
    {
      platform: "macOS",
      status: "Releasing Soon",
      available: true,
      theme: "signal",
    },
    { platform: "Linux", status: "Planned", available: true, theme: "amber" },
    {
      platform: "Windows",
      status: "Not Planned",
      available: false,
      theme: "fog",
    },
  ],
  truths: [
    {
      title: "Local-first",
      copy: "Setup, collection, and visualization all happen on your machine.",
    },
    {
      title: "Behavior, not content",
      copy: "Measures typing patterns. Never captures or reconstructs what you type.",
    },
    {
      title: "Open and auditable",
      copy: "Public source code. Inspect the boundaries yourself.",
    },
  ],
  trustClaims: [
    "No raw keystrokes transmitted.",
    "Aggregation happens on-device.",
    "Source code makes the trust boundary inspectable.",
  ],
  trustSummary: "Privacy by architecture, not by promise.",
  openCorePoints: [
    {
      title: "Fully open source",
      copy: "Agent, metrics pipeline, visualization stack. Every line is public and auditable.",
    },
    {
      title: "Free to run locally",
      copy: "The full local workflow runs on your machine, forever, at no cost.",
    },
    {
      title: "Open core model",
      copy: "Future managed features build on these inspectable foundations. Never a black box.",
    },
  ],
  finalCtaTitle: "Start measuring today.",
  finalCtaCopy: "Fully open source. Set it up on your machine in minutes.",
  finalCta: { label: "View on GitHub", href: githubOrgUrl },
} as const;

export const privacyPage = {
  title: "Privacy model",
  description:
    "What ClackHouse measures, what it skips, and how local-first architecture enforces the boundary.",
  intro: "Typing behavior without content capture. Here is how.",
  sections: [
    {
      title: "Never captured",
      description: "Signals that never leave your device.",
      points: [
        "Raw keystrokes",
        "Typed words or phrases",
        "Reconstructable text",
      ],
    },
    {
      title: "How",
      description: "Architecture that enforces the boundary.",
      points: [
        "Agent runs locally",
        "Signals reduced to lossy metrics on-device",
        "Visualization via local stack",
      ],
    },
    {
      title: "Why open source",
      description: "Trust from visibility, not branding.",
      points: [
        "Boundary is inspectable",
        "Claims are challengeable",
        "Trust from visibility, not branding",
      ],
    },
  ],
} as const;

const navMarkdown = navItems
  .map((item) => `- [${item.label}](${item.href})`)
  .join("\n");

const footerMarkdown = footerLinks
  .map((item) => `- [${item.label}](${item.href})`)
  .join("\n");

export const homeMachineMarkdown = [
  "# [ClackHouse](/)",
  "",
  "## Navigation",
  navMarkdown,
  "",
  `## ${homePage.title}`,
  homePage.description,
  "",
  "## Privacy / Trust",
  "### Strong boundaries, stated plainly.",
  homePage.trustSummary,
  ...homePage.trustClaims.map((claim) => `- ${claim}`),
  "",
  "## What ClackHouse is",
  "### Visibility without capture.",
  "Built for people who want to understand their typing patterns without turning their machine into a black box.",
  ...homePage.truths.map((truth) => `- **${truth.title}**: ${truth.copy}`),
  "",
  "## Open core · Open source",
  "### Built like infrastructure, not a black box.",
  "The engine is open source. The model is open core.",
  ...homePage.openCorePoints.map(
    (point) => `- **${point.title}**: ${point.copy}`,
  ),
  "",
  "## Explore",
  `### ${homePage.finalCtaTitle}`,
  homePage.finalCtaCopy,
  `- [${homePage.finalCta.label}](${homePage.finalCta.href})`,
  "",
  "### Platform status",
  ...homePage.platformStatus.map((p) => `- **${p.platform}**: ${p.status}`),
  "",
  "## Footer",
  footerMarkdown,
].join("\n");

export const privacyMachineMarkdown = [
  "# [ClackHouse](/) — Privacy model",
  "",
  "## Navigation",
  navMarkdown,
  "",
  privacyPage.description,
  "",
  privacyPage.intro,
  "",
  ...privacyPage.sections.flatMap((section) => [
    `## ${section.title}`,
    section.description,
    ...section.points.map((point) => `- ${point}`),
    "",
  ]),
  "## Footer",
  footerMarkdown,
].join("\n");
