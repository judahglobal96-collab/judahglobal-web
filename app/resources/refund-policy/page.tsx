import LegalPageLayout from '@/components/resources/legal-page-layout'
import LegalSection from '@/components/resources/legal-section'

export const metadata = {
  title: 'Refund Policy | Judah Global',
  description:
    'Official Judah Global Refund Policy governing payments, promotional placements, subscriptions, billing errors, chargebacks, and dispute resolution.',
}

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      category="Payments & Billing"
      title="Refund Policy"
      effectiveDate="May 9, 2026"
      lastUpdated="May 9, 2026"
      description="This Refund Policy explains Judah Global’s rules for digital services, promotional advertising placements, campaign services, event-related visibility products, and subscription-based platform features."
    >
      <LegalSection title="1. General Refund Policy">
        <p>
          Judah Global provides digital services, promotional advertising
          placements, campaign services, event-related visibility products, and
          subscription-based platform features.
        </p>

        <p>
          Unless otherwise stated in this Policy or required by applicable law,
          all payments made to Judah Global are non-refundable.
        </p>

        <p>
          By purchasing services through the Platform, you acknowledge and agree
          to this Refund Policy.
        </p>
      </LegalSection>

      <LegalSection title="2. Promotional Campaign Placement Refunds">
        <p>
          Refund requests for scheduled promotional campaigns and advertising
          placements may be eligible only under the following conditions:
        </p>

        <ul>
          <li>
            The refund request must be submitted at least thirty (30) days
            before the scheduled promotional activation date.
          </li>
          <li>
            The promotional placement must not have entered an active delivery,
            scheduling lock, approval-finalization, or rendering period.
          </li>
          <li>
            The campaign must not have already begun displaying or distributing.
          </li>
        </ul>

        <p>Eligible approved refunds may be subject to:</p>

        <ul>
          <li>Processing fees</li>
          <li>Payment processor deductions</li>
          <li>Administrative handling charges</li>
        </ul>

        <p>
          Judah Global reserves the right to deny refund requests submitted less
          than thirty (30) days before activation.
        </p>
      </LegalSection>

      <LegalSection title="3. Immediate Activation Promotions">
        <p>
          Certain promotional products may activate immediately upon purchase or
          shortly after approval.
        </p>

        <p>These may include, but are not limited to:</p>

        <ul>
          <li>Featured Event promotions</li>
          <li>Major Event promotions</li>
          <li>Homepage promotional placements</li>
          <li>Discovery placements</li>
          <li>Instant visibility upgrades</li>
          <li>Sponsored advertising boosts</li>
        </ul>

        <p>
          Because these services begin delivery immediately, all immediately
          activated promotional purchases are strictly non-refundable.
        </p>
      </LegalSection>

      <LegalSection title="4. Annual Subscription Services">
        <p>
          Annual subscriptions, memberships, platform access plans,
          organization subscriptions, and recurring annual billing products are
          non-refundable once charged.
        </p>

        <p>
          Users are responsible for managing their subscription status before
          renewal dates.
        </p>

        <p>To avoid future charges:</p>

        <ul>
          <li>
            Users must cancel or unsubscribe before the anniversary billing
            date.
          </li>
          <li>Cancellation stops future renewals only.</li>
          <li>
            Cancellation does not generate prorated refunds for unused time.
          </li>
        </ul>

        <p>
          Access to subscription benefits may continue until the end of the
          current billing cycle unless otherwise stated.
        </p>
      </LegalSection>

      <LegalSection title="5. Failed or Incomplete Campaign Assets">
        <p>
          Sponsors and organizations are responsible for providing required
          promotional materials, including:
        </p>

        <ul>
          <li>Flyers</li>
          <li>Images</li>
          <li>Official Event Flyers</li>
          <li>Logos</li>
          <li>Video assets</li>
          <li>Campaign copy</li>
          <li>Event details</li>
        </ul>

        <p>
          Failure to provide approved media or required assets before scheduled
          campaign delivery does not guarantee a refund.
        </p>

        <p>
          Promotional placements lacking approved media at scheduled activation
          time may not render publicly.
        </p>
      </LegalSection>

      <LegalSection title="6. Duplicate Charges and Billing Errors">
        <p>Judah Global may review refund requests for:</p>

        <ul>
          <li>Duplicate payments</li>
          <li>Incorrect billing amounts</li>
          <li>Verified technical payment processing errors</li>
          <li>Unauthorized transactions subject to investigation</li>
        </ul>

        <p>
          Refund approval is determined at Judah Global’s sole discretion.
        </p>
      </LegalSection>

      <LegalSection title="7. Chargebacks and Payment Disputes">
        <p>
          Users agree to contact Judah Global first to attempt resolution before
          initiating payment disputes or chargebacks.
        </p>

        <p>
          Fraudulent, abusive, or bad-faith chargebacks may result in:
        </p>

        <ul>
          <li>Account suspension</li>
          <li>Permanent platform restrictions</li>
          <li>Loss of access to services</li>
          <li>Future payment limitations</li>
        </ul>

        <p>
          Judah Global reserves the right to dispute chargebacks with
          supporting transaction and usage evidence.
        </p>
      </LegalSection>

      <LegalSection title="8. Refund Processing Time">
        <p>
          Approved refunds may require approximately 5–10 business days to
          process depending on:
        </p>

        <ul>
          <li>Payment provider</li>
          <li>Financial institution</li>
          <li>Card issuer</li>
          <li>Banking network</li>
        </ul>

        <p>
          Processing timelines are outside Judah Global’s direct control.
        </p>
      </LegalSection>

      <LegalSection title="9. Non-Refundable Services">
        <p>
          Unless otherwise required by law, the following are generally
          non-refundable:
        </p>

        <ul>
          <li>Completed promotional placements</li>
          <li>Active campaigns</li>
          <li>Immediate activation upgrades</li>
          <li>Featured event purchases</li>
          <li>Major Event purchases</li>
          <li>Subscription renewals</li>
          <li>Expedited review services</li>
          <li>Digital advertising services already delivered</li>
          <li>Administrative processing fees</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Mediation and Dispute Resolution">
        <p>
          Users agree to first attempt to resolve any billing, refund, payment,
          subscription, promotional, or service-related dispute directly with
          Judah Global through good-faith communication.
        </p>

        <p>
          If a dispute cannot be resolved informally, the parties agree that
          unresolved disputes shall be submitted to mediation before pursuing
          litigation, except where prohibited by applicable law.
        </p>

        <p>The mediation process shall:</p>

        <ul>
          <li>Be conducted in good faith</li>
          <li>Occur in a mutually agreed jurisdiction or virtual format</li>
          <li>
            Be handled through a mutually agreed mediator or mediation service
          </li>
          <li>Be governed by applicable laws and procedures</li>
        </ul>

        <p>
          Each party shall generally bear its own legal and mediation-related
          costs unless otherwise determined during the mediation process or
          required by law.
        </p>

        <p>
          Nothing in this section prevents Judah Global from seeking injunctive
          relief, protecting intellectual property rights, or addressing fraud,
          abuse, unlawful activity, or emergency legal matters.
        </p>
      </LegalSection>

      <LegalSection title="11. Policy Changes">
        <p>
          Judah Global reserves the right to modify or update this Refund Policy
          at any time.
        </p>

        <p>Updated policies become effective upon posting to the Platform.</p>

        <p>
          Continued use of Judah Global services constitutes acceptance of
          revised policies.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Information">
        <p>
          Questions regarding refunds or billing matters should be directed
          through Judah Global’s official support or contact channels available
          on the Platform.
        </p>

        <p>
          By purchasing services through Judah Global, you acknowledge that you
          have read, understood, and agreed to this Refund Policy.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}