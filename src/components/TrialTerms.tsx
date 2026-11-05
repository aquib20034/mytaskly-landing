import { TRIAL_TERMS } from "@/lib/config";

/** One line of trial terms under a sign-up button. Renders nothing until the terms are set. */
export function TrialTerms({ className = "" }: { className?: string }) {
  if (!TRIAL_TERMS) return null;
  return <p className={`text-xs text-ink-muted ${className}`}>{TRIAL_TERMS}</p>;
}
