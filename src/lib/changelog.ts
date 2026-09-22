export type ChangelogItem =
  | { kind: "new"; text: string }
  | { kind: "improved"; text: string }
  | { kind: "fixed"; text: string }
  | { kind: "security"; text: string };

export type ChangelogRelease = {
  version: string;
  /** Short App Store–style title */
  title: string;
  date: string;
  /** ISO date for sorting / metadata */
  dateIso: string;
  summary: string;
  items: ChangelogItem[];
};

/**
 * Public product changelog — newest first.
 * Keep entries short and user-facing (App Store release-note style).
 */
export const CHANGELOG: ChangelogRelease[] = [
  {
    version: "2026.9.22",
    title: "Scraper CRM, projects & polish",
    date: "September 22, 2026",
    dateIso: "2026-09-22",
    summary:
      "Smarter scraped-lead tracking, clearer project filters, and a safer, more reliable product surface.",
    items: [
      {
        kind: "new",
        text: "Scraped lead cards: status & score dropdowns, progress bar, tags, reminders, and bulk actions",
      },
      {
        kind: "new",
        text: "Lead pipeline statuses from your sheet (Intake, Connected, Won, Lost, Call Scheduled, and more)",
      },
      {
        kind: "new",
        text: "Score filter (10%–100%) and expanded service categories for the scraper inbox",
      },
      {
        kind: "new",
        text: "Public /changelog page for deployment release notes",
      },
      {
        kind: "improved",
        text: "Project portfolio metrics stay stable while Active / On Hold / Completed filters update the list",
      },
      {
        kind: "improved",
        text: "Board quick stats (First Section, In Progress, Done) now filter the board without changing the counts",
      },
      {
        kind: "improved",
        text: "Campaigns & Sequences return in the CRM sidebar with a Coming soon experience until launch",
      },
      {
        kind: "fixed",
        text: "First outbound reply marks scraped leads as Contacted",
      },
      {
        kind: "fixed",
        text: "Dropdown menus prefer opening downward in forms and panels",
      },
      {
        kind: "fixed",
        text: "Marketing pricing loads plans reliably (no stuck “Unable to load pricing” state)",
      },
      {
        kind: "security",
        text: "Removed the public unauthenticated send-email API relay",
      },
    ],
  },
];

export const KIND_LABEL: Record<ChangelogItem["kind"], string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
  security: "Security",
};
