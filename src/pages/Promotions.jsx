import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { TrophyIcon, UsersIcon, ClockIcon } from '../components/illustrations/Icons.jsx';
import { TELEGRAM_URL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Promotions', href: '/91-club-promotions' }
];

const faqs = [
  {
    question: 'How do I join a leaderboard tournament?',
    answer:
      'Active tournaments appear in the promotions tab; simply play the featured game during the event window to appear on the leaderboard.'
  },
  {
    question: 'Are promotions available to every member?',
    answer: 'Most promotions are open platform-wide, though a few are reserved for specific VIP tiers.'
  },
  {
    question: 'How are tournament winners decided?',
    answer: 'Rankings are based on the specific metric stated for that event, such as total rounds played or highest single win.'
  },
  {
    question: 'When are promotion results announced?',
    answer: 'Results are published shortly after the event window closes, with prizes credited automatically to winning accounts.'
  },
  {
    question: 'Where can I see upcoming promotions in advance?',
    answer: 'Our Telegram channel typically previews upcoming campaigns before they go live on the platform.'
  }
];

export default function Promotions() {
  return (
    <>
      <SEO
        title="91 Club Promotions (91clubpromotions) - Seasonal Campaigns and Tournaments"
        description="Discover current and upcoming 91 Club promotions, including leaderboard tournaments, seasonal campaigns and community events."
        path="/91-club-promotions"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Promotions - Seasonal Campaigns and Tournaments',
            description: 'An overview of 91 Club seasonal promotions, tournaments and community events.',
            path: '/91-club-promotions'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Campaigns & Tournaments"
        title="91 Club Promotions: Seasonal Events Worth Watching"
        intro="Beyond standing bonuses and rotating offers, 91 Club runs larger seasonal campaigns and leaderboard tournaments throughout the year. Here is how to find and join them."
        primaryLabel="Join Telegram"
        primaryHref={TELEGRAM_URL}
        secondaryLabel="View Current Offers"
        secondaryHref="/91-club-offers"
      />

      <Section eyebrow="Promotion Formats" title="The kinds of campaigns we run">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>Leaderboard Tournaments</h3>
            <p>Compete on a ranked leaderboard for a set period, with prizes for top finishers.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Festival Campaigns</h3>
            <p>Themed events tied to major festivals, often with bonus multipliers.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <UsersIcon />
            </div>
            <h3>Community Challenges</h3>
            <p>Platform-wide milestones that unlock a shared reward for all participating members.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Joining an Event" title="Getting involved in an active promotion">
        <div className={shared.stepGrid}>
          {[
            { title: 'Check the Promotions Tab', text: 'See which campaigns are currently running and their rules.' },
            { title: 'Read the Requirements', text: 'Understand what qualifies you, such as a specific game or activity level.' },
            { title: 'Play As Normal', text: 'Your qualifying activity is tracked automatically during the event window.' },
            { title: 'Claim Your Result', text: 'Prizes are credited automatically once the event concludes.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why We Run Promotions" title="More than just extra bonus value">
        <div className={shared.prose}>
          <p>
            Promotions are designed to add variety beyond day-to-day play, whether that means
            competing against other members on a leaderboard or taking part in a themed festival
            event. They typically run alongside, not instead of, our standing bonus and offer
            structure.
          </p>
          <p>
            For a look at deposit-specific deals running right now, visit{' '}
            <Link to="/91-club-offers">91 Club Offers</Link>, and for the full standing reward
            structure, see <Link to="/91-club-rewards">91 Club Rewards</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Promotion questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Offers', href: '/91-club-offers' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club VIP', href: '/91-club-vip' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Join the next seasonal campaign"
          subtitle="Follow our Telegram channel for early previews of upcoming promotions and tournaments."
          primaryLabel="Join Telegram"
          primaryHref={TELEGRAM_URL}
        />
      </Section>
    </>
  );
}
