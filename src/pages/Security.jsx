import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import withdrawPaymentOptions from '../assets/screenshots/91club-withdraw-payment-options.jpg';
import { ShieldIcon, WalletIcon, ChatIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Security', href: '/91-club-security' }
];

const faqs = [
  {
    question: 'How is my account protected?',
    answer:
      'Sessions run over encrypted connections, login attempts are monitored for unusual activity, and withdrawals pass through a verification step before release.'
  },
  {
    question: 'What should I do if I suspect unauthorized access?',
    answer: 'Change your password immediately and contact support so we can review recent account activity.'
  },
  {
    question: 'Does 91 Club store my payment details?',
    answer: 'Payment information is handled through secure processing methods rather than stored in plain, readable form.'
  },
  {
    question: 'How can I make my own account more secure?',
    answer: 'Use a unique password, avoid logging in on public devices, and never share verification codes with anyone.'
  },
  {
    question: 'What happens during a large withdrawal?',
    answer: 'Larger withdrawals may trigger an additional identity check as a routine safeguard before funds are released.'
  }
];

export default function Security() {
  return (
    <>
      <SEO
        title="91 Club Security (91clubsecurity) - How Your Account Is Protected"
        description="Learn how 91 Club protects accounts and transactions, and what steps you can take to keep your own account secure."
        path="/91-club-security"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Security - How Your Account Is Protected',
            description: 'An overview of the security measures protecting 91 Club accounts and transactions.',
            path: '/91-club-security'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Account Protection"
        title="91 Club Security: How We Protect Your Account and Balance"
        intro="Every login, deposit and withdrawal on 91 Club passes through layers of protection designed to keep your account and balance safe. Here is what runs in the background, and what you can do on your end."
        primaryLabel="Register Now"
        secondaryLabel="91 Club Support"
        secondaryHref="/91-club-support"
      />

      <Section eyebrow="Platform-Side Protection" title="What we do to protect every account">
        <div className={shared.mediaSplit}>
          <div className={shared.grid3}>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <ShieldIcon />
              </div>
              <h3>Encrypted Sessions</h3>
              <p>All login sessions and transactions run over encrypted connections.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <WalletIcon />
              </div>
              <h3>Withdrawal Verification</h3>
              <p>Every withdrawal request passes a verification step before funds are released.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <ChatIcon />
              </div>
              <h3>Activity Monitoring</h3>
              <p>Unusual login patterns or account behavior are flagged for manual review.</p>
            </div>
          </div>
          <Screenshot src={withdrawPaymentOptions} alt="91club withdraw screen showing bank card, UPI and USDT options" />
        </div>
      </Section>

      <Section eyebrow="Your Part" title="Steps you can take to strengthen your own account">
        <div className={shared.stepGrid}>
          {[
            { title: 'Use a Unique Password', text: 'Avoid reusing a password from another site or app.' },
            { title: 'Guard Verification Codes', text: 'Never share a one-time code with anyone, including support.' },
            { title: 'Log Out on Shared Devices', text: 'Always sign out manually after using a public or shared device.' },
            { title: 'Monitor Your Activity', text: 'Review your login and transaction history periodically.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Threat Types" title="What our protections guard against">
        <ComparisonTable
          caption="Common account threats and how they are addressed"
          columns={['Threat', 'How It Usually Happens', 'Our Protection']}
          rows={[
            ['Account takeover', 'Reused or leaked passwords', 'Session monitoring and verification prompts'],
            ['Phishing links', 'Fake messages imitating support', 'Official channel verification and awareness guidance'],
            ['Unauthorized withdrawals', 'Compromised account access', 'Withdrawal verification step before release'],
            ['Fake gift or download links', 'Third-party sites imitating 91 Club', 'Official domain and channel confirmation']
          ]}
        />
      </Section>

      <Section eyebrow="Recognizing a Problem Early" title="Warning signs worth acting on immediately">
        <div className={shared.prose}>
          <p>
            If you notice a login you do not recognize, a password that suddenly stops working,
            or a balance change you cannot account for, treat it as urgent. Change your password
            right away and reach out to <Link to="/91-club-support">91 Club Support</Link> so we
            can review the activity on our end.
          </p>
          <p>
            The same caution applies to unsolicited messages claiming to be from 91 Club,
            especially ones asking for your password, verification code, or a payment to
            "unlock" a bonus. Legitimate messages never ask for these details.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Security questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Login', href: '/91-club-login' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club FAQ', href: '/91-club-faq' },
            { label: 'Responsible Gaming', href: '/responsible-gaming' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Your account, protected from day one"
          subtitle="Register now and put these security habits into practice from your very first login."
        />
      </Section>
    </>
  );
}
