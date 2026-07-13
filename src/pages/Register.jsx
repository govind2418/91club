import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, buildHowToSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Testimonials from '../components/ui/Testimonials.jsx';
import { GiftIcon, TrophyIcon, UsersIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Register', href: '/91-club-register' }
];

const faqs = [
  {
    question: 'Is 91 Club registration free?',
    answer: 'Yes, creating an account costs nothing. You only add funds when you choose to deposit.'
  },
  {
    question: 'What information do I need to register?',
    answer:
      'Just an active mobile number and a password of your choice. You can complete your profile details later from account settings.'
  },
  {
    question: 'Can I register with an invite code?',
    answer:
      'Yes, entering a valid invite code during sign-up links your account to the referrer and can unlock welcome bonuses for both of you.'
  },
  {
    question: 'Is there a minimum age to register?',
    answer:
      'You must be 18 years or older to create a 91 Club account, in line with our responsible gaming policy.'
  },
  {
    question: 'Can I have more than one account?',
    answer:
      'No, each person is permitted a single account. Duplicate accounts may be suspended during routine security checks.'
  },
  {
    question: 'Does "91club register" work the same as "91 Club register"?',
    answer:
      'Yes, both phrases describe the exact same sign-up process. There is only one registration system, regardless of how you type the name.'
  }
];

const registerSteps = [
  { title: 'Open the Register Page', text: 'Head to the registration screen from any device.' },
  { title: 'Enter Your Mobile Number', text: 'This becomes your primary login identifier going forward.' },
  { title: 'Set a Strong Password', text: 'Choose a password you have not used elsewhere for better security.' },
  { title: 'Add an Invite Code (Optional)', text: 'Enter a friend’s invite code to unlock linked bonuses.' },
  { title: 'Verify and Confirm', text: 'Confirm the one-time code sent to your number to activate the account.' }
];

export default function Register() {
  return (
    <>
      <SEO
        title="91 Club Register (91club Register) - Create Your Free Account"
        description="Register on 91 Club (91club register) in under a minute. See what you need, what you get with your welcome bonus, and how account verification works."
        path="/91-club-register"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Register (91club Register) - Create Your Free Account',
            description: 'Step-by-step 91 Club registration guide, also searched as 91club register, covering requirements, bonuses and verification.',
            path: '/91-club-register'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs),
          buildHowToSchema({
            name: 'How to register on 91 Club',
            description: 'Step-by-step instructions for creating a new 91 Club account.',
            steps: registerSteps
          })
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Create Your Account"
        title="91 Club Register: Join in Under a Minute"
        intro="Registration is the first step to unlocking colour prediction, lottery, aviator and slot games, along with a welcome bonus and access to our VIP reward ladder. Here is exactly what to expect."
        primaryLabel="Register Now"
        primaryHref="/91-club-register"
        secondaryLabel="Already Have an Account?"
        secondaryHref="/91-club-login"
      />

      <Section
        eyebrow="What You Get"
        title="Why players sign up for 91 Club"
      >
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <GiftIcon />
            </div>
            <h3>Welcome Bonus</h3>
            <p>New accounts qualify for a first-deposit bonus credited automatically to your balance.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>VIP Progression</h3>
            <p>Every account starts climbing the VIP ladder from the first deposit onward.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <UsersIcon />
            </div>
            <h3>Referral Earnings</h3>
            <p>Your own invite code is generated instantly so you can start earning from referrals.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Sign-Up Process" title="How registration works, step by step">
        <div className={shared.stepGrid}>
          {registerSteps.map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before You Start" title="What to keep ready">
        <div className={shared.twoCol}>
          <div className={shared.infoBox}>
            <h3>
              <ShieldIcon /> Requirements
            </h3>
            <ul className={shared.bulletList}>
              <li>An active mobile number that can receive verification codes.</li>
              <li>You must be at least 18 years old to open an account.</li>
              <li>A password that is unique to this platform.</li>
            </ul>
          </div>
          <div className={shared.infoBox}>
            <h3>Good to Know</h3>
            <ul className={shared.bulletList}>
              <li>No documents are required to complete basic registration.</li>
              <li>You can update your profile and preferences after your first login.</li>
              <li>
                Larger withdrawals may require additional verification, covered on our{' '}
                <Link to="/91-club-security">security page</Link>.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="What New Members Say" title="Real feedback from recent sign-ups">
        <Testimonials
          items={[
            {
              name: 'Priya N.',
              role: 'New Member',
              rating: 5,
              quote: 'Registration was genuinely fast. I was playing my first round within two minutes of opening the site.'
            },
            {
              name: 'Karan V.',
              role: 'New Member',
              rating: 4,
              quote: 'Liked that I could add my friend’s invite code right at sign-up and both of us got something for it.'
            },
            {
              name: 'Simran G.',
              role: 'New Member',
              rating: 5,
              quote: 'The welcome bonus landed in my account automatically, no extra steps needed.'
            }
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="Registration questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Login', href: '/91-club-login' },
            { label: '91 Club Invite Code', href: '/91-club-invite-code' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club Download', href: '/91-club-download' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Your account is one form away"
          subtitle="Join the 91 Club community today and claim your welcome bonus the moment you make your first deposit."
        />
      </Section>
    </>
  );
}
