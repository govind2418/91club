import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Button from '../components/ui/Button.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Games', href: '/91-club-games' }
];

const faqs = [
  {
    question: 'Which 91 Club game is best for beginners?',
    answer:
      'Colour prediction is usually the easiest starting point since the rules take under a minute to learn and rounds settle quickly.'
  },
  {
    question: 'Can I switch between games freely?',
    answer: 'Yes, all games share the same account balance, so you can move between categories at any time.'
  },
  {
    question: 'Do all games use the same balance?',
    answer: 'Yes, deposits, bonuses and winnings all sit in one unified account balance across every game category.'
  },
  {
    question: 'Are new games added regularly?',
    answer: 'Yes, our slot library and occasional new formats are added periodically to keep the selection fresh.'
  },
  {
    question: 'Is there a mobile-friendly way to browse all games?',
    answer: 'Yes, the games hub is fully optimized for mobile browsing with quick category filters.'
  },
  {
    question: 'Where can I find 91club games specifically?',
    answer:
      'This directory covers every 91club games category in one place. "91 Club games" and "91club games" both point to the same colour prediction, lottery, aviator and slots library.'
  }
];

const categories = [
  {
    title: 'Colour Prediction',
    href: '/91-club-colour-prediction',
    text: 'Fast rounds where you predict the next colour or number outcome before the timer ends.'
  },
  {
    title: 'Lottery',
    href: '/91-club-lottery',
    text: 'Scheduled number draws with clear payout tiers and automatic settlement.'
  },
  {
    title: 'Aviator',
    href: '/91-club-aviator',
    text: 'A rising-multiplier crash game where timing your cash-out is everything.'
  },
  {
    title: 'Slots',
    href: '/91-club-slots',
    text: 'A themed library of spinning reel games with adjustable stake sizes.'
  }
];

export default function Games() {
  return (
    <>
      <SEO
        title="91 Club Games (91club Games) - Explore the Full Game Directory"
        description="Browse every 91 Club games (91club games) category in one place, from colour prediction to lottery, aviator and slots, and find the right fit for your play style."
        path="/91-club-games"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Games (91club Games) - Explore the Full Game Directory',
            description: 'A directory of every game category available on 91 Club, also searched as 91club games.',
            path: '/91-club-games'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Game Directory"
        title="91 Club Games: Every Category in One Place"
        intro="From quick prediction rounds to scheduled lottery draws, reactive crash gameplay and a themed slot library, this page is your starting point for exploring everything 91 Club offers."
        primaryLabel="Register Now"
        secondaryLabel="Read the Beginner's Guide"
        secondaryHref="/91-club-guide"
      />

      <Section eyebrow="Browse By Category" title="Pick a game format to explore">
        <div className={shared.grid3}>
          {categories.map((cat) => (
            <div className={shared.card} key={cat.href}>
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>
              <div style={{ marginTop: 16 }}>
                <Link to={cat.href}>
                  <Button variant="outline" size="sm">
                    Explore {cat.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Side by Side" title="Comparing pace and style across categories">
        <ComparisonTable
          caption="91 Club game categories compared"
          columns={['Game', 'Round Length', 'Style']}
          rows={[
            ['Colour Prediction', 'Under a minute', 'Fast, repeated rounds'],
            ['Lottery', 'Scheduled draws', 'Number selection, wait for results'],
            ['Aviator', 'Seconds to a minute', 'Reactive, timing-based'],
            ['Slots', 'Instant per spin', 'Casual, themed reels']
          ]}
        />
      </Section>

      <Section eyebrow="Choosing Your Style" title="Matching a game to how you like to play">
        <div className={shared.prose}>
          <p>
            If you enjoy quick, repeatable decisions, colour prediction and aviator both offer
            that fast rhythm. If you prefer setting a pick and checking back later, lottery
            draws suit that pace better. Slots sit somewhere in between, offering a casual,
            low-pressure spinning format with a wide range of themes.
          </p>
          <p>
            New to all of this? Our <Link to="/91-club-guide">beginner's guide</Link> walks
            through registration, deposits and your first session end to end, and our{' '}
            <Link to="/91-club-tips">tips page</Link> covers sensible session habits across every
            format.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Game directory questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Colour Prediction', href: '/91-club-colour-prediction' },
            { label: '91 Club Lottery', href: '/91-club-lottery' },
            { label: '91 Club Aviator', href: '/91-club-aviator' },
            { label: '91 Club Slots', href: '/91-club-slots' },
            { label: '91 Club Guide', href: '/91-club-guide' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Pick your first game"
          subtitle="Register now and explore every category from a single account balance."
        />
      </Section>
    </>
  );
}
