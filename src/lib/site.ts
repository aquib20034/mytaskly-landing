import { SITE_URL } from "@/lib/config";

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/projects", label: "Projects" },
  { href: "/crm", label: "CRM" },
  { href: "/hr", label: "HR" },
  { href: "/chat", label: "Chat" },
  { href: "/savings", label: "Savings" },
  { href: "/pricing", label: "Pricing" },
];

export const productPages = [
  {
    href: "/projects",
    kicker: "Projects",
    title: "Boards, timelines, and the work in between",
    summary:
      "Plan delivery on kanban boards, lists, calendars, and timelines. Custom sections, labels, assignees, and subtasks stay on the same task.",
    points: [
      "Kanban boards with custom sections and colors",
      "List, calendar, and timeline views",
      "Assignees, labels, priorities, and subtasks",
      "Comments, attachments, and activity history",
      "Project members separate from the company directory",
    ],
    benefits: [
      "One board for delivery instead of a separate project subscription",
      "Assignees come from the company directory, including who is on leave",
      "List, calendar, and timeline stay on the same task",
    ],
  },
  {
    href: "/crm",
    kicker: "CRM",
    title: "Leads and deals next to the work they create",
    summary:
      "Track leads, contacts, companies, and deals without a second login. Outreach, follow-ups, and a sales dashboard live in the same workspace.",
    points: [
      "Leads, contacts, companies, and deals",
      "Follow-ups, activities, and email threads",
      "Templates, sequences, and auto replies",
      "Sales dashboard for managers",
      "Optional scraping agent for sourced leads",
    ],
    benefits: [
      "The pipeline sits next to the projects a deal creates",
      "Managers see a sales dashboard without a second CRM login",
      "Turn CRM off and the sales menu disappears for every role",
    ],
  },
  {
    href: "/hr",
    kicker: "People",
    title: "The directory, attendance, leave, and payroll",
    summary:
      "Employees, departments, shifts, leave, and payroll sit beside the projects those people deliver. Reporting managers are part of the invite, not a spreadsheet.",
    points: [
      "Employee directory, departments, and teams",
      "Attendance, branches, and shift schedules",
      "Leave requests and manager approvals",
      "Payroll batches",
      "Recruitment and reporting structure",
    ],
    benefits: [
      "Attendance, leave, and payroll share the employee record used on projects",
      "Invites can require a reporting manager",
      "HR can be switched off without leaving orphaned menus",
    ],
  },
  {
    href: "/chat",
    kicker: "Chat",
    title: "Messages that already know the team",
    summary:
      "Direct messages and groups use the same people as projects and HR. Unread counts stay in the workspace instead of another app.",
    points: [
      "Direct messages and group chats",
      "Unread counts in the sidebar",
      "Same members, roles, and organization",
      "No separate chat subscription",
    ],
    benefits: [
      "Direct messages and groups use organization members",
      "Unread counts stay in the workspace sidebar",
      "Chat can be turned off per company",
    ],
  },
] as const;

export const faqs = [
  {
    q: "What is MyTaskly?",
    a: "MyTaskly is one workspace for projects, CRM, HR, and team chat. A software house or small business uses it instead of paying for a separate project tool, CRM, HR suite, and messenger.",
  },
  {
    q: "Which tools does MyTaskly replace?",
    a: "It covers the daily jobs of a project board, a CRM, an HR directory with attendance and leave, and team chat. Companies turn modules on or off, so a team can run projects and HR without CRM.",
  },
  {
    q: "How does MyTaskly save money?",
    a: "Separate apps charge per person. The savings calculator adds those published list prices and compares the total with the current MyTaskly plans.",
  },
  {
    q: "Can I turn CRM off?",
    a: "Yes. Platform admins enable modules per company. If CRM is off, the sales dashboard and CRM menu stay hidden. The same switch exists for Chat, Resources, HR, inventory, and the client portal.",
  },
  {
    q: "Who is MyTaskly for?",
    a: "Software houses, agencies, and small businesses that have outgrown spreadsheets and do not want a stack of enterprise tools that do not share people or permissions.",
  },
  {
    q: "Does every role see every module?",
    a: "No. Organization roles and permissions decide what a person can open. A member without HR access does not see the employee directory. A company with CRM disabled does not see the sales dashboard.",
  },
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MyTaskly",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "MyTaskly is a workspace for projects, CRM, HR, and team chat.",
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MyTaskly",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "Projects, CRM, HR, and chat in one workspace for software houses and small businesses.",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
