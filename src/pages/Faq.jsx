import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club FAQ', href: '/91-club-faq' }
];

const accountFaqs = [
  {
    question: 'How do I create a 91 Club account?',
    answer: 'Visit the register page, enter your mobile number and a password, then confirm the verification code sent to you.'
  },
  {
    question: 'I forgot my password. What should I do?',
    answer: 'Use the "Forgot Password" option on the login screen to verify your number and set a new password.'
  },
  {
    question: 'Can I have more than one account?',
    answer: 'No, each person is permitted a single account, and duplicates may be suspended during routine checks.'
  }
];

const gameFaqs = [
  {
    question: 'Which games are available on 91 Club?',
    answer: 'Colour prediction, lottery draws, the Aviator crash game and a themed slot library, all listed on our games page.'
  },
  {
    question: 'Is there a strategy that guarantees winning?',
    answer: 'No, every game is based on chance or reactive timing. Play within a fixed budget rather than expecting guaranteed returns.'
  },
  {
    question: 'Can I see the history of past results?',
    answer: 'Yes, each game includes a results history panel you can review at any time.'
  }
];

const paymentFaqs = [
  {
    question: 'How do deposits work?',
    answer: 'Choose a supported payment method from your wallet screen, and your balance updates as soon as the deposit clears.'
  },
  {
    question: 'How long do withdrawals take?',
    answer: 'Most requests are reviewed and released within minutes during standard support hours, though timing can vary by provider.'
  },
  {
    question: 'What is the difference between balance and bonus funds?',
    answer: 'Balance is fully withdrawable, while bonus funds may carry a usage condition before becoming withdrawable.'
  }
];

const securityFaqs = [
  {
    question: 'How is my account kept secure?',
    answer: 'Encrypted sessions, withdrawal verification and activity monitoring all run in the background to protect your account.'
  },
  {
    question: 'What if I notice suspicious activity?',
    answer: 'Change your password immediately and contact support so we can review your account activity.'
  },
  {
    question: 'Does support ever ask for my password?',
    answer: 'No, legitimate 91 Club staff never ask for your password or verification codes.'
  }
];

const allFaqs = [...accountFaqs, ...gameFaqs, ...paymentFaqs, ...securityFaqs];

export default function Faq() {
  return (
    <>
      <SEO
        title="91 Club FAQ (91clubfaq) - Answers to Common Questions"
        description="Find answers to the most common 91 Club questions, organized by account, games, payments and security."
        path="/91-club-faq"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club FAQ - Answers to Common Questions',
            description: 'A categorized list of the most common 91 Club questions and answers.',
            path: '/91-club-faq'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(allFaqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Answers, Organized"
        title="91 Club FAQ: Everything in One Place"
        intro="This page collects the most common questions our players ask, grouped by account access, gameplay, payments and security, so you can find an answer quickly without digging through every individual page."
        primaryLabel="Register Now"
        secondaryLabel="91 Club Support"
        secondaryHref="/91-club-support"
      />

      <Section eyebrow="Account" title="Account and login questions">
        <FAQAccordion faqs={accountFaqs} />
      </Section>

      <Section eyebrow="Games" title="Gameplay questions">
        <FAQAccordion faqs={gameFaqs} />
      </Section>

      <Section eyebrow="Payments" title="Deposits and withdrawals">
        <FAQAccordion faqs={paymentFaqs} />
      </Section>

      <Section eyebrow="Security" title="Account safety questions">
        <FAQAccordion faqs={securityFaqs} />
      </Section>

      <Section eyebrow="Still Have Questions?" title="Reach out directly">
        <p style={{ color: 'var(--color-text-muted)', maxWidth: 640 }}>
          If your question is not covered here, our{' '}
          <Link to="/91-club-support">support team</Link> is available around the clock, or you
          can browse individual pages like <Link to="/91-club-security">Security</Link>,{' '}
          <Link to="/91-club-bonus">Bonus</Link> and <Link to="/91-club-games">Games</Link> for
          deeper detail on each topic.
        </p>
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: '91 Club Guide', href: '/91-club-guide' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Contact', href: '/91-club-contact' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Didn't find what you were looking for?"
          subtitle="Our support team is available 24/7 to help with anything not covered on this page."
          primaryLabel="91 Club Support"
          primaryHref="/91-club-support"
        />
      </Section>
    </>
  );
}
