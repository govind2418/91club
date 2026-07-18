import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, buildHowToSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { ShieldIcon, BoltIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Login', href: '/91-club-login' }
];

const faqs = [
  {
    question: 'What do I need to log into 91 Club?',
    answer:
      'You only need the mobile number you registered with and your account password. If you set up an alternate sign-in method, that works as well.'
  },
  {
    question: 'I forgot my 91 Club password. What now?',
    answer:
      'Select "Forgot Password" on the login screen, verify your registered number with the code sent to you, and set a new password immediately.'
  },
  {
    question: 'Why does 91 Club log me out automatically?',
    answer:
      'Sessions expire after a period of inactivity as a security measure. This protects your account if you leave the app open on a shared device.'
  },
  {
    question: 'Can I stay logged in on my phone?',
    answer:
      'Yes, if you choose the "remember this device" option during login, though we still recommend logging out on shared or public devices.'
  },
  {
    question: 'Is it safe to log in on public Wi-Fi?',
    answer:
      'The connection itself is encrypted, but we generally advise against entering account credentials on open public networks whenever a private connection is available.'
  },
  {
    question: 'I searched "91club login" - is this the right page?',
    answer:
      'Yes. Whether you type "91 club login" or "91club login," both searches lead to the same official sign-in page and the same account system.'
  }
];

const loginSteps = [
  {
    title: 'Open the Login Page',
    text: 'Visit the 91 Club login screen from your browser or from the installed app shortcut.'
  },
  {
    title: 'Enter Your Details',
    text: 'Type in your registered mobile number and the password you created during sign-up.'
  },
  {
    title: 'Verify If Prompted',
    text: 'If it is a new device, confirm the one-time code sent to your registered number.'
  },
  {
    title: 'Start Playing',
    text: 'Once verified, you land on your dashboard with your balance and active games ready to go.'
  }
];

export default function Login() {
  return (
    <>
      <SEO
        title="91 Club Login (91club Login) - Sign In To Your Account"
        description="Learn how to complete your 91 Club login (91club login) quickly and securely, fix common sign-in issues, and keep your account protected every time you play."
        path="/91-club-login"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Login (91club Login) - Sign In To Your Account',
            description: 'A complete guide to logging into 91 Club, often searched as 91club login, safely and resolving common sign-in problems.',
            path: '/91-club-login'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs),
          buildHowToSchema({
            name: 'How to log into 91 Club',
            description: 'Step-by-step instructions for signing into your 91 Club account.',
            steps: loginSteps
          })
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Account Access"
        title="91 Club Login: Get Back Into Your Account in Seconds"
        intro="Your 91 Club account is the gateway to every game, bonus and reward on the platform. This page walks through the exact login steps, what to do when something goes wrong, and how to keep your session secure on any device."
        primaryLabel="Go to Register"
        primaryHref="/91-club-register"
        secondaryLabel="Download the App"
        secondaryHref="/91-club-download"
      />

      <Section eyebrow="Step By Step" title="How to log into 91 Club">
        <div className={shared.stepGrid}>
          {loginSteps.map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Troubleshooting"
        title="Common login problems and how to fix them"
        subtitle="Most login issues come down to one of the following causes. Check this table before contacting support."
      >
        <ComparisonTable
          caption="91 Club login troubleshooting guide"
          columns={['Issue', 'Likely Cause', 'Quick Fix']}
          rows={[
            ['"Incorrect password" error', 'Typo or outdated saved password', 'Use "Forgot Password" to reset it instantly'],
            ['Verification code not arriving', 'Network delay or blocked messages', 'Wait 60 seconds, then request a new code'],
            ['Account temporarily locked', 'Multiple failed login attempts', 'Wait 15 minutes or contact support to unlock'],
            ['Page not loading', 'Weak connection or outdated browser cache', 'Refresh the page or clear your browser cache'],
            ['Logged out unexpectedly', 'Session timeout after inactivity', 'Simply log in again with your credentials']
          ]}
        />
      </Section>

      <Section eyebrow="Stay Protected" title="Security habits for every login session">
        <div className={shared.twoCol}>
          <div className={shared.infoBox}>
            <h3>
              <ShieldIcon /> Protect Your Credentials
            </h3>
            <ul className={shared.bulletList}>
              <li>Never share your password or verification codes with anyone, including support staff.</li>
              <li>Use a password you have not reused on other websites or apps.</li>
              <li>Log out manually whenever you use a shared or public device.</li>
            </ul>
          </div>
          <div className={shared.infoBox}>
            <h3>
              <BoltIcon /> Keep Access Fast
            </h3>
            <ul className={shared.bulletList}>
              <li>Save the official login page as a bookmark to avoid typing the address each time.</li>
              <li>Install the app or add it to your home screen for a one-tap launch.</li>
              <li>
                Keep your registered mobile number updated in <Link to="/91-club-support">support</Link> so
                verification codes always reach you.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Session Timing" title="Understanding how long you stay signed in">
        <div className={shared.prose}>
          <p>
            91 Club sessions are designed to balance convenience with account safety. On a
            recognized device, your session generally remains active for the length of your
            play session and a short buffer afterward. On a new device or after a long period of
            inactivity, you will be asked to verify your identity again before continuing.
          </p>
          <p>
            This is intentional. Prediction and reward-based platforms are a common target for
            account takeover attempts, so a short, renewable session window limits the damage an
            unauthorized login could cause. If you ever see a login attempt you do not
            recognize, change your password immediately and reach out to{' '}
            <Link to="/91-club-support">91 Club Support</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Login questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Register', href: '/91-club-register' },
            { label: '91 Club App', href: '/91-club-app' },
            { label: '91 Club Download', href: '/91-club-download' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="New here? Create your account first."
          subtitle="Registration takes less than a minute, and you will be logging in with these exact steps right after."
          primaryLabel="Register Now"
          primaryHref="/91-club-register"
          secondaryLabel="91 Club Support"
          secondaryHref="/91-club-support"
        />
      </Section>
    </>
  );
}
