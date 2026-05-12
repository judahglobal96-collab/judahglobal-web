import LegalPageLayout from '@/components/resources/legal-page-layout'
import LegalSection from '@/components/resources/legal-section'

export const metadata = {
  title: 'Email & Notification Policy | Judah Global',
  description:
    'Official Judah Global Email and Notification Policy governing automated communications, event workflow notices, promotional reminders, regional event emails, and platform messaging standards.',
}

export default function EmailNotificationPolicyPage() {
  return (
    <LegalPageLayout
      category="Communications"
      title="Email & Notification Policy"
      effectiveDate="May 9, 2026"
      lastUpdated="May 9, 2026"
      description="This policy establishes the official standards governing automated and manual communications sent through the Judah Global platform."
    >
      <LegalSection title="1. Purpose">
        <p>
          The Judah Global Email & Notification Policy establishes the official
          standards governing all automated and manual communications sent
          through the Judah Global platform.
        </p>

        <p>This policy ensures:</p>

        <ul>
          <li>Consistent user communication</li>
          <li>Regional relevance</li>
          <li>Sponsor accountability</li>
          <li>Event visibility accuracy</li>
          <li>Platform trust and compliance</li>
          <li>Controlled promotional delivery</li>
          <li>Proper moderation and approval workflows</li>
        </ul>

        <p>
          This policy applies to all users, organizations, sponsors,
          administrators, and platform-generated messaging systems.
        </p>
      </LegalSection>

      <LegalSection title="2. Communication Categories">
        <p>
          Judah Global communications are divided into the following categories:
        </p>

        <ul>
          <li>
            <strong>Account Notifications:</strong> Authentication,
            verification, and account activity
          </li>
          <li>
            <strong>Event Workflow Notifications:</strong> Submission,
            approval, rejection, and moderation
          </li>
          <li>
            <strong>Promotional Campaign Notifications:</strong> Promo purchase
            and media reminders
          </li>
          <li>
            <strong>Regional Event Notifications:</strong> Area-based event
            discovery emails
          </li>
          <li>
            <strong>Organization Notifications:</strong> Org portal and sponsor
            communications
          </li>
          <li>
            <strong>Admin Notifications:</strong> Internal moderation and
            operational alerts
          </li>
          <li>
            <strong>System Notifications:</strong> Platform maintenance, policy
            changes, and outages
          </li>
          <li>
            <strong>Transactional Notifications:</strong> Payment confirmations
            and receipts
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Notification Channels">
        <p>
          Judah Global supports the following official communication channels:
        </p>

        <ul>
          <li>
            <strong>Email:</strong> Primary
          </li>
          <li>
            <strong>In-Portal Notifications:</strong> Supported
          </li>
          <li>
            <strong>Admin Dashboard Alerts:</strong> Supported
          </li>
          <li>
            <strong>SMS:</strong> Future Enhancement
          </li>
          <li>
            <strong>Push Notifications:</strong> Future Enhancement
          </li>
        </ul>

        <p>
          Email remains the authoritative communication channel for all critical
          platform actions.
        </p>
      </LegalSection>

      <LegalSection title="4. Email Verification Policy">
        <h3>Verification Requirement</h3>

        <p>
          Before an event may move from Draft to Pending Review, the
          submitter’s email address must be verified.
        </p>

        <p>Verification standards include:</p>

        <ul>
          <li>OTP Type: 6-digit verification code</li>
          <li>Expiration Window: approximately 10 minutes</li>
          <li>Single-use verification tokens only</li>
          <li>Verification required for individual sponsors</li>
          <li>Verification required for organizations</li>
          <li>Verification required for event submitters</li>
        </ul>

        <p>Unverified events may not proceed to moderation review.</p>
      </LegalSection>

      <LegalSection title="5. Event Workflow Notifications">
        <p>
          The following notifications are mandatory within the event lifecycle.
        </p>

        <h3>Draft Created</h3>

        <p>Sent when an event draft is initially created.</p>

        <p>Includes:</p>

        <ul>
          <li>Draft confirmation</li>
          <li>Resume editing link</li>
          <li>Verification reminder</li>
        </ul>

        <h3>Submission Pending Review</h3>

        <p>Sent when an event moves to Pending status.</p>

        <p>Includes:</p>

        <ul>
          <li>Submission confirmation</li>
          <li>Expected review timeline</li>
          <li>Reminder that approval is required before public visibility</li>
        </ul>

        <h3>Event Approved</h3>

        <p>Sent when an admin approves an event.</p>

        <p>Includes:</p>

        <ul>
          <li>Approval confirmation</li>
          <li>Public event link</li>
          <li>Event code</li>
          <li>Discovery visibility confirmation</li>
          <li>Promotional upsell opportunities where applicable</li>
        </ul>

        <h3>Event Rejected</h3>

        <p>Sent when an admin rejects an event.</p>

        <p>Includes:</p>

        <ul>
          <li>Rejection reason</li>
          <li>Required corrections</li>
          <li>Re-submission instructions</li>
        </ul>

        <h3>Event Expiration Notice</h3>

        <p>Sent when an event is approaching expiration or has expired.</p>

        <p>Includes:</p>

        <ul>
          <li>Expiration status</li>
          <li>Renewal guidance where applicable</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Promotional Placement Notifications">
        <h3>Promo Purchase Confirmation</h3>

        <p>Sent immediately after successful payment.</p>

        <p>Includes:</p>

        <ul>
          <li>Placement type purchased</li>
          <li>Region</li>
          <li>Start date</li>
          <li>Duration</li>
          <li>Invoice or payment receipt</li>
          <li>Media upload instructions</li>
        </ul>

        <h3>Promo Media Reminder Policy</h3>

        <p>
          Judah Global enforces mandatory promotional media reminders.
          Reminders are automatically sent when:
        </p>

        <ul>
          <li>A promo placement is active or upcoming</li>
          <li>Required promo media has not been uploaded or approved</li>
        </ul>

        <p>Delivery channels include:</p>

        <ul>
          <li>Email</li>
          <li>In-portal alerts</li>
        </ul>

        <p>Suggested reminder timing:</p>

        <ul>
          <li>7 days before launch</li>
          <li>3 days before launch</li>
          <li>24 hours before launch</li>
        </ul>

        <p>Placements without approved media at launch time:</p>

        <ul>
          <li>Do not render publicly</li>
          <li>Do not automatically refund</li>
          <li>Remain tied to the purchased campaign window</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Regional Event Notification System">
        <h3>Purpose</h3>

        <p>
          Judah Global provides automated region-aware event discovery emails to
          registered users.
        </p>

        <p>These notifications help users discover:</p>

        <ul>
          <li>Upcoming faith events</li>
          <li>Conferences</li>
          <li>Worship gatherings</li>
          <li>Major events</li>
          <li>Featured regional activities</li>
        </ul>

        <h3>Automation Standard</h3>

        <p>Regional event emails are fully automated. There is:</p>

        <ul>
          <li>No manual curation</li>
          <li>No manual send approval process</li>
          <li>No hand-selected editorial workflow</li>
        </ul>

        <p>Automated flow:</p>

        <ol>
          <li>Event approved</li>
          <li>Event indexed into discovery system</li>
          <li>Eligibility validation runs</li>
          <li>Events queued automatically</li>
          <li>Scheduled notification job executes</li>
          <li>Emails distributed to matching users</li>
        </ol>

        <h3>Send Frequency</h3>

        <p>Regional event notification emails are sent twice weekly.</p>

        <p>Recommended send cadence:</p>

        <ul>
          <li>Wednesday evening</li>
          <li>Saturday evening</li>
        </ul>

        <h3>Event Selection Rules</h3>

        <p>Each email should contain 2–3 qualifying events maximum.</p>

        <p>Priority order:</p>

        <ol>
          <li>Major Events</li>
          <li>Featured Events</li>
          <li>City relevance boost</li>
          <li>Soonest upcoming events</li>
        </ol>

        <h3>Geographic Targeting Rules</h3>

        <p>
          Region is the primary filter. City proximity is the secondary boost.
        </p>

        <p>
          Premium promotional placements never bleed across regions and never
          cross-display into unrelated markets.
        </p>

        <p>
          Only standard paid events may participate in controlled fallback
          discovery behavior.
        </p>

        <h3>Eligibility Timing Rules</h3>

        <p>
          There is no maximum future-date restriction. However, events too close
          to send time are excluded.
        </p>

        <p>Examples:</p>

        <ul>
          <li>Wednesday email excludes Wednesday, Thursday, and Friday events</li>
          <li>Saturday email excludes Saturday, Sunday, and Monday events</li>
        </ul>

        <p>
          This prevents users from receiving notifications too late to attend.
        </p>
      </LegalSection>

      <LegalSection title="8. Notification Content Standards">
        <p>
          All Judah Global emails must follow brand and communication standards.
        </p>

        <h3>Brand Requirements</h3>

        <ul>
          <li>Judah Global logo/header</li>
          <li>Premium black/gold styling</li>
          <li>Mobile-responsive formatting</li>
          <li>CTA buttons</li>
          <li>Footer branding</li>
        </ul>

        <h3>Tone Standards</h3>

        <p>Communication tone must be:</p>

        <ul>
          <li>Professional</li>
          <li>Faith-centered</li>
          <li>Respectful</li>
          <li>Clear</li>
          <li>Non-political</li>
          <li>Non-divisive</li>
        </ul>

        <h3>Required Footer Elements</h3>

        <p>Every outbound email must include:</p>

        <ul>
          <li>Platform identification</li>
          <li>Contact/support information</li>
          <li>User preference management</li>
          <li>Unsubscribe option where legally required</li>
          <li>Copyright notice</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. User Preference & Opt-Out Policy">
        <p>Users must be able to manage:</p>

        <ul>
          <li>Regional notification preferences</li>
          <li>Marketing communications</li>
          <li>Event discovery emails</li>
          <li>Organization communications</li>
        </ul>

        <p>
          Critical transactional emails cannot be fully disabled and include
          verification, payment, and security notifications.
        </p>
      </LegalSection>

      <LegalSection title="10. Admin Notification Policy">
        <p>Admins receive notifications for:</p>

        <ul>
          <li>Pending review queue activity</li>
          <li>Major event submissions</li>
          <li>Failed payment scenarios</li>
          <li>Moderation escalations</li>
          <li>Promo inventory concerns</li>
          <li>Media approval issues</li>
        </ul>

        <p>Admin alerts may appear:</p>

        <ul>
          <li>In dashboard</li>
          <li>Via email</li>
          <li>Via internal operational tooling</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Abuse Prevention & Rate Limiting">
        <p>Judah Global reserves the right to:</p>

        <ul>
          <li>Rate limit email sends</li>
          <li>Suppress suspicious campaigns</li>
          <li>Prevent spam behavior</li>
          <li>Disable abusive notification activity</li>
        </ul>

        <p>The platform may temporarily suspend:</p>

        <ul>
          <li>Event submissions</li>
          <li>Promotional visibility</li>
          <li>Messaging access</li>
          <li>Organization communication privileges</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Compliance & Privacy">
        <p>All communications must comply with applicable:</p>

        <ul>
          <li>Anti-spam regulations</li>
          <li>Privacy regulations</li>
          <li>Email marketing standards</li>
          <li>Platform terms of service</li>
        </ul>

        <p>Judah Global does not publicly expose:</p>

        <ul>
          <li>Private user profiles</li>
          <li>Internal moderation data</li>
          <li>Submitter-only metadata</li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Future Notification Enhancements">
        <p>Planned future enhancements include:</p>

        <ul>
          <li>Push notifications</li>
          <li>SMS alerts</li>
          <li>Personalized recommendation feeds</li>
          <li>Saved event alerts</li>
          <li>AI-ranked discovery notifications</li>
          <li>Smart timezone optimization</li>
          <li>Sponsor campaign analytics</li>
          <li>Engagement scoring</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Enforcement">
        <p>
          Failure to comply with Judah Global communication standards may result
          in:
        </p>

        <ul>
          <li>Event suppression</li>
          <li>Campaign rejection</li>
          <li>Account moderation</li>
          <li>Promotional removal</li>
          <li>Administrative suspension</li>
        </ul>
      </LegalSection>

      <LegalSection title="15. Policy Ownership">
        <p>This policy is owned and maintained by:</p>

        <ul>
          <li>Judah Global Platform Administration</li>
          <li>Product Operations</li>
          <li>Moderation & Communications Team</li>
        </ul>

        <p>
          All future notification features and communication workflows must
          comply with this policy unless formally superseded by an approved
          platform revision.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}