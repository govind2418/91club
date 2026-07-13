import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { CardIcon, ClockIcon, ShieldIcon, WalletIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Tips', href: '/91-club-tips' }
];

const faqs = [
  {
    question: 'Is there a strategy that guarantees winning on 91 Club?',
    answer: 'No. Every game here is based on chance or reactive timing, and no strategy can guarantee an outcome.'
  },
  {
    question: 'What is the single most useful habit for new players?',
    answer: 'Setting a fixed session budget before you start and sticking to it regardless of results.'
  },
  {
    question: 'Should I chase losses to break even?',
    answer:
      'No, chasing losses by increasing stakes to recover a deficit tends to increase risk rather than solve anything. Stop and take a break instead.'
  },
  {
    question: 'How often should I take breaks?',
    answer: 'A short break every 20 to 30 minutes helps you make clearer decisions and avoid fatigue-driven choices.'
  },
  {
    question: 'Is it a good idea to track my sessions?',
    answer: 'Yes, keeping a simple record of deposits, results and time spent helps you notice patterns in your own play habits.'
  }
];

export default function Tips() {
  return (
    <>
      <SEO
        title="91 Club Tips (91clubtips) - Grounded Habits for Smarter Sessions"
        description="Practical, honest tips for playing 91 Club games responsibly, including budgeting, pacing and reading results without chasing patterns."
        path="/91-club-tips"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Tips - Grounded Habits for Smarter Sessions',
            description: 'Responsible, grounded tips for playing 91 Club games.',
            path: '/91-club-tips'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Winning Tips"
        title="91 Club Tips: Play Smarter, Not Just Faster"
        intro="These are not shortcuts to guaranteed wins, since every 91 Club game is based on chance or reactive timing. What follows are grounded habits that help you enjoy your sessions and stay in control."
        primaryLabel="Register Now"
        secondaryLabel="Read the Beginner's Guide"
        secondaryHref="/91-club-guide"
      />

      <Section eyebrow="Core Habits" title="Four habits worth building from day one">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Set a Session Budget</h3>
            <p>Decide your spending limit before you start and treat it as a hard stop.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Take Regular Breaks</h3>
            <p>Short pauses between rounds keep your decisions clear-headed.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <CardIcon />
            </div>
            <h3>Play One Game at a Time</h3>
            <p>Focusing on a single format helps you understand its pace before switching.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Avoid Chasing Losses</h3>
            <p>Increasing your stake to recover a loss tends to increase risk, not reduce it.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Common Misconceptions" title="Patterns that are not actually patterns">
        <div className={shared.prose}>
          <p>
            It is natural to look at a string of past colour prediction or lottery results and
            feel like a pattern is forming. In reality, each round is generated independently,
            meaning the outcome of the last ten rounds has no bearing on the next one. Treating
            recent history as predictive is one of the most common ways players talk themselves
            into risk they had not planned for.
          </p>
          <p>
            The same applies to Aviator: the point at which a round ends is not influenced by
            how long previous rounds lasted. Set your cash-out target based on your own comfort
            level, not on a pattern you think you have spotted.
          </p>
        </div>
      </Section>

      <Section eyebrow="A Simple Session Checklist" title="Before you open the app">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Quick Pre-Session Checklist
          </h3>
          <ul className={shared.bulletList}>
            <li>Decide your budget for this session and do not add more once it is spent.</li>
            <li>Pick one game format to focus on rather than spreading across several at once.</li>
            <li>Plan to stop after a set amount of time, regardless of how the session is going.</li>
            <li>
              If a session stops feeling enjoyable, close the app. It will be there when you come
              back, and so will your account, per our{' '}
              <Link to="/91-club-security">security page</Link>.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Tips and strategy questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Guide', href: '/91-club-guide' },
            { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' },
            { label: '91 Club Aviator', href: '/91-club-aviator' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Play with a plan, not just an impulse"
          subtitle="Register now and put these habits to use from your very first session."
        />
      </Section>
    </>
  );
}
