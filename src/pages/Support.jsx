import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { ChatIcon, ClockIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { TELEGRAM_URL, SUPPORT_EMAIL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Support', href: '/91-club-support' }
];

const faqs = [
  {
    question: 'How do I contact 91 Club support?',
    answer: `You can reach us through the in-app support chat, our Telegram channel, or by emailing ${SUPPORT_EMAIL}.`
  },
  {
    question: 'What are the support hours?',
    answer: 'Support is available 24 hours a day, seven days a week, though response speed can vary slightly during peak periods.'
  },
  {
    question: 'What information should I include in a support request?',
    answer: 'Your registered mobile number, a clear description of the issue, and any relevant screenshots help us resolve things faster.'
  },
  {
    question: 'Can support help me recover a locked account?',
    answer: 'Yes, account recovery requests are handled directly by our support team after identity verification.'
  },
  {
    question: 'Does support ever ask for my password?',
    answer: 'No, legitimate 91 Club staff will never ask for your password or verification codes under any circumstance.'
  }
];

export default function Support() {
  return (
    <>
      <SEO
        title="91 Club Support (91clubsupport) - Get Help Fast"
        description="Reach 91 Club support through live chat, Telegram or email. See typical response times and what to include in your request."
        path="/91-club-support"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Support - Get Help Fast',
            description: 'How to contact and get the most out of 91 Club customer support.',
            path: '/91-club-support'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Customer Support"
        title="91 Club Support: Help Whenever You Need It"
        intro="Whether you have a question about a deposit, a game round or your account status, our support channels are built to get you an answer quickly."
        primaryLabel="Register Now"
        secondaryLabel="Join Telegram"
        secondaryHref={TELEGRAM_URL}
      />

      <Section eyebrow="Ways to Reach Us" title="Choose the channel that suits you">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Live Chat</h3>
            <p>Open a support conversation directly from your account dashboard.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Telegram Channel</h3>
            <p>Quick answers and community discussion alongside official announcements.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Email Support</h3>
            <p>{`Send a detailed request to ${SUPPORT_EMAIL} for account-specific issues.`}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What to Expect" title="Typical response times by channel">
        <ComparisonTable
          caption="91 Club support response times"
          columns={['Channel', 'Typical Response Time', 'Best For']}
          rows={[
            ['Live Chat', 'Minutes', 'Urgent account or deposit issues'],
            ['Telegram', 'Minutes to a few hours', 'General questions and community help'],
            ['Email', 'Within a day', 'Detailed or document-based requests']
          ]}
        />
      </Section>

      <Section eyebrow="Before You Reach Out" title="Get a faster resolution">
        <div className={shared.stepGrid}>
          {[
            { title: 'Check the FAQ First', text: 'Many common questions are already answered on our FAQ page.' },
            { title: 'Gather Your Details', text: 'Have your registered number and a description of the issue ready.' },
            { title: 'Choose the Right Channel', text: 'Use live chat for urgent issues, email for detailed cases.' },
            { title: 'Follow Up If Needed', text: 'If you do not hear back in the expected window, send a polite follow-up.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="A Note on Safety" title="How to tell real support from impersonators">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Verify Before You Trust
          </h3>
          <ul className={shared.bulletList}>
            <li>Official support never asks for your password or verification codes.</li>
            <li>Only trust contact details listed on this page or inside your account dashboard.</li>
            <li>
              If you receive a suspicious message claiming to be from 91 Club, report it and
              review our <Link to="/91-club-security">security page</Link>.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Support questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club FAQ', href: '/91-club-faq' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: '91 Club Contact', href: '/91-club-contact' },
            { label: '91 Club Login', href: '/91-club-login' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="We are here around the clock"
          subtitle="Reach out any time through live chat, Telegram or email and we will get back to you quickly."
          primaryLabel="Join Telegram"
          primaryHref={TELEGRAM_URL}
          secondaryLabel="91 Club Contact"
          secondaryHref="/91-club-contact"
        />
      </Section>
    </>
  );
}
