export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  kicker: string;
  paragraphs: string[];
};

export const posts: Article[] = [
  {
    slug: "one-workspace-instead-of-a-stack",
    title: "What a software house pays for before it has one workspace",
    description:
      "Jira, Asana, HubSpot, BambooHR, Slack, Notion, monday.com, and Toggl Track each bill per person. Here is how those published list prices add up.",
    date: "2026-10-02",
    kicker: "Cost",
    paragraphs: [
      "A software house rarely buys one system. It buys a board, a CRM, an HR suite, a messenger, a docs tool, and a timer. Each one has its own seats, its own directory, and its own invoice.",
      "Published list prices in 2026 put Jira Standard near $9.05 per person on monthly billing under 100 users, Asana Starter at $10.99 billed annually, monday.com Basic at $9, HubSpot Sales Hub Starter at a regular $20 per seat, BambooHR Core at $10 per employee (or a $250 monthly floor at 25 people or fewer), Slack Pro at $8.75, Notion Plus at $12, and Toggl Track Starter at $9 billed annually.",
      "MyTaskly keeps projects, CRM, HR, and chat on one permission model. The savings calculator on this site uses those list prices beside the workspace plans published at api.mytaskly.io, so a team can see the yearly gap.",
    ],
  },
  {
    slug: "modules-follow-the-company",
    title: "Modules follow the company, and roles follow the person",
    description:
      "How MyTaskly hides CRM, chat, HR, and the rest when a company turns a module off, and how a role still limits what one person can open.",
    date: "2026-10-02",
    kicker: "Product",
    paragraphs: [
      "MyTaskly is not one screen for every employee. A company turns modules on: projects, CRM, HR, chat, resources, inventory, the client portal, and developer tools. A person then gets a role inside that company.",
      "If CRM is off, the sales dashboard and the CRM menu stay hidden, including for someone who would otherwise see sales. If chat is off, the messenger and its unread count stay out of the sidebar. The same switch exists for HR and resources.",
      "Inside an enabled module, the role still matters. A member without HR access does not open the employee directory. An invite can require a reporting manager when the role asks for one. The Member role always asks. A custom role can be set to ask as well.",
    ],
  },
  {
    slug: "from-lead-to-board",
    title: "From a lead to a board, without copying the client",
    description:
      "Why a deal and the project it creates should share the same people, instead of living in two products.",
    date: "2026-10-02",
    kicker: "Workflow",
    paragraphs: [
      "In a split stack, sales lives in a CRM and delivery lives on a board. The client’s name is typed twice. The person who sold the work is not the person the board knows.",
      "In MyTaskly the lead, the contacts, and the deal sit in CRM. The project that delivers the work uses the same organization members. A follow-up and a task can name the same person because there is one directory.",
      "Teams that do not sell can turn CRM off. The projects, the people record, and chat remain. The menu follows that choice.",
    ],
  },
];

export const guides: Article[] = [
  {
    slug: "how-mytaskly-fits-together",
    title: "How MyTaskly fits together",
    description:
      "The short tour: one company, shared people, and the modules you turn on.",
    date: "2026-10-02",
    kicker: "Start here",
    paragraphs: [
      "You create an organization. That organization is the company: its members, its roles, and its modules.",
      "Projects hold the delivery work: boards, lists, calendars, and timelines. People on a task are project members drawn from the company.",
      "CRM holds leads, contacts, companies, and deals, plus follow-ups and a sales dashboard. HR holds the employee record, attendance, leave, shifts, payroll, and recruitment. Chat is direct messages and groups for those same members.",
      "A platform admin chooses which of those modules the company can see. A role then decides what one person can do inside the modules that are on.",
    ],
  },
  {
    slug: "run-a-project-board",
    title: "Run a project board",
    description:
      "Sections, views, assignees, and labels on a MyTaskly project.",
    date: "2026-10-02",
    kicker: "Projects",
    paragraphs: [
      "Open Projects and create a project. Add the people who should see it. Project membership is separate from the company directory, so not everyone in the company is on every board.",
      "The board is columns you name and color. The same tasks open as a list, a calendar, or a timeline. A task can have an assignee, labels, a priority, subtasks, comments, and files.",
      "The assignee list is the project’s members. If HR is on, that person is the same employee record used for leave and attendance.",
    ],
  },
  {
    slug: "work-a-pipeline",
    title: "Work a pipeline",
    description:
      "Leads, follow-ups, and the sales dashboard inside the same workspace.",
    date: "2026-10-02",
    kicker: "CRM",
    paragraphs: [
      "CRM is available when the company has the module on. Leads, contacts, companies, and deals share the workspace with projects.",
      "Log a follow-up or an activity on the record you are working. Templates, sequences, and auto replies cover the repeated outreach. Managers open the sales dashboard for the numbers.",
      "If the company turns CRM off, those menus and the sales dashboard are hidden. A reporting manager does not keep a sales link that the company has disabled.",
    ],
  },
  {
    slug: "invite-with-a-reporting-manager",
    title: "Invite someone and name a reporting manager",
    description:
      "When an invite asks for a manager, and what that does to the employee record.",
    date: "2026-10-02",
    kicker: "People",
    paragraphs: [
      "From the team settings, invite a person and choose their organization role. The Member role always asks for a reporting manager. A custom role asks only when that option is turned on in the role editor.",
      "The manager you pick must be an employee whose role is allowed to receive reports. The invite stores that choice.",
      "When the person accepts, the reporting line is written onto their employee record. Later leave and attendance use that same record.",
    ],
  },
];

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
