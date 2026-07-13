import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { WalletIcon, GiftIcon, ClockIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Offers', href: '/91-club-offers' }
];

const faqs = [
  {
    question: 'How are offers different from bonuses?',
    answer:
      'Bonuses are standing reward types like the welcome offer, while offers here refer to specific, often time-limited deposit deals that rotate through the season.'
  },
  {
    question: 'Do I need to opt in to an offer?',
    answer:
      'Some offers apply automatically at the point of deposit, while others require you to opt in from your offers dashboard beforehand.'
  },
  {
    question: 'Can I use more than one offer at a time?',
    answer:
      'Offer stacking rules vary by promotion; each offer clearly states whether it can be combined with another active offer.'
  },
  {
    question: 'What happens if an offer expires while I am mid-session?',
    answer: 'Any offer terms already applied to a completed deposit remain valid even after the offer window closes.'
  },
  {
    question: 'Where do new offers get announced?',
    answer: 'New offers appear on your dashboard and are also announced through our Telegram channel.'
  }
];

export default function Offers() {
  return (
    <>
      <SEO
        title="91 Club Offers (91cluboffers) - Current Deposit Deals and Limited-Time Deals"
        description="Browse current 91 Club deposit offers, understand how opt-in works, and see how offers differ from standing bonuses and promotions."
        path="/91-club-offers"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Offers - Current Deposit Deals and Limited-Time Deals',
            description: 'An overview of rotating 91 Club deposit offers and how to claim them.',
            path: '/91-club-offers'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Deposit Deals"
        title="91 Club Offers: Time-Limited Deposit Deals"
        intro="Offers are the rotating, often deposit-linked deals that appear alongside our standing bonus structure. This page explains how they work and how to make sure you never miss one."
        primaryLabel="Register Now"
        secondaryLabel="See Bonus Types"
        secondaryHref="/91-club-bonus"
      />

      <Section eyebrow="Offer Categories" title="The kinds of offers you will typically see">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Deposit Match Deals</h3>
            <p>A short-term boost that matches a percentage of a qualifying deposit.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <GiftIcon />
            </div>
            <h3>Flash Offers</h3>
            <p>Very short windows, sometimes just a few hours, with a higher-than-usual boost.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Weekend Offers</h3>
            <p>Recurring deals that appear on a regular weekly schedule.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Claiming an Offer" title="From spotting a deal to using it">
        <div className={shared.stepGrid}>
          {[
            { title: 'Check Your Offers Tab', text: 'Open the offers dashboard to see everything currently live.' },
            { title: 'Opt In If Required', text: 'Some deals need a manual opt-in before your next deposit.' },
            { title: 'Make Your Deposit', text: 'Complete a qualifying deposit within the offer window.' },
            { title: 'See It Applied', text: 'The offer amount reflects in your balance right after the deposit clears.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Offers vs. Promotions vs. Bonuses" title="Telling the three apart">
        <ComparisonTable
          caption="How offers, promotions and bonuses differ"
          columns={['Term', 'Typical Length', 'Focus']}
          rows={[
            ['Offers', 'Days to a few weeks', 'Deposit-linked deals'],
            ['Promotions', 'A season or campaign', 'Events, tournaments and leaderboards'],
            ['Bonuses', 'Ongoing or one-time', 'Standing reward structure like the welcome bonus']
          ]}
        />
      </Section>

      <Section eyebrow="Staying Updated" title="Never miss a live offer">
        <div className={shared.prose}>
          <p>
            Offers rotate more frequently than our standing bonus structure, which means the
            best way to catch them is to check your dashboard regularly or follow our Telegram
            channel where every new offer is announced the moment it goes live.
          </p>
          <p>
            For broader seasonal campaigns and tournament-style events, visit{' '}
            <Link to="/91-club-promotions">91 Club Promotions</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Offer questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Promotions', href: '/91-club-promotions' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club Gift Code', href: '/91-club-gift-code' },
            { label: '91 Club VIP', href: '/91-club-vip' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Check today's active offers"
          subtitle="Register now and see every live deposit deal from your offers dashboard."
        />
      </Section>
    </>
  );
}
