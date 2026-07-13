import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { BoltIcon, ClockIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Aviator', href: '/91-club-aviator' }
];

const faqs = [
  {
    question: 'What is the goal in Aviator?',
    answer:
      'A rising multiplier climbs from the start of each round, and your goal is to cash out before the round ends. The later you cash out, the higher the multiplier applied to your entry.'
  },
  {
    question: 'What happens if I do not cash out in time?',
    answer: 'If the round ends before you cash out, that round’s entry does not return a payout.'
  },
  {
    question: 'Can I set an automatic cash-out point?',
    answer: 'Yes, an auto cash-out option lets you lock in a multiplier target in advance instead of reacting manually each round.'
  },
  {
    question: 'How long does one Aviator round last?',
    answer: 'Rounds are brief, generally resolving within a matter of seconds to under a minute.'
  },
  {
    question: 'Is there a way to predict where a round will end?',
    answer:
      'No. Each round’s ending point is independently randomized, and no previous round outcome affects the next one.'
  }
];

export default function Aviator() {
  return (
    <>
      <SEO
        title="91 Club Aviator (91clubaviator) - How the Crash Game Works"
        description="Understand the 91 Club Aviator format: how the rising multiplier works, when to cash out, and how it compares to other game types."
        path="/91-club-aviator"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Aviator - How the Crash Game Works',
            description: 'A clear explanation of the 91 Club Aviator rising-multiplier game format.',
            path: '/91-club-aviator'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Rising Multiplier Game"
        title="91 Club Aviator: Cash Out Before the Round Ends"
        intro="Aviator is our fast-paced rising-multiplier format. Watch the multiplier climb, decide when to cash out, and see the round settle in real time."
        primaryLabel="Register Now"
        secondaryLabel="See Winning Tips"
        secondaryHref="/91-club-tips"
      />

      <Section eyebrow="How a Round Plays Out" title="The Aviator round cycle">
        <div className={shared.stepGrid}>
          {[
            { title: 'Round Begins', text: 'The multiplier starts climbing from the base value.' },
            { title: 'Watch It Rise', text: 'The multiplier increases for as long as the round continues.' },
            { title: 'Cash Out', text: 'Confirm your cash out at any point while the round is active.' },
            { title: 'Round Ends', text: 'The round concludes and settles based on when you cashed out, if at all.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Key Features" title="What makes Aviator distinct">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Real-Time Decisions</h3>
            <p>Every cash-out call happens live as the multiplier climbs, no waiting involved.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Quick Rounds</h3>
            <p>Each round wraps up fast, making it easy to fit in several rounds per session.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Auto Cash-Out Option</h3>
            <p>Set a target multiplier in advance if you prefer a hands-off approach.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Manual vs. Auto Cash-Out" title="Choosing your play style">
        <ComparisonTable
          caption="Manual and automatic cash-out compared"
          columns={['Style', 'How It Works', 'Best For']}
          rows={[
            ['Manual Cash-Out', 'You tap to cash out at any moment during the round', 'Players who want full control each round'],
            ['Auto Cash-Out', 'A pre-set multiplier target cashes out for you automatically', 'Players who prefer a consistent, hands-off target']
          ]}
        />
      </Section>

      <Section eyebrow="Play With a Plan" title="Setting a sensible approach to Aviator">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Grounded Habits for a Fast Game
          </h3>
          <ul className={shared.bulletList}>
            <li>Decide your cash-out target before the round starts rather than reacting emotionally.</li>
            <li>Use the auto cash-out feature if you find manual timing stressful.</li>
            <li>
              Keep your session budget in mind at all times; see our{' '}
              <Link to="/91-club-tips">full tips guide</Link> for more session habits.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Aviator questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' },
            { label: '91 Club Slots', href: '/91-club-slots' },
            { label: '91 Club Tips', href: '/91-club-tips' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Watch the multiplier climb"
          subtitle="Register now and try your first Aviator round with a simple, easy-to-follow interface."
        />
      </Section>
    </>
  );
}
