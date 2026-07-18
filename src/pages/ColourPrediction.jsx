import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Testimonials from '../components/ui/Testimonials.jsx';
import { BoltIcon, ShieldIcon, ClockIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' }
];

const faqs = [
  {
    question: 'How does colour prediction work on 91 Club?',
    answer:
      'Each round displays a result colour after a short countdown. You choose a colour or number before the timer ends, and the round settles automatically once time runs out.'
  },
  {
    question: 'How long does each round take?',
    answer: 'Rounds are intentionally short, typically lasting under a minute from open to settlement.'
  },
  {
    question: 'Is there a strategy that guarantees a win?',
    answer:
      'No. Each round is an independent, random outcome. Any pattern you think you see in past results does not influence the next one.'
  },
  {
    question: 'Can I see the history of past rounds?',
    answer: 'Yes, a results history panel is available so you can review recent outcomes at any time.'
  },
  {
    question: 'Is colour prediction suitable for beginners?',
    answer:
      'The rules are simple to learn, but like any chance-based game, it should be played with a fixed budget and treated as entertainment rather than income.'
  }
];

export default function ColourPrediction() {
  return (
    <>
      <SEO
        title="91 Club Colour Prediction (91clubcolourprediction) - Rules, Rounds and Strategy Basics"
        description="See how 91 Club colour prediction rounds work, how long they last, and grounded tips for playing within a responsible budget."
        path="/91-club-colour-prediction"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Colour Prediction - Rules, Rounds and Strategy Basics',
            description: 'A clear explanation of how 91 Club colour prediction rounds are structured.',
            path: '/91-club-colour-prediction'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Most Played Game"
        title="91 Club Colour Prediction: How Rounds Work"
        intro="Colour prediction is our fastest, most popular game format: pick a colour before the timer ends and see the round settle in real time. Here is exactly how it works and how to play it responsibly."
        primaryLabel="Register Now"
        secondaryLabel="See Winning Tips"
        secondaryHref="/91-club-tips"
      />

      <Section eyebrow="Game Basics" title="Understanding a colour prediction round">
        <div className={shared.stepGrid}>
          {[
            { title: 'Round Opens', text: 'A new round begins and a countdown timer starts on screen.' },
            { title: 'Make Your Pick', text: 'Choose a colour or number option before the countdown ends.' },
            { title: 'Timer Ends', text: 'Once time runs out, no further picks are accepted for that round.' },
            { title: 'Result Settles', text: 'The outcome is revealed and any winnings are credited automatically.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Players Like It" title="What makes this format popular">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Fast Pace</h3>
            <p>Short rounds mean you are never waiting long to see a result.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Simple to Learn</h3>
            <p>The rules take under a minute to understand, even for first-time players.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Transparent Results</h3>
            <p>A visible history panel lets you review every past round outcome.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Format Comparison" title="Colour prediction vs. other 91 Club games">
        <ComparisonTable
          caption="How colour prediction compares to lottery and aviator"
          columns={['Aspect', 'Colour Prediction', 'Lottery', 'Aviator']}
          rows={[
            ['Round length', 'Under a minute', 'Scheduled draws', 'Seconds to a minute'],
            ['Decision style', 'Pick before timer ends', 'Pick numbers in advance', 'Cash out before it stops'],
            ['Pace', 'Very fast', 'Slower, scheduled', 'Fast and reactive'],
            ['Best for', 'Quick repeated sessions', 'Players who enjoy waiting for draws', 'Players who like reactive timing']
          ]}
        />
      </Section>

      <Section eyebrow="Play Within Limits" title="A grounded approach to colour prediction">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Keep It Entertainment, Not Income
          </h3>
          <ul className={shared.bulletList}>
            <li>Set a fixed budget for the session and stop once you reach it, win or lose.</li>
            <li>Treat every round as independent; previous results do not predict the next one.</li>
            <li>
              If you ever feel you are chasing losses, pause and review our{' '}
              <Link to="/91-club-security">security and account tools</Link>.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Player Feedback" title="What players say about this format">
        <Testimonials
          items={[
            {
              name: 'Vikram T.',
              role: 'Daily Player',
              rating: 5,
              quote: 'It is quick enough to fit into a short break, which is exactly what I look for in a game like this.'
            },
            {
              name: 'Neha R.',
              role: 'Weekend Player',
              rating: 4,
              quote: 'Simple rules, clear results history. Nothing confusing about how a round plays out.'
            }
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="Colour prediction questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Lottery', href: '/91-club-lottery' },
            { label: '91 Club Aviator', href: '/91-club-aviator' },
            { label: '91 Club Slots', href: '/91-club-slots' },
            { label: '91 Club Tips', href: '/91-club-tips' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Try your first colour prediction round"
          subtitle="Register in under a minute and join the next round from your dashboard."
        />
      </Section>
    </>
  );
}
