import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import vipRebateRatio from '../assets/screenshots/91club-vip-rebate-ratio-tiers.jpg';
import { TrophyIcon, WalletIcon, ChatIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club VIP', href: '/91-club-vip' }
];

const faqs = [
  {
    question: 'How do I become a VIP member?',
    answer: 'VIP status begins accumulating automatically from your first deposit and rises as your total activity grows.'
  },
  {
    question: 'Does my VIP tier ever go down?',
    answer:
      'Tiers are generally based on cumulative activity, so your status reflects your all-time progress rather than resetting periodically.'
  },
  {
    question: 'What perks come with higher VIP tiers?',
    answer:
      'Higher tiers typically include faster withdrawal handling, exclusive bonus offers, and dedicated support access.'
  },
  {
    question: 'Can I check my current VIP progress?',
    answer: 'Yes, your VIP dashboard shows your current tier, progress toward the next one, and the perks you have unlocked.'
  },
  {
    question: 'Is there a cost to join the VIP program?',
    answer: 'No, VIP status is earned automatically through activity and carries no separate membership fee.'
  }
];

export default function Vip() {
  return (
    <>
      <SEO
        title="91 Club VIP (91clubvip) - Membership Tiers and Exclusive Perks"
        description="See how the 91 Club VIP tier system works, what perks unlock at each level, and how your status is calculated."
        path="/91-club-vip"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club VIP - Membership Tiers and Exclusive Perks',
            description: 'A breakdown of the 91 Club VIP tier system and its associated perks.',
            path: '/91-club-vip'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Membership Tiers"
        title="91 Club VIP: Climb the Ladder, Unlock More Perks"
        intro="VIP status on 91 Club grows automatically with your activity, unlocking faster support, better bonus offers and dedicated perks the further you progress."
        primaryLabel="Register Now"
        secondaryLabel="See All Rewards"
        secondaryHref="/91-club-rewards"
      />

      <Section eyebrow="Tier Overview" title="How the VIP ladder is structured">
        <Screenshot src={vipRebateRatio} alt="91club vip rebate ratio tiers showing commission percentages by level" />
        <ComparisonTable
          caption="91 Club VIP tier overview"
          columns={['Tier', 'Typical Requirement', 'Core Perk']}
          rows={[
            ['Bronze', 'Reached after your first deposit', 'Standard support access'],
            ['Silver', 'Consistent activity over several weeks', 'Priority support queue'],
            ['Gold', 'Sustained activity over a couple of months', 'Faster withdrawal review'],
            ['Platinum', 'Long-term, high engagement', 'Dedicated account contact'],
            ['Diamond', 'Top-tier all-time activity', 'Highest bonus offer access']
          ]}
        />
      </Section>

      <Section eyebrow="What You Unlock" title="Perks that come with VIP progress">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>Higher Bonus Offers</h3>
            <p>Top tiers unlock access to larger and more frequent bonus promotions.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Faster Withdrawal Review</h3>
            <p>Higher-tier accounts move through the withdrawal review queue more quickly.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Dedicated Support</h3>
            <p>Top-tier members gain a direct line to a dedicated support contact.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Tracking Progress" title="Following your VIP journey">
        <div className={shared.stepGrid}>
          {[
            { title: 'Make Your First Deposit', text: 'VIP progress begins the moment your first deposit clears.' },
            { title: 'Stay Active', text: 'Regular play contributes to your cumulative VIP progress.' },
            { title: 'Check Your Dashboard', text: 'Monitor your current tier and distance to the next milestone.' },
            { title: 'Unlock New Perks', text: 'Each tier automatically applies its associated benefits.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Beyond the Tiers" title="How VIP fits into the wider reward system">
        <div className={shared.prose}>
          <p>
            VIP status is one piece of a larger rewards structure that also includes welcome
            bonuses, referral commissions and periodic gift codes. Unlike those one-off rewards,
            VIP progress is cumulative and permanent, meaning your tier reflects long-term
            engagement rather than a single action.
          </p>
          <p>
            To see the full picture of every reward type available, visit our{' '}
            <Link to="/91-club-rewards">rewards overview page</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="VIP questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Referral', href: '/91-club-referral' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Your VIP journey starts with one deposit"
          subtitle="Register now and watch your tier progress build automatically from day one."
        />
      </Section>
    </>
  );
}
