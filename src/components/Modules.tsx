import { FolderKanban, Users, UserCog } from "lucide-react";

type Feature = { label: string; soon?: boolean };

type Module = {
  icon: typeof FolderKanban;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
};

const modules: Module[] = [
  {
    icon: FolderKanban,
    name: "Project Management",
    tagline: "Ship work on time.",
    description:
      "Plan sprints, track tasks, allocate engineers across projects, and see which deadlines are actually at risk — before they slip.",
    features: [
      { label: "Projects, milestones & sprints" },
      { label: "Kanban and Gantt views" },
      { label: "Resource allocation" },
      { label: "Time tracking per task" },
    ],
  },
  {
    icon: Users,
    name: "CRM",
    tagline: "Close the loop on clients.",
    description:
      "From first contact to renewal, in one pipeline. Link deals back to the projects your team is actually delivering.",
    features: [
      { label: "Lead & deal pipelines" },
      { label: "Client activity timeline" },
      { label: "Quotes and invoices" },
      { label: "Email sync with conversations", soon: true },
    ],
  },
  {
    icon: UserCog,
    name: "HR",
    tagline: "Run your people ops.",
    description:
      "Attendance, leaves, payroll, and employee records — designed for teams under 200, not for a Fortune 500 HRIS replacement.",
    features: [
      { label: "Attendance & shifts" },
      { label: "Leave requests & approvals" },
      { label: "Payroll runs" },
      { label: "Employee records & docs" },
    ],
  },
];

export function Modules() {
  return (
    <section id="modules" className="relative overflow-hidden bg-white py-24">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-navy-200/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Three modules. One platform.
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Everything your ops team spreadsheets
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            MyTaskly replaces the stack of disconnected tools most software
            houses grow into — without replacing the way you already work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {modules.map(({ icon: Icon, ...m }) => (
            <article
              key={m.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-300 to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-600 text-white shadow-cta">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy-900">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-navy-600">
                {m.tagline}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                {m.description}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink">
                {m.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-navy-500" />
                    <span className="flex flex-wrap items-center gap-2">
                      <span className={f.soon ? "text-ink-muted" : ""}>
                        {f.label}
                      </span>
                      {f.soon && <ComingSoonBadge />}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-navy-200 bg-navy-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-700">
      <span className="h-1.5 w-1.5 rounded-full bg-navy-500" />
      Coming soon
    </span>
  );
}
