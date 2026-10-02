import type { ReactNode } from "react";

const nav = ["Dashboard", "Projects", "CRM", "People", "Chat"];

export function ProductFrame({
  active,
  children,
  className = "",
  compact = false,
}: {
  active: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex overflow-hidden rounded-2xl bg-white text-left shadow-[0_24px_70px_rgba(0,35,111,0.18)] ring-1 ring-black/5 ${className}`}
    >
      <aside
        className={`shrink-0 bg-[#00236f] px-2.5 py-3 text-white ${
          compact ? "w-[96px]" : "w-[132px] sm:w-[168px]"
        }`}
      >
        <div className="mb-4 flex items-center gap-2 px-1.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-[11px] font-bold">
            M
          </span>
          {compact ? null : (
            <span className="text-[11px] font-bold tracking-tight">MYTASKLY</span>
          )}
        </div>
        <p className="px-2 pb-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white/45">
          Main
        </p>
        {nav.map((item) => (
          <div
            key={item}
            className={`mb-0.5 rounded-lg px-2 py-1.5 text-[11px] font-semibold ${
              item === active ? "bg-white/15 text-white" : "text-white/60"
            }`}
          >
            {item}
          </div>
        ))}
      </aside>
      <div className="min-w-0 flex-1 bg-[#f3f5fb]">{children}</div>
    </div>
  );
}

export function BoardScreen({ compact = false }: { compact?: boolean }) {
  const columns = [
    {
      name: "Open",
      dot: "bg-sky-500",
      cards: [
        ["Auth refresh", "Backend", "High"],
        ["API docs", "Writing", "Normal"],
      ],
    },
    {
      name: "In progress",
      dot: "bg-amber-500",
      cards: [
        ["Payroll batch", "People", "High"],
        ["Lead follow-up", "Sales", "Today"],
      ],
    },
    {
      name: "Review",
      dot: "bg-violet-500",
      cards: [["Offer letter", "HR", "Waiting"]],
    },
    {
      name: "Done",
      dot: "bg-emerald-500",
      cards: [["Sprint board", "Shipped", "Done"]],
    },
  ] as const;

  return (
    <ProductFrame active="Projects" compact={compact} className={compact ? "h-full" : "min-h-[280px]"}>
      <div className="flex items-center justify-between border-b border-black/5 bg-white px-3 py-2">
        <p className="text-xs font-bold text-[#00236f]">Platform</p>
        <div className="flex gap-1 text-[10px] font-bold">
          <span className="rounded-md bg-[#00236f] px-2 py-1 text-white">Board</span>
          <span className="rounded-md px-2 py-1 text-slate-400">List</span>
          <span className="hidden rounded-md px-2 py-1 text-slate-400 sm:inline">Timeline</span>
        </div>
      </div>
      <div className={`grid gap-2 p-2 ${compact ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-4"}`}>
        {(compact ? columns.slice(0, 2) : columns).map((column) => (
          <div key={column.name} className="rounded-xl bg-white/70 p-1.5">
            <p className="flex items-center gap-1 px-1 text-[10px] font-bold text-[#00236f]">
              <span className={`h-1.5 w-1.5 rounded-full ${column.dot}`} />
              {column.name}
            </p>
            {column.cards.map(([title, meta, tag]) => (
              <div key={title} className="mt-1.5 rounded-lg bg-white p-2 shadow-sm">
                <p className="text-[11px] font-semibold leading-snug text-slate-900">{title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] text-slate-400">{meta}</span>
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}

export function CrmScreen({ compact = false }: { compact?: boolean }) {
  const stages = [
    ["New", "$18k", "Northwind"],
    ["Talking", "$42k", "Harbor"],
    ["Proposal", "$27k", "Lumen"],
  ];
  return (
    <ProductFrame active="CRM" compact={compact} className={compact ? "h-full" : ""}>
      <div className="border-b border-black/5 bg-white px-3 py-2">
        <p className="text-xs font-bold text-[#00236f]">Pipeline</p>
      </div>
      <div className="space-y-2 p-3">
        {stages.map(([stage, value, name]) => (
          <div key={stage} className="rounded-xl bg-white p-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-slate-900">{name}</p>
              <p className="text-[11px] font-semibold text-[#00236f]">{value}</p>
            </div>
            <p className="mt-1 text-[10px] text-slate-400">{stage} · follow-up today</p>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}

export function PeopleScreen({ compact = false }: { compact?: boolean }) {
  const rows = [
    ["A. Rahman", "In", "Engineering"],
    ["S. Khan", "Leave", "Design"],
    ["M. Ali", "In", "Delivery"],
  ];
  return (
    <ProductFrame active="People" compact={compact} className={compact ? "h-full" : ""}>
      <div className="border-b border-black/5 bg-white px-3 py-2">
        <p className="text-xs font-bold text-[#00236f]">Attendance</p>
      </div>
      <div className="p-3">
        {rows.map(([name, state, team]) => (
          <div key={name} className="mb-2 flex items-center justify-between rounded-xl bg-white px-2.5 py-2 shadow-sm">
            <div>
              <p className="text-[11px] font-bold text-slate-900">{name}</p>
              <p className="text-[10px] text-slate-400">{team}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                state === "Leave" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {state}
            </span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}

export function ChatScreen({ compact = false }: { compact?: boolean }) {
  return (
    <ProductFrame active="Chat" compact={compact} className={compact ? "h-full" : ""}>
      <div className="border-b border-black/5 bg-white px-3 py-2">
        <p className="text-xs font-bold text-[#00236f]">Delivery</p>
      </div>
      <div className="space-y-2 p-3">
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-2.5 py-2 text-[11px] text-slate-800 shadow-sm">
          Payroll batch is in review.
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#00236f] px-2.5 py-2 text-[11px] text-white">
          Assign it to A. Rahman. She is in today.
        </div>
      </div>
    </ProductFrame>
  );
}
