export const githubOrgUrl = 'https://github.com/ClackHouse';


export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems: SiteLink[] = [
  { label: 'Privacy', href: '/privacy/' },
] as const;

export const footerLinks: SiteLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'GitHub', href: githubOrgUrl, external: true },
  { label: 'llms.txt', href: '/llms.txt' }
] as const;

export const homePage = {
  eyebrow: 'Local-first typing analytics',
  title: 'Measure how you type. Not what you type.',
  description:
    'Analyze your typing patterns entirely on-device, with zero content capture.',
  ctaPrimary: { label: 'Get started', href: githubOrgUrl },
  ctaSecondary: { label: 'GitHub', href: githubOrgUrl },
  platformStatus: [
    { platform: 'macOS', status: 'Releasing Soon', available: true, theme: 'signal' },
    { platform: 'Linux', status: 'Planned', available: true, theme: 'amber' },
    { platform: 'Windows', status: 'Not Planned', available: false, theme: 'fog' }
  ],
  truths: [
    {
      title: 'Local-first',
      copy: 'Setup, collection, and visualization all happen on your machine.'
    },
    {
      title: 'Behavior, not content',
      copy: 'Measures typing patterns. Never captures or reconstructs what you type.'
    },
    {
      title: 'Open and auditable',
      copy: 'Public source code. Inspect the boundaries yourself.'
    }
  ],
  trustClaims: [
    'No raw keystrokes transmitted.',
    'Aggregation happens on-device.',
    'Source code makes the trust boundary inspectable.'
  ],
  trustSummary: 'Privacy by architecture, not by promise.',
  architectureFlow: ['clackhouse CLI', 'agent', 'VictoriaMetrics', 'Grafana'],
  architecturePoints: [
    'Install locally via CLI.',
    'Agent runs on-device, produces aggregate metrics.',
    'VictoriaMetrics stores, Grafana visualizes.'
  ],
  openCoreTitle: 'Open core.',
  openCoreParagraphs: [
    'The engine driving ClackHouse—the local agent, the metrics pipeline, the visualization stack—is built entirely on open source. We believe that tools with access to your keystrokes must be structurally incapable of betraying your trust. You own the data, the code is public, and the boundaries are verifiable on your own machine.',
    'While the core product is the local workflow you can run today for free, our open-core model ensures that any future managed or cloud-based features will be built rigidly on top of these inspectable foundations.'
  ],
  finalCtaTitle: 'Start measuring today.',
  finalCtaCopy: 'Fully open source. Set it up on your machine in minutes.',
  finalCta: { label: 'View on GitHub', href: githubOrgUrl }
} as const;

export const privacyPage = {
  title: 'Privacy model',
  description:
    'What ClackHouse measures, what it skips, and how local-first architecture enforces the boundary.',
  intro:
    'Typing behavior without content capture. Here is how.',
  sections: [
    {
      title: 'Never captured',
      points: [
        'Raw keystrokes',
        'Typed words or phrases',
        'Reconstructable text'
      ]
    },
    {
      title: 'How',
      points: [
        'Agent runs locally',
        'Signals reduced to lossy metrics on-device',
        'Visualization via local stack'
      ]
    },
    {
      title: 'Why open source',
      points: [
        'Boundary is inspectable',
        'Claims are challengeable',
        'Trust from visibility, not branding'
      ]
    }
  ]
} as const;

const navMarkdown = navItems
  .map((item) => `- [${item.label}](${item.href})`)
  .join('\n');

const footerMarkdown = footerLinks
  .map((item) => `- [${item.label}](${item.href})`)
  .join('\n');

export const homeMachineMarkdown = [
  '# [ClackHouse](/)',
  '',
  '## Navigation',
  navMarkdown,
  '',
  `## ${homePage.title}`,
  homePage.description,
  '',
  '## Platform status',
  ...homePage.platformStatus.map((p) => `- **${p.platform}**: ${p.status}`),
  '',
  '## What ClackHouse is',
  ...homePage.truths.map((truth) => `- **${truth.title}**: ${truth.copy}`),
  '',
  '## Privacy / Trust',
  homePage.trustSummary,
  ...homePage.trustClaims.map((claim) => `- ${claim}`),
  '',
  '## Local-first architecture',
  `Flow: ${homePage.architectureFlow.join(' -> ')}`,
  ...homePage.architecturePoints.map((point) => `- ${point}`),
  '',
  '## Open core',
  ...homePage.openCoreParagraphs.map((paragraph) => `${paragraph}\n`),
  '## Explore',
  homePage.finalCtaCopy,
  `- [${homePage.finalCta.label}](${homePage.finalCta.href})`,
  '',
  '## Footer',
  footerMarkdown
].join('\n');

export const privacyMachineMarkdown = [
  '# [ClackHouse](/) — Privacy model',
  '',
  privacyPage.intro,
  '',
  ...privacyPage.sections.flatMap((section) => [
    `## ${section.title}`,
    ...section.points.map((point) => `- ${point}`),
    ''
  ]),
  '## Footer',
  footerMarkdown
].join('\n');
