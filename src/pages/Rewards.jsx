import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import StatCounter from '../components/ui/StatCounter.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import rewardsActivityCenter from '../assets/screenshots/91club-rewards-activity-center.jpg';
import { TrophyIcon, GiftIcon, UsersIcon, WalletIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Rewards', href: '/91-club-rewards' }
];

const faqs = [
  {
    question: 'How do I start earning rewards on 91 Club?',
    answer: 'Rewards begin accumulating from your very first deposit and continue as you stay active on the platform.'
  },
  {
    question: 'Do rewards expire?',
    answer: 'Some seasonal or promotional rewards carry an expiry window, which is always clearly stated when they are credited.'
  },
  {
    question: 'What is the difference between rewards and VIP tiers?',
    answer:
      'Rewards are individual bonuses like deposit boosts and gift codes, while VIP tiers are an ongoing status level that unlocks a broader set of perks over time.'
  },
  {
    question: 'Can I combine multiple reward types?',
    answer: 'Yes, welcome bonuses, referral rewards and gift codes can all apply to the same account at different times.'
  },
  {
    question: 'Where do I track my reward history?',
    answer: 'Your rewards dashboard shows every bonus credited to your account along with the date it was applied.'
  }
];

export default function Rewards() {
  return (
    <>
      <SEO
        title="91 Club Rewards (91clubrewards) - Bonuses, VIP Perks and Referral Earnings"
        description="See every way to earn rewards on 91 Club, from welcome bonuses to VIP tier perks and referral commissions."
        path="/91-club-rewards"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Rewards - Bonuses, VIP Perks and Referral Earnings',
            description: 'A full overview of the 91 Club rewards system across bonuses, VIP tiers and referrals.',
            path: '/91-club-rewards'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Reward System"
        title="91 Club Rewards: Every Way to Earn on the Platform"
        intro="From your first deposit bonus to long-term VIP perks and referral commissions, 91 Club rewards active, loyal members in several distinct ways. This page maps out the full system."
        primaryLabel="Register Now"
        secondaryLabel="View VIP Tiers"
        secondaryHref="/91-club-vip"
      />

      <Section eyebrow="Reward Snapshot" title="Rewards distributed across our community">
        <StatCounter
          stats={[
            { value: 850000, suffix: '+', label: 'Bonuses Credited' },
            { value: 12, suffix: '', label: 'VIP Tiers Available' },
            { value: 40, suffix: '%', label: 'Members Using Referrals' },
            { value: 24, suffix: '/7', label: 'Reward Tracking Access' }
          ]}
        />
      </Section>

      <Section eyebrow="Reward Types" title="The four core reward categories">
        <div className={shared.mediaSplit}>
          <div className={shared.grid3}>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <GiftIcon />
              </div>
              <h3>Welcome Bonus</h3>
              <p>A first-deposit boost credited automatically to every new account.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <TrophyIcon />
              </div>
              <h3>VIP Tier Perks</h3>
              <p>Ongoing benefits that grow as you move up through membership levels.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <UsersIcon />
              </div>
              <h3>Referral Commission</h3>
              <p>Earn a share whenever someone you invite becomes an active player.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <WalletIcon />
              </div>
              <h3>Gift Code Drops</h3>
              <p>Periodic free-balance codes released through our Telegram channel.</p>
            </div>
          </div>
          <Screenshot src={rewardsActivityCenter} alt="91club rewards activity center with gifts and attendance bonus" />
        </div>
      </Section>

      <Section eyebrow="Reward Comparison" title="Choosing which reward path to focus on">
        <ComparisonTable
          caption="91 Club reward types compared"
          columns={['Reward Type', 'How Often', 'Effort Required']}
          rows={[
            ['Welcome Bonus', 'Once, on first deposit', 'None, automatic'],
            ['VIP Tier Perks', 'Continuous as you progress', 'Stay active and deposit regularly'],
            ['Referral Commission', 'Ongoing, per referred player', 'Share your invite code'],
            ['Gift Codes', 'Periodic releases', 'Follow our Telegram channel']
          ]}
        />
      </Section>

      <Section eyebrow="Getting the Most Value" title="Building a rewards routine">
        <div className={shared.prose}>
          <p>
            Most members combine several reward types rather than relying on just one. A
            typical routine looks like claiming the welcome bonus at sign-up, sharing an invite
            code with a couple of friends, and checking Telegram periodically for gift codes,
            while VIP status builds naturally in the background from regular play.
          </p>
          <p>
            For the specific tier thresholds and perks at each VIP level, visit the{' '}
            <Link to="/91-club-vip">91 Club VIP page</Link>. If you are looking for current
            live promotions layered on top of these core rewards, check{' '}
            <Link to="/91-club-promotions">91 Club Promotions</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Rewards questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club VIP', href: '/91-club-vip' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Referral', href: '/91-club-referral' },
            { label: '91 Club Gift Code', href: '/91-club-gift-code' },
            { label: '91 Club Promotions', href: '/91-club-promotions' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Start earning from your first deposit"
          subtitle="Register today and your welcome bonus and VIP progress begin immediately."
        />
      </Section>
    </>
  );
}
