/**
 * Comparison pages at /compare/<slug>. Competitor facts come from their public pricing
 * pages on the date in `checked`; update both together. MyTaskly's own prices are not
 * typed here: the page links to /pricing so a price change never leaves a page stale.
 */
export type CompareRow = { label: string; mytaskly: string; them: string };

export type Comparison = {
  slug: string;
  name: string;
  title: string;
  description: string;
  answer: string;
  rows: CompareRow[];
  chooseThem: string[];
  chooseUs: string[];
  source: { label: string; url: string };
  checked: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "jira",
    name: "Jira",
    title: "MyTaskly vs Jira for software houses",
    description:
      "Jira tracks engineering work. MyTaskly runs the whole software house: projects, client portal, CRM, HR and chat in one workspace, at one price for the team.",
    answer:
      "Choose Jira if you only need deep issue tracking for engineers. Choose MyTaskly if you also run sales, attendance, leave and payroll, and want them in the same place as the projects.",
    rows: [
      { label: "What it covers", mytaskly: "Projects, client portal, CRM, HR (attendance, leave, payroll) and team chat", them: "Project and issue tracking" },
      { label: "Pricing model", mytaskly: "One flat price per workspace", them: "Per user, per month (Standard listed at $9.05 per user in 2026)" },
      { label: "Sales pipeline and CRM", mytaskly: "Included in the CRM module", them: "Needs a separate tool" },
      { label: "Attendance, leave and payroll", mytaskly: "Included in the HR module", them: "Needs a separate tool" },
      { label: "Client portal", mytaskly: "Clients see their project and approve work", them: "Clients usually get access to the board or a separate tool" },
      { label: "Team chat", mytaskly: "Built in, using the company directory", them: "Usually Slack or Teams, billed per person" },
      { label: "Best for", mytaskly: "Software houses and agencies of 5 to 60 people", them: "Engineering teams that need advanced issue workflows" },
    ],
    chooseThem: [
      "Your engineers rely on advanced issue workflows, custom fields or the wider Atlassian ecosystem.",
      "Sales, HR and client communication are already handled well somewhere else.",
    ],
    chooseUs: [
      "You pay for Jira plus a CRM, an HR tool and Slack, and they don't share data.",
      "Leave and attendance live in spreadsheets, so project plans miss who is away.",
      "Clients ask for updates by email because they can't see progress themselves.",
    ],
    source: { label: "MyTaskly savings page (Jira list price, checked 2026)", url: "/savings" },
    checked: "2026-11-06",
  },
  {
    slug: "bitrix24",
    name: "Bitrix24",
    title: "MyTaskly vs Bitrix24 for software houses",
    description:
      "Bitrix24 is a broad business suite. MyTaskly is a focused workspace for software houses: projects, client portal, CRM, HR and chat, without the features you never open.",
    answer:
      "Choose Bitrix24 if you want a very broad suite with telephony, websites and marketing tools. Choose MyTaskly if you are a software house that wants projects, clients, HR and chat in one simpler workspace.",
    rows: [
      { label: "What it covers", mytaskly: "Projects, client portal, CRM, HR (attendance, leave, payroll) and team chat", them: "CRM, tasks, chat, sites, marketing, telephony and more" },
      { label: "Pricing model", mytaskly: "One flat price per workspace", them: "Flat price per organisation by user band: Basic $49 (5 users), Standard $99 (50 users), Professional $199 (100 users), billed yearly" },
      { label: "HR tools", mytaskly: "Attendance, leave and payroll records in the HR module", them: "HR management and hours tracking are listed on Professional ($199 a month, billed yearly) and above" },
      { label: "Client portal", mytaskly: "Clients see their project and approve work", them: "External users can join workgroups" },
      { label: "Built for", mytaskly: "Software houses and agencies of 5 to 60 people", them: "Businesses of any type and size" },
      { label: "Setup", mytaskly: "Turn on only the modules you use; free setup call on request", them: "Large menu of tools to configure" },
    ],
    chooseThem: [
      "You need phone, website or marketing tools inside the same suite.",
      "You run a large organisation with hundreds of users.",
    ],
    chooseUs: [
      "You want a tool your developers will actually open, without features you don't need.",
      "You need HR with attendance, leave and payroll without paying for the top plan.",
      "You want the client portal and project board built around how software houses deliver.",
    ],
    source: { label: "Bitrix24 pricing page, checked 6 Nov 2026", url: "https://www.bitrix24.com/prices/" },
    checked: "2026-11-06",
  },
];

export function findComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
