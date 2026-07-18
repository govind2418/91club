import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import referralAgencyDashboard from '../assets/screenshots/91club-referral-agency-dashboard.jpg';
import invitationBonusRewards from '../assets/screenshots/91club-invitation-bonus-rewards.jpg';
import referralProgramRules from '../assets/screenshots/91club-referral-program-rules.jpg';
import { UsersIcon, WalletIcon, TrophyIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Referral', href: '/91-club-referral' }
];

const faqs = [
  {
    question: 'How much can I earn through the referral program?',
    answer:
      'Earnings scale with how active your referred players are, since commission is tied to their ongoing activity rather than a single flat payment.'
  },
  {
    question: 'When do I receive referral earnings?',
    answer: 'Commission is calculated and credited to your balance on a regular, ongoing basis as your referrals stay active.'
  },
  {
    question: 'Is there a limit to how many people I can refer?',
    answer: 'No, there is no cap on the number of people who can register using your invite code.'
  },
  {
    question: 'Does the person I refer need to deposit for me to earn anything?',
    answer: 'Referral commission is generally tied to real activity, so an active, depositing referral is what generates ongoing earnings.'
  },
  {
    question: 'Can I track my referral performance?',
    answer: 'Yes, your referral dashboard shows how many people joined through your code and your accumulated commission.'
  }
];

export default function Referral() {
  return (
    <>
      <SEO
        title="91 Club Referral (91clubreferral) - Earn by Inviting Friends"
        description="See how the 91 Club referral program works, how commission is calculated, and how to track your referral earnings."
        path="/91-club-referral"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Referral - Earn by Inviting Friends',
            description: 'A detailed explanation of the 91 Club referral commission program.',
            path: '/91-club-referral'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Referral Program"
        title="91 Club Referral: Earn From Every Friend You Invite"
        intro="Share your personal invite code and earn ongoing commission as the friends you refer stay active on the platform. Here is how the whole system works."
        primaryLabel="Register Now"
        secondaryLabel="Find Your Invite Code"
        secondaryHref="/91-club-invite-code"
      />

      <Section eyebrow="How It Works" title="Turning your invite code into earnings">
        <Screenshot src={referralProgramRules} alt="91club referral program rules explaining multi-level subordinate commission" />
        <div className={shared.stepGrid}>
          {[
            { title: 'Get Your Invite Code', text: 'Every account receives a unique code automatically after registration.' },
            { title: 'Share It', text: 'Send your code to friends through chat, social media or your own network.' },
            { title: 'They Register and Play', text: 'When they sign up with your code and start playing, they link to your account.' },
            { title: 'You Earn Commission', text: 'A share of their ongoing activity is credited to your balance regularly.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Refer Friends" title="What the referral program offers">
        <div className={shared.mediaSplit}>
          <div className={shared.grid3}>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <UsersIcon />
              </div>
              <h3>No Referral Limit</h3>
              <p>Invite as many friends as you like with the same personal code.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <WalletIcon />
              </div>
              <h3>Ongoing Commission</h3>
              <p>Earnings continue as long as your referred players remain active.</p>
            </div>
            <div className={shared.card}>
              <div className={shared.cardIcon}>
                <TrophyIcon />
              </div>
              <h3>Stacks With VIP</h3>
              <p>Referral activity also contributes toward your own VIP tier progress.</p>
            </div>
          </div>
          <Screenshot src={referralAgencyDashboard} alt="91club referral agency dashboard showing subordinate and commission data" />
        </div>
      </Section>

      <Section eyebrow="Referral vs. Other Rewards" title="Where referral fits in the bigger picture">
        <ComparisonTable
          caption="Referral commission compared with other reward types"
          columns={['Reward Type', 'Trigger', 'Duration']}
          rows={[
            ['Referral Commission', 'Friend registers with your code and plays', 'Ongoing, tied to their activity'],
            ['Welcome Bonus', 'Your own first deposit', 'One-time'],
            ['Gift Codes', 'Redeeming a released code', 'One-time per code']
          ]}
        />
      </Section>

      <Section eyebrow="Getting Started" title="Sharing your code effectively">
        <Screenshot src={invitationBonusRewards} alt="91club invitation bonus screen showing referral reward tiers" />
        <div className={shared.prose}>
          <p>
            The most effective referrals come from people who are genuinely interested in
            trying the platform rather than mass, untargeted sharing. A short explanation of
            what 91 Club offers, alongside your invite code, tends to convert better than the
            code alone.
          </p>
          <p>
            If you have not yet located your personal code, the{' '}
            <Link to="/91-club-invite-code">invite code page</Link> shows exactly where to find
            it in your account settings.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Referral questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Invite Code', href: '/91-club-invite-code' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club VIP', href: '/91-club-vip' },
            { label: '91 Club Bonus', href: '/91-club-bonus' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Start earning from your network today"
          subtitle="Register, grab your invite code, and share it with friends who might enjoy the platform."
        />
      </Section>
    </>
  );
}
