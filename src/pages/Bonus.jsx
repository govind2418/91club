import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import dailyAttendanceBonus from '../assets/screenshots/91club-daily-attendance-bonus.jpg';
import { GiftIcon, TrophyIcon, ClockIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Bonus', href: '/91-club-bonus' }
];

const faqs = [
  {
    question: 'What is the 91 Club welcome bonus?',
    answer: 'It is a percentage boost applied to your first deposit, credited automatically once the deposit clears.'
  },
  {
    question: 'Are there bonuses beyond the welcome offer?',
    answer:
      'Yes, ongoing deposit bonuses, VIP-tier perks, referral commissions and seasonal gift codes all add to your balance over time.'
  },
  {
    question: 'Do bonuses have any conditions attached?',
    answer:
      'Some bonuses include a playthrough or usage condition before the bonus amount becomes withdrawable, always shown clearly at the time it is credited.'
  },
  {
    question: 'Can I lose a bonus if I do not use it in time?',
    answer:
      'Certain time-limited bonuses do expire if unused within their stated window, so check the expiry details when a bonus is credited.'
  },
  {
    question: 'How do I know which bonuses are currently active?',
    answer: 'Your bonus dashboard lists every currently active offer along with its terms and expiry date.'
  }
];

export default function Bonus() {
  return (
    <>
      <SEO
        title="91 Club Bonus (91clubbonus) - Welcome Offers and Ongoing Deposit Boosts"
        description="See the different types of 91 Club bonuses, how they are credited, and what conditions apply before you can withdraw them."
        path="/91-club-bonus"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Bonus - Welcome Offers and Ongoing Deposit Boosts',
            description: 'An overview of every 91 Club bonus type and how each one works.',
            path: '/91-club-bonus'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Bonus Offers"
        title="91 Club Bonus: Welcome Offers and Ongoing Boosts"
        intro="Bonuses on 91 Club range from a first-deposit welcome boost to ongoing perks tied to VIP status and seasonal promotions. Here is what is available and how each one is credited."
        primaryLabel="Register Now"
        secondaryLabel="View Current Promotions"
        secondaryHref="/91-club-promotions"
      />

      <Section eyebrow="Bonus Types" title="The main categories of 91 Club bonuses">
        <div className={shared.mediaSplit}>
          <div className={shared.grid3}>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <GiftIcon />
              </div>
              <h3>Welcome Bonus</h3>
              <p>A percentage boost applied automatically to your first deposit.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <TrophyIcon />
              </div>
              <h3>VIP-Linked Bonuses</h3>
              <p>Better bonus offers unlock as your VIP tier increases over time.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <ClockIcon />
              </div>
              <h3>Seasonal Bonuses</h3>
              <p>Limited-time offers tied to festivals and platform milestones.</p>
            </div>
          </div>
          <Screenshot src={dailyAttendanceBonus} alt="91club daily attendance bonus screen showing day 1 to day 7 rewards" />
        </div>
      </Section>

      <Section eyebrow="How Bonuses Get Credited" title="From offer to available balance">
        <div className={shared.stepGrid}>
          {[
            { title: 'An Offer Goes Live', text: 'A bonus is announced through your dashboard or Telegram.' },
            { title: 'You Meet the Condition', text: 'Typically a deposit or a specific action tied to the offer.' },
            { title: 'Bonus Is Credited', text: 'The amount appears in your balance, sometimes as bonus funds.' },
            { title: 'Conditions Clear', text: 'Any usage requirement completes, making the bonus fully withdrawable.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Comparing Bonus Types" title="Which bonus applies when">
        <ComparisonTable
          caption="91 Club bonus types compared"
          columns={['Bonus Type', 'Trigger', 'Typical Conditions']}
          rows={[
            ['Welcome Bonus', 'First deposit', 'May include a usage requirement'],
            ['VIP-Linked Bonus', 'Reaching a new VIP tier', 'Automatic, tier-based'],
            ['Seasonal Bonus', 'Festival or milestone event', 'Time-limited window'],
            ['Referral Bonus', 'Referred friend’s activity', 'Ongoing, tied to their play']
          ]}
        />
      </Section>

      <Section eyebrow="Reading the Fine Print" title="Understanding bonus conditions">
        <div className={shared.prose}>
          <p>
            Every bonus offer states its terms clearly at the moment it is credited, including
            any conditions that must be met before the amount becomes withdrawable and any
            expiry date attached to it. Reading these details before you start playing avoids
            confusion later about why a portion of your balance is marked as bonus funds.
          </p>
          <p>
            For live, time-sensitive offers layered on top of these standing bonus types, check
            the <Link to="/91-club-promotions">91 Club Promotions</Link> page regularly.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Bonus questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Promotions', href: '/91-club-promotions' },
            { label: '91 Club Offers', href: '/91-club-offers' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club VIP', href: '/91-club-vip' },
            { label: '91 Club Gift Code', href: '/91-club-gift-code' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Claim your welcome bonus"
          subtitle="Register now and your first-deposit bonus is credited automatically."
        />
      </Section>
    </>
  );
}
