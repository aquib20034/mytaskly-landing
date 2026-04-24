import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — MyTaskly",
  description: "How MyTaskly collects, stores, and uses your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 24, 2026">
      <p>
        This Privacy Policy explains what information MyTaskly collects when
        you use our website (mytaskly.io) and our hosted application
        (app.mytaskly.io), how we use it, and the choices you have. By using
        our services, you agree to this policy.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Account information</h3>
      <p>
        When you create an account, we collect your name, email address,
        company name, and password (stored as a one-way hash).
      </p>
      <h3>Content you create</h3>
      <p>
        We store the projects, clients, deals, employee records, and other
        content you and your team add to MyTaskly. You retain ownership of
        this content.
      </p>
      <h3>Usage and device information</h3>
      <p>
        We collect basic request logs (IP address, browser, timestamp, page
        visited) to operate the service, diagnose issues, and prevent abuse.
      </p>
      <h3>Payment information</h3>
      <p>
        Payments are processed by a third-party provider. We do not store
        full card numbers on our servers.
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>To provide, maintain, and improve the service</li>
        <li>To authenticate you and secure your account</li>
        <li>To send transactional email (receipts, important changes)</li>
        <li>To respond to support requests</li>
        <li>To detect and prevent fraud or abuse</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with
        third-party service providers we rely on (hosting, email delivery,
        payment processing), and only to the extent they need it to perform
        their function. We may also disclose information when required by
        law.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We keep your account data while your workspace is active. If you
        cancel, your data is retained in read-only form for 30 days so you
        can export it, then deleted from production systems. Backups are
        purged on rolling schedules.
      </p>

      <h2>5. Your rights</h2>
      <p>
        You can access, export, correct, or delete your data at any time from
        within the product. If you are a resident of the EU, UK, or
        California, you have additional rights under applicable law — contact
        us to exercise them.
      </p>

      <h2>6. Security</h2>
      <p>
        Data is encrypted in transit (TLS) and at rest. Access to production
        systems is restricted to authorized personnel. No system is perfectly
        secure; you are responsible for keeping your password confidential.
      </p>

      <h2>7. Children</h2>
      <p>
        MyTaskly is not directed at children under 16, and we do not
        knowingly collect their information.
      </p>

      <h2>8. Changes</h2>
      <p>
        We will update this policy as the product evolves. Material changes
        will be announced by email or in-product notice.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:privacy@mytaskly.io">privacy@mytaskly.io</a>.
      </p>
    </LegalLayout>
  );
}
