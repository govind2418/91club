import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Guide', href: '/91-club-guide' }
];

const faqs = [
  {
    question: 'Do I need experience with betting apps to use 91 Club?',
    answer: 'No, this guide is written for complete first-time users and assumes no prior experience.'
  },
  {
    question: 'What is the very first thing I should do?',
    answer: 'Register an account, since every other feature, from bonuses to games, is unlocked from your dashboard.'
  },
  {
    question: 'How much should I deposit for my first session?',
    answer: 'Start with an amount you would be entirely comfortable not seeing again, and increase gradually as you get familiar with the platform.'
  },
  {
    question: 'What is the difference between balance and bonus funds?',
    answer:
      'Balance is your deposited or withdrawable amount, while bonus funds may carry a usage condition before becoming withdrawable, as explained on our bonus page.'
  },
  {
    question: 'Where do I go if I get stuck?',
    answer: 'Our support team and FAQ page cover the vast majority of first-time questions.'
  }
];

export default function Guide() {
  return (
    <>
      <SEO
        title="91 Club Guide - A Complete Beginner's Walkthrough"
        description="New to 91 Club? This beginner's guide walks through registration, deposits, your first game and withdrawals from start to finish."
        path="/91-club-guide"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Guide - A Complete Beginner\'s Walkthrough',
            description: 'A start-to-finish beginner walkthrough of the 91 Club platform.',
            path: '/91-club-guide'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Beginner's Guide"
        title="91 Club Guide: Everything a First-Timer Needs to Know"
        intro="This walkthrough covers the entire journey, from creating an account to playing your first round and requesting your first withdrawal, written for someone who has never used the platform before."
        primaryLabel="Register Now"
        secondaryLabel="Read Winning Tips"
        secondaryHref="/91-club-tips"
      />

      <Section eyebrow="The Full Journey" title="From zero to your first withdrawal">
        <div className={shared.stepGrid}>
          {[
            { title: '1. Create an Account', text: 'Register with your mobile number and a secure password.' },
            { title: '2. Explore the Dashboard', text: 'Get familiar with the games, wallet and rewards sections.' },
            { title: '3. Make a Small Deposit', text: 'Add a comfortable amount using a supported payment method.' },
            { title: '4. Try a Game', text: 'Start with colour prediction or slots to learn the interface.' },
            { title: '5. Track Your Balance', text: 'Watch how deposits, bonuses and results reflect in your wallet.' },
            { title: '6. Request a Withdrawal', text: 'Once ready, submit a withdrawal and track its review status.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Key Terms" title="A short glossary before you start">
        <ComparisonTable
          caption="Common terms you will see across the platform"
          columns={['Term', 'Meaning']}
          rows={[
            ['Balance', 'The total amount available in your account'],
            ['Bonus Funds', 'Credited rewards that may carry a usage condition'],
            ['Invite Code', 'Your personal code for referring friends'],
            ['VIP Tier', 'Your ongoing status level based on activity'],
            ['Round', 'A single instance of a game, such as one colour prediction cycle']
          ]}
        />
      </Section>

      <Section eyebrow="Setting Expectations" title="What to know before you deposit">
        <div className={shared.prose}>
          <p>
            Every game on 91 Club is based on chance or reactive timing rather than guaranteed
            outcomes. This guide is meant to help you navigate the platform confidently, not to
            suggest any method of guaranteed profit. Treat your deposit as an entertainment
            budget, and use the pacing habits covered on our{' '}
            <Link to="/91-club-tips">tips page</Link> to keep sessions enjoyable.
          </p>
          <p>
            If anything about your account, a deposit or a withdrawal feels unclear at any
            point, our <Link to="/91-club-support">support team</Link> is available to walk you
            through it directly.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Beginner questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Register', href: '/91-club-register' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Tips', href: '/91-club-tips' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Ready to take the first step?"
          subtitle="Register now and follow this guide through your very first session."
        />
      </Section>
    </>
  );
}
