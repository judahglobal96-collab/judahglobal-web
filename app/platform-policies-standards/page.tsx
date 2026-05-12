import LegalPageLayout from '@/components/resources/legal-page-layout'
import LegalSection from '@/components/resources/legal-section'

export const metadata = {
  title: 'Platform Policies & Standards | Judah Global',
  description:
    'Official Judah Global Platform Policies and Standards covering event approvals, media moderation, promotions, event accuracy, regional governance, and notifications.',
}

export default function PlatformPoliciesStandardsPage() {
  return (
    <LegalPageLayout
      category="Platform Standards"
      title="Platform Policies & Standards"
      effectiveDate="May 10, 2026"
      lastUpdated="May 10, 2026"
      description="This operational summary outlines Judah Global standards for event quality, approvals, media, promotions, safety, and regional platform governance."
    >
      <LegalSection title="1. Event Approval Standards">
        <p>
          Judah Global maintains a moderation and approval system to ensure
          event quality, platform integrity, and regional compliance.
        </p>

        <h3>Approval Workflow</h3>

        <p>All public events follow the official lifecycle:</p>

        <p>Draft → Pending Review → Approved → Rejected → Expired</p>

        <h3>Submission Requirements</h3>

        <p>Before approval, events must include:</p>

        <ul>
          <li>Event title</li>
          <li>Event description</li>
          <li>Start date and time</li>
          <li>Timezone</li>
          <li>Venue or location information</li>
          <li>Sponsor or organization information</li>
          <li>Verified submitter email</li>
        </ul>

        <p>Incomplete events may not move into public discovery.</p>

        <h3>Moderation Rules</h3>

        <p>Judah Global administrators may:</p>

        <ul>
          <li>Approve or reject submissions</li>
          <li>Request corrections</li>
          <li>Edit minor formatting issues</li>
          <li>Remove misleading or inappropriate content</li>
          <li>Return modified events to review status</li>
        </ul>

        <p>Events may be rejected for:</p>

        <ul>
          <li>False or misleading information</li>
          <li>Offensive content</li>
          <li>Spam behavior</li>
          <li>Missing schedule information</li>
          <li>Unauthorized promotional claims</li>
          <li>Policy violations</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Media Moderation Policy">
        <p>All uploaded media is subject to moderation review.</p>

        <h3>Media Types Covered</h3>

        <ul>
          <li>Event flyers</li>
          <li>Sponsor logos</li>
          <li>Promotional graphics</li>
          <li>Videos</li>
          <li>Advertisements</li>
          <li>Campaign assets</li>
        </ul>

        <h3>Prohibited Content</h3>

        <p>The following content is prohibited:</p>

        <ul>
          <li>Explicit or illegal material</li>
          <li>Hate speech or discriminatory imagery</li>
          <li>Violent or graphic content</li>
          <li>Fraudulent promotions</li>
          <li>Copyright violations</li>
          <li>Misleading event imagery</li>
          <li>Malware or unsafe links</li>
        </ul>

        <h3>Media Review Standards</h3>

        <p>Judah Global reserves the right to:</p>

        <ul>
          <li>Reject media submissions</li>
          <li>Remove non-compliant content</li>
          <li>Request replacement assets</li>
          <li>Disable rendering of unapproved media</li>
        </ul>

        <p>
          Promotional placements without approved media may not display
          publicly.
        </p>
      </LegalSection>

      <LegalSection title="3. Promotional Placement Standards">
        <p>
          Judah Global supports premium promotional placements for sponsors and
          organizations.
        </p>

        <h3>Placement Types</h3>

        <p>Examples include:</p>

        <ul>
          <li>Homepage Hero</li>
          <li>Homepage Top Row</li>
          <li>Discovery Top Row</li>
          <li>Featured Badge</li>
          <li>Major Events</li>
        </ul>

        <h3>Promotional Rules</h3>

        <ul>
          <li>Promotional inventory is region-based</li>
          <li>Placements require successful payment</li>
          <li>Sponsors must upload approved promotional media</li>
          <li>Promotions must accurately represent the event</li>
          <li>Sponsored placement does not guarantee endorsement</li>
        </ul>

        <h3>Inventory Standards</h3>

        <p>Judah Global uses:</p>

        <ul>
          <li>Weekly placement capacity</li>
          <li>Placement-type inventory</li>
          <li>Region-specific promotion control</li>
        </ul>

        <p>
          Inventory is not reserved during incomplete checkout sessions.
        </p>

        <h3>Rendering Rules</h3>

        <p>Promotions without approved media:</p>

        <ul>
          <li>Will not render publicly</li>
          <li>May still consume purchased campaign windows</li>
          <li>Remain subject to moderation review</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Event Accuracy Standards">
        <p>
          Event organizers are responsible for maintaining accurate and current
          event information.
        </p>

        <h3>Required Accuracy Areas</h3>

        <p>Event listings must accurately represent:</p>

        <ul>
          <li>Dates and times</li>
          <li>Venue locations</li>
          <li>Sponsoring organizations</li>
          <li>Speaker or guest participation</li>
          <li>Pricing or ticketing details</li>
          <li>Contact information</li>
        </ul>

        <h3>Update Responsibilities</h3>

        <p>Sponsors and organizations must promptly update:</p>

        <ul>
          <li>Venue changes</li>
          <li>Cancellations</li>
          <li>Rescheduled dates</li>
          <li>Speaker updates</li>
          <li>Event corrections</li>
        </ul>

        <p>
          Judah Global may remove or suppress events containing materially
          inaccurate information.
        </p>

        <h3>Discovery Integrity</h3>

        <p>Approved events become searchable through:</p>

        <ul>
          <li>Keywords</li>
          <li>Categories</li>
          <li>Locations</li>
          <li>Regions</li>
          <li>Occurrence dates</li>
        </ul>

        <p>
          Recurring events are indexed using generated upcoming occurrences.
        </p>
      </LegalSection>

      <LegalSection title="5. Regional Promotion Standards">
        <p>
          Judah Global uses region-aware discovery and promotion systems.
        </p>

        <h3>Regional Governance Rules</h3>

        <ul>
          <li>Premium promotions are region-scoped</li>
          <li>Promotional placements do not bleed across regions</li>
          <li>Discovery prioritizes nearby events</li>
          <li>City matching acts as a relevance boost</li>
          <li>Global search remains available platform-wide</li>
        </ul>

        <h3>Regional Pricing</h3>

        <p>
          Promotional pricing may vary by supported regional programs.
        </p>

        <h3>Global Expansion Standards</h3>

        <p>The platform supports:</p>

        <ul>
          <li>Country-aware discovery</li>
          <li>Timezone-aware scheduling</li>
          <li>Region-based notifications</li>
          <li>International event support</li>
          <li>Multi-region organization participation</li>
        </ul>

        <p>
          Only approved events may appear in public regional discovery.
        </p>
      </LegalSection>

      <LegalSection title="6. Notification & Communication Rules">
        <p>
          Judah Global operates automated communication systems for users,
          sponsors, organizations, and administrators.
        </p>

        <h3>Notification Categories</h3>

        <ul>
          <li>Event approvals</li>
          <li>Event rejections</li>
          <li>Promo purchase confirmations</li>
          <li>Media reminders</li>
          <li>Regional event discovery emails</li>
          <li>Account verification notices</li>
          <li>Admin moderation alerts</li>
        </ul>

        <h3>Email Verification Standard</h3>

        <p>Before events enter review:</p>

        <ul>
          <li>Submitter email verification is required</li>
          <li>Verification uses a 6-digit OTP</li>
          <li>OTP codes expire after approximately 10 minutes</li>
        </ul>

        <h3>Regional Notification Rules</h3>

        <p>Regional discovery emails:</p>

        <ul>
          <li>Are fully automated</li>
          <li>Send approximately twice weekly</li>
          <li>Prioritize Major and Featured Events</li>
          <li>Use region as the primary targeting filter</li>
          <li>Use city as a secondary ranking boost</li>
        </ul>

        <h3>Media Reminder Rule</h3>

        <p>
          Sponsors who purchase promotions without uploading approved media
          receive:
        </p>

        <ul>
          <li>Automated email reminders</li>
          <li>In-platform alerts</li>
          <li>Pre-launch warning notifications</li>
        </ul>

        <h3>Communication Standards</h3>

        <p>All Judah Global communications should remain:</p>

        <ul>
          <li>Professional</li>
          <li>Respectful</li>
          <li>Clear</li>
          <li>Faith-centered</li>
          <li>Non-deceptive</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Enforcement & Platform Rights">
        <p>Judah Global reserves the right to:</p>

        <ul>
          <li>Reject event submissions</li>
          <li>Suspend accounts</li>
          <li>Remove content</li>
          <li>Disable promotions</li>
          <li>Moderate media</li>
          <li>Restrict access</li>
          <li>Enforce regional policies</li>
          <li>Investigate abuse or fraud</li>
        </ul>

        <p>
          Violations of platform standards may result in moderation action or
          permanent removal from the platform.
        </p>
      </LegalSection>

      <LegalSection title="8. Platform Commitment">
        <p>Judah Global is committed to:</p>

        <ul>
          <li>Event quality</li>
          <li>Platform integrity</li>
          <li>Regional fairness</li>
          <li>Accurate discovery</li>
          <li>Responsible promotions</li>
          <li>Community trust</li>
          <li>Safe and professional engagement standards</li>
        </ul>

        <p>
          All users, sponsors, organizations, and administrators are expected to
          follow these standards while using the Judah Global platform.
        </p>

        <p>
          Judah Global — Connecting Communities. Discovering Events. Expanding
          Impact.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}