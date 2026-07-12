import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { CardIcon, WalletIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Slots', href: '/91-club-slots' }
];

const faqs = [
  {
    question: 'How many slot titles does 91 Club offer?',
    answer:
      'The slot library spans a range of themes and stake levels, with new titles added periodically to keep the selection fresh.'
  },
  {
    question: 'Can I try a slot before committing a full stake?',
    answer: 'Most titles support small minimum stakes, letting you get a feel for a game without a large commitment.'
  },
  {
    question: 'What does a return-to-player percentage mean?',
    answer:
      'It is a theoretical long-term average of how much a slot returns to players over a very large number of spins, not a guarantee for any single session.'
  },
  {
    question: 'Are slot results random?',
    answer: 'Yes, every spin outcome is generated independently and is not influenced by previous spins.'
  },
  {
    question: 'Can I filter slots by theme or stake size?',
    answer: 'Yes, the slots tab includes filters so you can browse by category, theme or minimum stake.'
  }
];

export default function Slots() {
  return (
    <>
      <SEO
        title="91 Club Slots - Browse the Full Game Library"
        description="Explore the 91 Club slot library, understand how stake sizes and return percentages work, and find a title that matches your style."
        path="/91-club-slots"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Slots - Browse the Full Game Library',
            description: 'An overview of the 91 Club slot game library and how to choose a title.',
            path: '/91-club-slots'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Slot Library"
        title="91 Club Slots: A Themed Library for Every Session Length"
        intro="Our slot section spans multiple themes and stake sizes, from quick casual spins to higher-stake sessions. Here is how to browse the library and understand what you are looking at."
        primaryLabel="Register Now"
        secondaryLabel="Explore All Games"
        secondaryHref="/91-club-games"
      />

      <Section eyebrow="Getting Started" title="Finding a slot that fits your style">
        <div className={shared.stepGrid}>
          {[
            { title: 'Open the Slots Tab', text: 'Browse the full library from your dashboard menu.' },
            { title: 'Filter by Theme or Stake', text: 'Narrow results using the built-in category filters.' },
            { title: 'Check the Paytable', text: 'Review the payout structure before placing your first spin.' },
            { title: 'Set Your Stake', text: 'Choose a comfortable stake size and start spinning.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Library Highlights" title="What you will find in the slots section">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <CardIcon />
            </div>
            <h3>Varied Themes</h3>
            <p>From classic fruit-style reels to more elaborate adventure and fantasy themes.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Flexible Stakes</h3>
            <p>Adjustable stake sizes make it easy to match a title to your session budget.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Transparent Paytables</h3>
            <p>Every title displays its payout structure and rules before you spin.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Choosing a Category" title="Slot styles compared">
        <ComparisonTable
          caption="Common slot categories on 91 Club"
          columns={['Category', 'Pace', 'Typical Stake Range']}
          rows={[
            ['Classic Reels', 'Quick, simple spins', 'Low to moderate'],
            ['Themed Adventure', 'Moderate, with bonus rounds', 'Moderate'],
            ['High Volatility', 'Slower payout frequency, larger potential swings', 'Moderate to higher']
          ]}
        />
      </Section>

      <Section eyebrow="Play Thoughtfully" title="A few notes before you spin">
        <div className={shared.prose}>
          <p>
            Slot outcomes are generated independently for every spin, so there is no pattern to
            track across a session. Return-to-player figures describe long-run averages across
            an enormous number of spins, not what to expect in a single sitting.
          </p>
          <p>
            Choose a stake size you are fully comfortable with before you start, and consider
            reviewing our <Link to="/91-club-tips">winning tips guide</Link> for general session
            pacing advice that applies across every game type.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Slots questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Aviator', href: '/91-club-aviator' },
            { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' },
            { label: '91 Club Tips', href: '/91-club-tips' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Browse the full slot library"
          subtitle="Register now and filter titles by theme, stake size and volatility from your dashboard."
        />
      </Section>
    </>
  );
}
