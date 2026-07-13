import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import StatCounter from '../components/ui/StatCounter.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { ShieldIcon, BoltIcon, UsersIcon, TrophyIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About 91 Club', href: '/about-91-club' }
];

const faqs = [
  {
    question: 'When was 91 Club created?',
    answer: '91 Club was built around a simple idea: fast, transparent, round-based games with a genuinely premium interface.'
  },
  {
    question: 'What kind of games does 91 Club focus on?',
    answer: 'We focus on short-round formats including colour prediction, lottery, a rising-multiplier crash game and themed slots.'
  },
  {
    question: 'What does "responsible gaming" mean at 91 Club?',
    answer: 'It means giving players clear information, transparent odds and tools to set their own limits, rather than hiding how the platform works.'
  },
  {
    question: 'How can I learn more about the team behind 91 Club?',
    answer: 'Our support and Telegram channels are the best way to stay connected with updates from the team.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About 91 Club (91club) - Our Platform and Philosophy"
        description="Learn about 91 Club's approach to gaming, also searched as 91club, our focus on speed, transparency and player security, and what drives the platform forward."
        path="/about-91-club"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: 'About 91 Club (91club) - Our Platform and Philosophy',
            description: 'An introduction to 91 Club, our values and our approach to online gaming.',
            path: '/about-91-club'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Our Story"
        title="About 91 Club: Built Around Speed, Clarity and Trust"
        intro="91 Club started with a straightforward goal: build a gaming platform where rounds move quickly, results are transparent, and players always know exactly where they stand."
        primaryLabel="Register Now"
        secondaryLabel="Meet Our Support Team"
        secondaryHref="/91-club-support"
      />

      <Section eyebrow="Our Approach" title="What guides how we build the platform">
        <div className={shared.twoCol}>
          <div className={shared.prose}>
            <p>
              Most gaming platforms fall into one of two traps: they either overload players
              with complexity, or they hide how outcomes actually work behind vague language.
              We took a different approach, keeping every game format simple to explain and
              every result visible in a history panel you can check at any time.
            </p>
            <p>
              That same philosophy carries into our account and payment systems. Withdrawal
              timelines, bonus conditions and VIP tier requirements are all documented clearly
              rather than buried in fine print, because we would rather players trust the
              platform than have to guess how it works.
            </p>
          </div>
          <div className={shared.infoBox}>
            <h3>What We Prioritize</h3>
            <ul className={shared.bulletList}>
              <li>Fast, round-based games that respect your time.</li>
              <li>Transparent results history across every game format.</li>
              <li>Clear bonus terms with no hidden conditions.</li>
              <li>Security measures that protect accounts without adding friction.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="At a Glance" title="91 Club today">
        <StatCounter
          stats={[
            { value: 2000000, suffix: '+', label: 'Registered Players' },
            { value: 500000, suffix: '+', label: 'Rounds Played Daily' },
            { value: 4, suffix: '', label: 'Core Game Formats' },
            { value: 24, suffix: '/7', label: 'Support Availability' }
          ]}
        />
      </Section>

      <Section eyebrow="Our Values" title="The principles behind every feature we ship">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Speed First</h3>
            <p>Every interaction, from login to withdrawal, is designed to be fast without cutting corners on safety.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Security by Default</h3>
            <p>Encryption and verification are built into the core experience, not offered as an optional add-on.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <UsersIcon />
            </div>
            <h3>Community Focused</h3>
            <p>Our Telegram community shapes ongoing decisions about promotions and features.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>Rewarding Loyalty</h3>
            <p>Our VIP system is built to recognize consistent, long-term players over time.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Responsible Gaming" title="Entertainment first, always">
        <div className={shared.prose}>
          <p>
            We are upfront that every game on 91 Club is based on chance or reactive timing.
            Nothing here is designed to be a source of guaranteed income, and we encourage every
            player to set a budget, take breaks, and treat their sessions as entertainment. Our
            full policy is outlined on the <Link to="/responsible-gaming">Responsible Gaming</Link>{' '}
            page.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="About us, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: 'Responsible Gaming', href: '/responsible-gaming' },
            { label: '91 Club Contact', href: '/91-club-contact' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Join the 91 Club community"
          subtitle="See what a fast, transparent gaming platform feels like from your very first session."
        />
      </Section>
    </>
  );
}
