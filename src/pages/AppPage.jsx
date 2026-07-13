import { Link } from 'react-router-dom';
import SEO, {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
  buildSoftwareApplicationSchema
} from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { BoltIcon, CardIcon, WalletIcon, ChatIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club App', href: '/91-club-app' }
];

const faqs = [
  {
    question: 'What can I do inside the 91 Club app?',
    answer:
      'Everything available on the website: colour prediction, lottery, aviator, slots, deposits, withdrawals, VIP tracking and support access, all in one place.'
  },
  {
    question: 'Does the app use more data than the website?',
    answer:
      'The app is optimized to load game assets efficiently, so data usage is comparable to browsing the website, sometimes slightly lower after the first load.'
  },
  {
    question: 'Can I use the app and website interchangeably?',
    answer: 'Yes, both connect to the same account, so your balance and history stay in sync regardless of which one you use.'
  },
  {
    question: 'Does the app send notifications?',
    answer:
      'You can choose to enable notifications for promotions, bonus alerts and account activity, or leave them switched off entirely.'
  },
  {
    question: 'Is the app available for iPhone?',
    answer:
      'iPhone users can access the full experience through the mobile browser and add it to their home screen for an app-like shortcut.'
  },
  {
    question: 'Is the 91club app different from the 91 Club app?',
    answer:
      '"91club app" and "91 Club app" refer to the exact same application. The spacing is just a typing habit, and both lead to the identical download and login experience.'
  }
];

export default function AppPage() {
  return (
    <>
      <SEO
        title="91 Club App (91club App) - Full Gaming Experience on Your Phone"
        description="Explore everything the 91 Club app (91club app) offers, from game access to wallet management, and see how it compares to playing on the website."
        path="/91-club-app"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club App (91club App) - Full Gaming Experience on Your Phone',
            description: 'A full overview of the 91 Club app, also searched as the 91club app, its features, and how it compares to the website.',
            path: '/91-club-app'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs),
          buildSoftwareApplicationSchema({
            name: '91 Club App',
            description: 'The 91 Club gaming app for colour prediction, lottery, aviator and slots with wallet and VIP tracking.',
            path: '/91-club-app'
          })
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="The 91 Club App"
        title="91 Club App: Every Game and Feature in One Place"
        intro="The 91 Club app, also known as the 91club app, brings the full platform, games, wallet, rewards and support, into a dedicated home-screen experience built for quick daily play."
        primaryLabel="Register Now"
        secondaryLabel="Download the App"
        secondaryHref="/91-club-download"
      />

      <Section eyebrow="Inside the App" title="What you can do without leaving the app">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <CardIcon />
            </div>
            <h3>Play Every Game</h3>
            <p>Colour prediction, lottery, aviator and slots are all accessible from the main dashboard.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Manage Your Wallet</h3>
            <p>Deposit, withdraw and review transaction history from a single wallet screen.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Track VIP Progress</h3>
            <p>See your current tier, next milestone and unlocked perks at a glance.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Reach Support Fast</h3>
            <p>Open a support conversation or jump to our Telegram community directly from the app menu.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="App vs. Website" title="Choosing how you want to play">
        <ComparisonTable
          caption="91 Club app compared with the browser experience"
          columns={['Feature', '91 Club App', 'Website']}
          rows={[
            ['Home screen shortcut', 'Yes, built in', 'Optional manual bookmark'],
            ['Game library', 'Full access', 'Full access'],
            ['Wallet and withdrawals', 'Full access', 'Full access'],
            ['Notifications', 'Optional push alerts', 'Not available'],
            ['Storage required', 'A few megabytes', 'None']
          ]}
        />
      </Section>

      <Section eyebrow="Getting Set Up" title="From install to first session">
        <div className={shared.stepGrid}>
          {[
            { title: 'Install the App', text: 'Follow the download guide to get the app onto your device.' },
            { title: 'Log In', text: 'Sign in with your existing account or register if you are new.' },
            { title: 'Set Preferences', text: 'Turn notifications on or off and review your profile details.' },
            { title: 'Start Playing', text: 'Pick a game category and join the next round in seconds.' }
          ].map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Built for Daily Use" title="Why players keep the app installed">
        <div className={shared.prose}>
          <p>
            Most 91 Club players check in more than once a day, whether that is to join a
            quick prediction round on a break or review results from an earlier lottery draw.
            Having the app installed removes the friction of finding the site again each time,
            which is the main reason regular players prefer it over repeatedly opening a
            browser tab.
          </p>
          <p>
            If you are still deciding, there is no wrong choice here. Your account works
            identically either way, and you can switch between the app and{' '}
            <Link to="/91-club-login">website login</Link> at any point without losing anything.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="App questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Download', href: '/91-club-download' },
            { label: '91 Club APK', href: '/91-club-apk' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: '91 Club Rewards', href: '/91-club-rewards' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Bring 91 Club to your home screen"
          subtitle="Install the app once and get back into your games with a single tap every time."
          primaryLabel="Register Now"
          secondaryLabel="Download Guide"
          secondaryHref="/91-club-download"
        />
      </Section>
    </>
  );
}
