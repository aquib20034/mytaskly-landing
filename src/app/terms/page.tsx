import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — MyTaskly",
  description: "The terms that govern your use of MyTaskly.", 
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 24, 2026">
      <p>
        These Terms govern your access to and use of MyTaskly&apos;s website
        and hosted application. By creating an account or using the service,
        you agree to these Terms.
      </p>

      <h2>1. Your account</h2>
      <p>
        You must provide accurate information when registering and keep your
        credentials secure. You are responsible for activity that happens
        under your account. If you create a workspace on behalf of a company,
        you confirm you have authority to bind that company to these Terms.
      </p>

      <h2>2. Acceptable use</h2>
      <p>
        Don&apos;t use MyTaskly to:
      </p>
      <ul>
        <li>Break the law, infringe intellectual property, or harm others</li>
        <li>Send spam or unsolicited communications</li>
        <li>Reverse-engineer, scrape at scale, or attempt to disrupt the service</li>
        <li>Upload malware, illegal content, or content you don&apos;t have rights to</li>
      </ul>

      <h2>3. Your content</h2>
      <p>
        You retain ownership of the content you put into MyTaskly. You grant
        us a limited licence to store, process, and display it solely to
        provide the service. You are responsible for ensuring you have the
        right to use and share any content you upload.
      </p>

      <h2>4. Subscription and payment</h2>
      <p>
        Paid plans are billed in advance on a monthly basis. You can cancel
        at any time; your plan stays active through the end of the paid
        period. Fees are non-refundable except where required by law.
      </p>

      <h2>5. Free trial</h2>
      <p>
        New workspaces get a 14-day free trial. At trial end, you must select
        a paid plan to keep the workspace active, or your data becomes
        read-only and is deleted after 30 days if no plan is selected.
      </p>

      <h2>6. Service availability</h2>
      <p>
        We aim for high uptime but do not guarantee uninterrupted service on
        standard plans. Enterprise plans include an SLA — see your order form
        for specifics.
      </p>

      <h2>7. Termination</h2>
      <p>
        You can terminate at any time by cancelling and deleting your
        workspace. We can suspend or terminate accounts that violate these
        Terms, with notice where feasible.
      </p>

      <h2>8. Disclaimers and liability</h2>
      <p>
        The service is provided &quot;as is&quot;. To the fullest extent
        allowed by law, MyTaskly disclaims implied warranties, and our
        aggregate liability for any claim is limited to the fees you paid in
        the 12 months preceding the claim.
      </p>

      <h2>9. Changes to these Terms</h2>
      <p>
        We may update these Terms as the product evolves. We&apos;ll give
        notice of material changes. Continuing to use the service after a
        change means you accept it.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction where
        MyTaskly is incorporated. Specific venue and jurisdiction to be
        confirmed by legal counsel.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:legal@mytaskly.io">legal@mytaskly.io</a>.
      </p>
    </LegalLayout>
  );
}
