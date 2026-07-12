import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { UsersIcon, TrophyIcon, WalletIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Invite Code', href: '/91-club-invite-code' }
];

const faqs = [
  {
    question: 'Do I need an invite code to register?',
    answer: 'No, an invite code is entirely optional. You can register with or without one.'
  },
  {
    question: 'Where do I find my own invite code?',
    answer:
      'Your personal invite code is generated automatically the moment you register and is visible in the referral section of your account.'
  },
  {
    question: 'What happens when I enter someone’s invite code?',
    answer:
      'Your account gets linked to theirs as a referral, which can unlock a welcome bonus for you and a referral reward for them once you play.'
  },
  {
    question: 'Can I change my invite code after registering?',
    answer: 'The code you enter during sign-up is locked in permanently and cannot be added or changed afterward.'
  },
  {
    question: 'Is it worth sharing my invite code?',
    answer:
      'Yes, sharing it with friends who are genuinely interested in the platform can earn you ongoing referral rewards as they play.'
  }
];

export default function InviteCode() {
  return (
    <>
      <SEO
        title="91 Club Invite Code - Use or Share a Referral Code"
        description="Understand how 91 Club invite codes work, where to enter one during registration, and how sharing your own code earns rewards."
        path="/91-club-invite-code"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Invite Code - Use or Share a Referral Code',
            description: 'A complete explanation of how 91 Club invite codes work for new and existing members.',
            path: '/91-club-invite-code'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Referral Codes"
        title="91 Club Invite Code: What It Does and How to Use One"
        intro="An invite code links a new account to an existing member, unlocking bonuses for both sides. This page explains exactly where to enter one and how to find your own to share."
        primaryLabel="Register With a Code"
        primaryHref="/91-club-register"
        secondaryLabel="View Referral Program"
        secondaryHref="/91-club-referral"
      />

      <Section eyebrow="Using a Code" title="How to enter an invite code during sign-up">
        <div className={shared.stepGrid}>
          {[
            { title: 'Start Registration', text: 'Open the registration page as you normally would.' },
            { title: 'Find the Invite Field', text: 'Look for the optional invite code box on the sign-up form.' },
            { title: 'Enter the Code', text: 'Type or paste the code your friend shared with you.' },
            { title: 'Complete Sign-Up', text: 'Finish registering as usual and both accounts get credited.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What You Get" title="Benefits linked to invite codes">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <UsersIcon />
            </div>
            <h3>New Member Bonus</h3>
            <p>Registering with a valid code can qualify you for an extra welcome credit.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>Referrer Rewards</h3>
            <p>The person who shared their code earns a reward once you make your first deposit.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Ongoing Commission</h3>
            <p>Some referral tiers continue rewarding activity from your linked account over time.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Invite Code vs. Gift Code" title="Understanding the difference">
        <ComparisonTable
          caption="Invite codes compared with gift codes"
          columns={['Aspect', 'Invite Code', 'Gift Code']}
          rows={[
            ['Purpose', 'Links two accounts as referral', 'Adds bonus balance directly'],
            ['When it is used', 'Only during registration', 'Anytime it is valid'],
            ['Who benefits', 'Both new and referring member', 'Only the person redeeming'],
            ['Reusable?', 'Locked in once at sign-up', 'Single-use, changes each time']
          ]}
        />
      </Section>

      <Section eyebrow="Sharing Your Code" title="Getting the most from your invite code">
        <div className={shared.prose}>
          <p>
            Every account comes with a unique invite code visible in the referral tab. Sharing
            it is as simple as sending the code, or a link containing it, to friends who might
            enjoy the platform. There is no limit on how many people can register using the
            same code.
          </p>
          <p>
            For the full breakdown of referral tiers, commission percentages and payout timing,
            visit the <Link to="/91-club-referral">91 Club Referral</Link> page.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Invite code questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Referral', href: '/91-club-referral' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: '91 Club Gift Code', href: '/91-club-gift-code' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Have a code ready? Use it now."
          subtitle="Enter it during registration to unlock your welcome bonus alongside your new account."
        />
      </Section>
    </>
  );
}
