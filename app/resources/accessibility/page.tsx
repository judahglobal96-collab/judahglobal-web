import LegalPageLayout from '@/components/resources/legal-page-layout'
import LegalSection from '@/components/resources/legal-section'

export const metadata = {
  title: 'Accessibility Statement | Judah Global',
  description:
    'Official Judah Global Accessibility Statement outlining digital accessibility commitments, standards, features, feedback, and ongoing improvements.',
}

export default function AccessibilityPolicyPage() {
  return (
    <LegalPageLayout
      category="Accessibility"
      title="Accessibility Statement"
      effectiveDate="May 10, 2026"
      lastUpdated="May 10, 2026"
      description="Judah Global is committed to ensuring digital accessibility for all users, including individuals with disabilities."
    >
      <LegalSection title="1. Commitment to Accessibility">
        <p>
          Judah Global is committed to ensuring digital accessibility for all
          users, including individuals with disabilities.
        </p>

        <p>
          We believe faith-based event discovery, community engagement, and
          organizational participation should be accessible to everyone
          regardless of ability, device, technology, or location.
        </p>

        <p>
          We continuously work to improve the usability and accessibility of the
          Judah Global platform and strive to apply recognized accessibility
          standards and best practices across our website, applications, and
          digital communications.
        </p>
      </LegalSection>

      <LegalSection title="2. Accessibility Goals">
        <p>Judah Global aims to:</p>

        <ul>
          <li>Provide inclusive access to event discovery and participation</li>
          <li>Support users who rely on assistive technologies</li>
          <li>Improve readability and navigability across devices</li>
          <li>Maintain accessible forms, media, and interactive elements</li>
          <li>
            Reduce barriers for users with visual, auditory, motor, cognitive,
            or neurological disabilities
          </li>
          <li>
            Promote equal access to faith-centered resources and events
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Standards & Guidelines">
        <p>
          Judah Global endeavors to align with applicable accessibility
          standards, including:
        </p>

        <ul>
          <li>Web Content Accessibility Guidelines, WCAG 2.1 Level AA</li>
          <li>
            Applicable ADA digital accessibility principles under the Americans
            with Disabilities Act
          </li>
          <li>Responsive and mobile accessibility best practices</li>
          <li>Accessibility-aware UI/UX design standards</li>
        </ul>

        <p>
          While we strive for broad compliance, accessibility is an ongoing
          effort and some areas of the platform may still be improving.
        </p>
      </LegalSection>

      <LegalSection title="4. Accessibility Features">
        <p>
          Judah Global supports and prioritizes accessibility features including:
        </p>

        <h3>Platform Navigation</h3>

        <ul>
          <li>Keyboard-accessible navigation</li>
          <li>Logical page structure and heading hierarchy</li>
          <li>Consistent navigation layouts</li>
          <li>Focus visibility for interactive elements</li>
        </ul>

        <h3>Visual Accessibility</h3>

        <ul>
          <li>Responsive text scaling</li>
          <li>High-contrast compatible interface design</li>
          <li>Readable typography and spacing</li>
          <li>Support for browser zoom functionality</li>
        </ul>

        <h3>Screen Reader Support</h3>

        <ul>
          <li>Semantic HTML structure</li>
          <li>Accessible form labels</li>
          <li>Descriptive button and link text</li>
          <li>ARIA support where appropriate</li>
        </ul>

        <h3>Forms & Event Submission</h3>

        <ul>
          <li>Clearly labeled form fields</li>
          <li>Error messaging and validation guidance</li>
          <li>Accessible event submission workflows</li>
          <li>Structured input requirements</li>
        </ul>

        <h3>Mobile Accessibility</h3>

        <ul>
          <li>Responsive layouts across screen sizes</li>
          <li>Touch-friendly interactive controls</li>
          <li>Reduced layout shifting on mobile devices</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Media & Promotional Content">
        <p>
          Judah Global encourages organizations, sponsors, and event submitters
          to provide accessible media whenever possible, including:
        </p>

        <ul>
          <li>Descriptive event titles</li>
          <li>Readable promotional graphics</li>
          <li>Alt text for uploaded images where supported</li>
          <li>Clear event descriptions</li>
          <li>Accessible flyer content</li>
        </ul>

        <p>
          Because some content is user-generated, Judah Global cannot guarantee
          full accessibility compliance for all third-party uploaded media.
        </p>
      </LegalSection>

      <LegalSection title="6. Ongoing Improvements">
        <p>
          Accessibility is an ongoing process. Judah Global continuously
          evaluates and improves:
        </p>

        <ul>
          <li>Event discovery experiences</li>
          <li>Notification systems</li>
          <li>Mobile usability</li>
          <li>Admin moderation tools</li>
          <li>Sponsor and organization portals</li>
          <li>Form workflows and error handling</li>
          <li>Accessibility testing procedures</li>
        </ul>

        <p>Future planned enhancements may include:</p>

        <ul>
          <li>Expanded screen reader optimization</li>
          <li>Additional keyboard shortcuts</li>
          <li>Enhanced contrast settings</li>
          <li>Accessibility preference controls</li>
          <li>Improved captioning and media accessibility tools</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Third-Party Content & Integrations">
        <p>
          Some platform features or external links may rely on third-party
          services or integrations that are not fully controlled by Judah
          Global.
        </p>

        <p>
          While we encourage accessibility best practices across all
          integrations, we cannot guarantee accessibility compliance for
          third-party platforms, websites, embedded content, or external
          services.
        </p>
      </LegalSection>

      <LegalSection title="8. Feedback & Accessibility Assistance">
        <p>
          Judah Global welcomes feedback regarding accessibility barriers,
          usability concerns, or accommodation requests.
        </p>

        <p>
          If you experience difficulty accessing any part of the platform, we
          encourage you to contact us with details about:
        </p>

        <ul>
          <li>The page or feature involved</li>
          <li>The issue encountered</li>
          <li>The assistive technology being used, if applicable</li>
          <li>Suggested improvements</li>
        </ul>

        <p>
          We will make reasonable efforts to address accessibility concerns and
          improve the user experience.
        </p>
      </LegalSection>

      <LegalSection title="9. Accessibility Commitment">
        <p>
          Judah Global believes accessibility supports community inclusion,
          participation, and engagement.
        </p>

        <p>
          We remain committed to improving access for all users and continuing
          to build a platform that serves diverse global communities with
          dignity, clarity, and usability.
        </p>

        <p>
          Judah Global — Connecting Communities. Discovering Events. Expanding
          Impact.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}