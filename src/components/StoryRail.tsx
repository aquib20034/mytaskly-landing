import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * How each team uses the workspace. These are product scenarios, not customer quotes:
 * add named customer quotes here once real customers agree to be quoted.
 */
const desks = [
  {
    kicker: "Delivery",
    who: "For project leads",
    text: "The board already knows who is on leave, who owns the task, and which deal opened the work.",
    href: "/projects",
  },
  {
    kicker: "Sales",
    who: "For account leads",
    text: "Leads, follow-ups, and the sales dashboard sit in the same place as the projects they create.",
    href: "/crm",
  },
  {
    kicker: "People",
    who: "For HR and admin",
    text: "Attendance, leave, and payroll stay on the employee record that projects already use.",
    href: "/hr",
  },
  {
    kicker: "Chat",
    who: "For every team",
    text: "Messages use the company directory. Team chat is not a second subscription.",
    href: "/chat",
  },
];

export function StoryRail() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {desks.map((desk) => (
        <Link
          key={desk.kicker}
          href={desk.href}
          className="group flex flex-col rounded-[28px] border border-navy-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-600">{desk.who}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">{desk.kicker}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">{desk.text}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900">
            See how it works
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
