import SEO, { buildBreadcrumbSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import { SUPPORT_EMAIL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-policy' }
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read how 91 Club collects, uses and protects your personal information across the platform."
        path="/privacy-policy"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: 'Privacy Policy',
            description: 'The 91 Club privacy policy covering data collection, use and protection.',
            path: '/privacy-policy'
          }),
          buildBreadcrumbSchema(breadcrumbItems)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what information 91 Club collects, how it is used, and the choices you have over your own data."
        primaryLabel="91 Club Support"
        primaryHref="/91-club-support"
        secondaryLabel="91 Club Security"
        secondaryHref="/91-club-security"
      />

      <Section eyebrow="Information We Collect">
        <div className={shared.prose}>
          <p>
            We collect information you provide directly, such as your mobile number during
            registration, along with account activity like deposits, withdrawals and game
            history required to operate your account.
          </p>
          <p>
            We also collect basic technical information such as device type and general usage
            patterns to help us maintain performance and detect unusual account activity.
          </p>
        </div>
      </Section>

      <Section eyebrow="How We Use Your Information">
        <div className={shared.prose}>
          <p>
            Your information is used to operate your account, process transactions, provide
            customer support, and improve the reliability and security of the platform. We do
            not sell personal information to third parties.
          </p>
        </div>
      </Section>

      <Section eyebrow="Data Security">
        <div className={shared.prose}>
          <p>
            Account sessions and transactions are protected with encryption, and access to
            sensitive account data is restricted to authorized personnel handling support and
            verification requests.
          </p>
        </div>
      </Section>

      <Section eyebrow="Your Choices">
        <div className={shared.prose}>
          <p>
            You can review and update your account details at any time from your profile
            settings. For questions about data we hold or requests related to your information,
            contact us at {SUPPORT_EMAIL}.
          </p>
        </div>
      </Section>
    </>
  );
}
