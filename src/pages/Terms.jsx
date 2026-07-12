import SEO, { buildBreadcrumbSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Terms of Service', href: '/terms' }
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the 91 Club terms of service covering eligibility, account rules, deposits, withdrawals and platform conduct."
        path="/terms"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: 'Terms of Service',
            description: 'The 91 Club terms of service governing platform use.',
            path: '/terms'
          }),
          buildBreadcrumbSchema(breadcrumbItems)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms govern your use of 91 Club. By creating an account, you agree to the rules outlined below."
        primaryLabel="91 Club Support"
        primaryHref="/91-club-support"
        secondaryLabel="Responsible Gaming"
        secondaryHref="/responsible-gaming"
      />

      <Section eyebrow="Eligibility">
        <div className={shared.prose}>
          <p>
            You must be at least 18 years old to register a 91 Club account. Each individual is
            permitted a single account, and duplicate accounts may be suspended.
          </p>
        </div>
      </Section>

      <Section eyebrow="Account Responsibility">
        <div className={shared.prose}>
          <p>
            You are responsible for keeping your login credentials confidential and for all
            activity that occurs under your account. Report any unauthorized access to support
            immediately.
          </p>
        </div>
      </Section>

      <Section eyebrow="Deposits and Withdrawals">
        <div className={shared.prose}>
          <p>
            Deposits are credited once payment confirmation is received. Withdrawals pass
            through a verification step before release and may be subject to identity checks
            for larger amounts.
          </p>
        </div>
      </Section>

      <Section eyebrow="Bonus Terms">
        <div className={shared.prose}>
          <p>
            Bonus offers may include usage conditions before becoming withdrawable, and time
            limits stated at the time a bonus is credited. Full details for each bonus type are
            available on the relevant bonus and promotions pages.
          </p>
        </div>
      </Section>

      <Section eyebrow="Conduct">
        <div className={shared.prose}>
          <p>
            Attempting to exploit, manipulate, or interfere with platform systems is prohibited
            and may result in account suspension. We reserve the right to update these terms,
            with material changes communicated through the platform.
          </p>
        </div>
      </Section>
    </>
  );
}
