"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    panel: "bg-[#1d4ed8]",
    kicker: "Delivery",
    quote:
      "The board already knows who is on leave, who owns the task, and which deal opened the work.",
    role: "Project lead",
    href: "/projects",
    photo: "/portraits/delivery.jpg",
  },
  {
    panel: "bg-[#15803d]",
    kicker: "Sales",
    quote:
      "Leads, follow-ups, and the sales dashboard sit in the same place as the projects they create.",
    role: "Account lead",
    href: "/crm",
    photo: "/portraits/sales.jpg",
  },
  {
    panel: "bg-[#b45309]",
    kicker: "People",
    quote:
      "Attendance, leave, and payroll stay on the employee record that projects already use.",
    role: "People lead",
    href: "/hr",
    photo: "/portraits/people.jpg",
  },
  {
    panel: "bg-[#6d28d9]",
    kicker: "Chat",
    quote:
      "Messages use the company directory. Unread work does not live in a second subscription.",
    role: "Team lead",
    href: "/chat",
    photo: "/portraits/chat.jpg",
  },
];

export function StoryRail() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const max = Math.max(0, stories.length - visible);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const apply = () => setVisible(query.matches ? 2 : 1);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <div>
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Previous desk"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-900 shadow-sm disabled:opacity-40"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next desk"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-900 shadow-sm disabled:opacity-40"
          disabled={index === max}
          onClick={() => setIndex((value) => Math.min(max, value + 1))}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / stories.length)}%)` }}
        >
          {stories.map((story) => (
            <article key={story.kicker} className="w-full shrink-0 pr-5 md:w-1/2">
              <div className="relative h-[420px]">
                <div className="absolute bottom-6 left-0 top-6 z-10 w-[42%] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                  <img
                    src={story.photo}
                    alt=""
                    className="h-full w-full object-cover object-top grayscale"
                  />
                </div>
                <div
                  className={`absolute bottom-0 right-0 top-0 z-20 flex w-[68%] flex-col rounded-[28px] ${story.panel} py-8 pl-16 pr-6 text-white sm:pl-[4.5rem]`}
                >
                  <p className="text-lg font-semibold tracking-tight">{story.kicker}</p>
                  <p className="mt-5 text-xl font-medium leading-snug">“{story.quote}”</p>
                  <p className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    {story.role}
                  </p>
                  <Link href={story.href} className="mt-3 text-sm font-semibold text-white">
                    See this module →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
