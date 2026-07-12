import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { GiftIcon, ClockIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { TELEGRAM_URL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Gift Code', href: '/91-club-gift-code' }
];

const faqs = [
  {
    question: 'Where do 91 Club gift codes come from?',
    answer:
      'They are released periodically through our official Telegram channel and occasional in-app promotions during festivals and milestones.'
  },
  {
    question: 'How do I redeem a gift code?',
    answer:
      'Open the redemption screen from your account menu, paste the code exactly as shown, and confirm. Your balance updates immediately if the code is valid.'
  },
  {
    question: 'Why did my gift code fail to redeem?',
    answer:
      'This usually means the code expired, was already used, or was typed with an extra space or incorrect character. Copy it directly rather than retyping it.'
  },
  {
    question: 'Can I use the same gift code twice?',
    answer: 'No, each gift code is single-use per account and cannot be redeemed again once applied.'
  },
  {
    question: 'Are gift codes ever sold or traded?',
    answer:
      'Gift codes are released free through official channels only. Never pay a third party for a code, as those are almost always invalid or fraudulent.'
  }
];

export default function GiftCode() {
  return (
    <>
      <SEO
        title="91 Club Gift Code - How to Find and Redeem Codes"
        description="Learn where 91 Club gift codes are released, how to redeem them correctly, and what to do if a code does not work."
        path="/91-club-gift-code"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Gift Code - How to Find and Redeem Codes',
            description: 'A guide to finding, understanding and redeeming 91 Club gift codes.',
            path: '/91-club-gift-code'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Free Balance Codes"
        title="91 Club Gift Code: Where to Find Them and How to Redeem"
        intro="Gift codes are short-lived rewards released through our official channels that add bonus balance directly to your account. Here is how to catch them and redeem them correctly."
        primaryLabel="Join Telegram"
        primaryHref={TELEGRAM_URL}
        secondaryLabel="View Current Bonuses"
        secondaryHref="/91-club-bonus"
      />

      <Section eyebrow="Redemption Steps" title="How to redeem a 91 Club gift code">
        <div className={shared.stepGrid}>
          {[
            { title: 'Find an Active Code', text: 'Check our Telegram channel for the latest released codes.' },
            { title: 'Open Redeem Screen', text: 'Go to the gift code section from your account dashboard.' },
            { title: 'Paste the Code', text: 'Copy the code exactly to avoid extra spaces or typos.' },
            { title: 'Confirm and Collect', text: 'Submit the code and see your bonus balance update instantly.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Where Codes Appear" title="Official sources for 91 Club gift codes">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <GiftIcon />
            </div>
            <h3>Telegram Channel</h3>
            <p>Our fastest and most frequent source of new gift codes and instant announcements.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Seasonal Events</h3>
            <p>Festivals and platform milestones often come with limited-time celebration codes.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Account Notifications</h3>
            <p>Occasionally, personalized codes are sent directly to your in-app inbox.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Troubleshooting" title="Fixing a gift code that won't redeem">
        <ComparisonTable
          caption="Common gift code redemption issues"
          columns={['Problem', 'Cause', 'Solution']}
          rows={[
            ['"Code expired" message', 'Redemption window has closed', 'Watch for the next code on Telegram'],
            ['"Already redeemed" message', 'Code was used previously on this account', 'Each code works once per account only'],
            ['"Invalid code" message', 'Typo or extra character when entering', 'Copy and paste the code directly'],
            ['No balance change after redeeming', 'Display delay on your dashboard', 'Refresh the balance screen and check again']
          ]}
        />
      </Section>

      <Section eyebrow="Stay Safe" title="Avoiding fake gift code offers">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Only Trust Official Channels
          </h3>
          <ul className={shared.bulletList}>
            <li>Never pay money to "unlock" a gift code, as legitimate codes are always free.</li>
            <li>Ignore codes shared by unknown accounts claiming to be 91 Club representatives.</li>
            <li>
              If a code looks suspicious, verify it with{' '}
              <Link to="/91-club-support">91 Club Support</Link> before entering any details.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Gift code questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Offers', href: '/91-club-offers' },
            { label: '91 Club Promotions', href: '/91-club-promotions' },
            { label: '91 Club Invite Code', href: '/91-club-invite-code' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Never miss a gift code again"
          subtitle="Join our Telegram channel for instant alerts the moment a new code goes live."
          primaryLabel="Join Telegram"
          primaryHref={TELEGRAM_URL}
        />
      </Section>
    </>
  );
}
