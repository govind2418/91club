import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import { ShieldIcon, ClockIcon, WalletIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' }
];

export default function ResponsibleGaming() {
  return (
    <>
      <SEO
        title="Responsible Gaming"
        description="91 Club's approach to responsible gaming, including budgeting guidance, self-assessment questions and where to find support."
        path="/responsible-gaming"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: 'Responsible Gaming',
            description: 'The 91 Club responsible gaming policy and player support resources.',
            path: '/responsible-gaming'
          }),
          buildBreadcrumbSchema(breadcrumbItems)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Play Within Your Means"
        title="Responsible Gaming"
        intro="91 Club is intended for entertainment purposes for adults aged 18 and above. This page outlines our approach to responsible play and where to find help if gaming stops feeling fun."
        primaryLabel="91 Club Support"
        primaryHref="/91-club-support"
        secondaryLabel="91 Club Tips"
        secondaryHref="/91-club-tips"
      />

      <Section eyebrow="Our Commitment" title="What responsible gaming means to us">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Age Verification</h3>
            <p>Accounts are restricted to players aged 18 and above.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Clear Budgeting Guidance</h3>
            <p>We encourage a fixed session budget rather than open-ended spending.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Break Reminders</h3>
            <p>We recommend regular breaks to help you stay in control of your sessions.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="A Quick Self-Check" title="Questions worth asking yourself">
        <ul className={shared.bulletList}>
          <li>Am I spending more time or money than I originally planned to?</li>
          <li>Have I tried to win back a loss by increasing my stake?</li>
          <li>Am I using funds meant for essential expenses to keep playing?</li>
          <li>Do I feel anxious or irritable when I am not able to play?</li>
        </ul>
        <p style={{ marginTop: 20, color: 'var(--color-text-muted)', maxWidth: 640 }}>
          If you answered yes to any of these, consider taking a break and reviewing your
          habits using the pacing guidance on our{' '}
          <Link to="/91-club-tips">tips page</Link>, or reach out to{' '}
          <Link to="/91-club-support">support</Link> for account tools that can help.
        </p>
      </Section>

      <Section eyebrow="Entertainment, Not Income" title="Setting the right expectations">
        <div className={shared.prose}>
          <p>
            Every game on 91 Club, from colour prediction to lottery, Aviator and slots, is
            based on chance or reactive timing. None of it is designed or intended as a source
            of reliable income. We encourage every player to treat their balance as an
            entertainment budget and to stop once that budget is used.
          </p>
        </div>
      </Section>
    </>
  );
}
