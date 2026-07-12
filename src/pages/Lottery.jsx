import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { ClockIcon, TrophyIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Lottery', href: '/91-club-lottery' }
];

const faqs = [
  {
    question: 'How often do 91 Club lottery draws happen?',
    answer:
      'Draws run on a scheduled, repeating cycle throughout the day, so there is always an upcoming draw to join.'
  },
  {
    question: 'How do I pick my numbers?',
    answer:
      'Open the lottery tab, select your numbers or use the quick-pick option for a random selection, then confirm your entry before the draw closes.'
  },
  {
    question: 'When are results announced?',
    answer: 'Results are published automatically the moment a draw closes, with no manual delay.'
  },
  {
    question: 'Can I join multiple draws in one day?',
    answer: 'Yes, you can enter as many scheduled draws as you like throughout the day.'
  },
  {
    question: 'Are winnings credited automatically?',
    answer: 'Yes, matching entries are settled and credited to your balance immediately after the draw closes.'
  }
];

export default function Lottery() {
  return (
    <>
      <SEO
        title="91 Club Lottery - Draw Schedule and How to Play"
        description="Learn how 91 Club lottery draws are scheduled, how to pick numbers, and when results and winnings are settled."
        path="/91-club-lottery"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Lottery - Draw Schedule and How to Play',
            description: 'A complete guide to how the 91 Club lottery draw format works.',
            path: '/91-club-lottery'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Scheduled Draws"
        title="91 Club Lottery: Pick Your Numbers, Watch the Draw"
        intro="The lottery format runs on scheduled draws throughout the day. Choose your numbers, confirm your entry, and see results the moment the draw closes."
        primaryLabel="Register Now"
        secondaryLabel="Explore All Games"
        secondaryHref="/91-club-games"
      />

      <Section eyebrow="How It Works" title="Joining a lottery draw step by step">
        <div className={shared.stepGrid}>
          {[
            { title: 'Open the Lottery Tab', text: 'Find the current and upcoming draws listed by time.' },
            { title: 'Choose Your Numbers', text: 'Pick manually or use quick-pick for a random set.' },
            { title: 'Confirm Your Entry', text: 'Submit before the draw window closes to be included.' },
            { title: 'Check the Result', text: 'View the outcome and any credited winnings right after the draw.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Play the Lottery" title="What sets this format apart">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Scheduled Draws</h3>
            <p>Know exactly when the next draw closes instead of guessing at timing.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>Clear Payout Structure</h3>
            <p>Prize tiers are visible before you enter, so there is no ambiguity about outcomes.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Automatic Settlement</h3>
            <p>Winnings are credited without any manual claim process required.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Draw Formats" title="Comparing draw frequency and entry style">
        <ComparisonTable
          caption="91 Club lottery draw types"
          columns={['Draw Type', 'Frequency', 'Entry Style']}
          rows={[
            ['Quick Draw', 'Every few minutes', 'Manual pick or quick-pick'],
            ['Standard Draw', 'Several times per hour', 'Manual pick or quick-pick'],
            ['Daily Feature Draw', 'Once per day', 'Manual pick only']
          ]}
        />
      </Section>

      <Section eyebrow="Play Sensibly" title="Setting expectations before you enter">
        <div className={shared.prose}>
          <p>
            Lottery draws are a game of chance. The numbers you pick have an equal likelihood of
            matching regardless of past draw history, so there is no pattern in previous results
            worth chasing. Enter with an amount you are comfortable not seeing again, and treat
            any win as a bonus rather than an expectation.
          </p>
          <p>
            For a broader look at pacing your sessions across every game type, see our{' '}
            <Link to="/91-club-tips">winning tips guide</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Lottery questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' },
            { label: '91 Club Aviator', href: '/91-club-aviator' },
            { label: '91 Club Tips', href: '/91-club-tips' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="The next draw is coming up"
          subtitle="Register now and pick your numbers before the current draw window closes."
        />
      </Section>
    </>
  );
}
