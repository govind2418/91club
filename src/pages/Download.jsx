import { Link } from 'react-router-dom';
import SEO, {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
  buildSoftwareApplicationSchema,
  buildHowToSchema
} from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import { BoltIcon, ShieldIcon, WalletIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Download', href: '/91-club-download' }
];

const faqs = [
  {
    question: 'Do I need to download anything to play 91 Club?',
    answer:
      'No, 91 Club runs fully in your mobile or desktop browser. Downloading the APK is optional and simply gives you a faster, app-like shortcut.'
  },
  {
    question: 'Is the 91 Club download safe?',
    answer:
      'The official download is provided directly from our platform. Always confirm you are downloading from the genuine 91 Club domain and avoid third-party mirror links.'
  },
  {
    question: 'How much storage does the app need?',
    answer: 'The installed app is lightweight and typically takes up only a small amount of storage space on your device.'
  },
  {
    question: 'Will downloading the app affect my account?',
    answer: 'No, your account, balance and history stay exactly the same whether you play through the browser or the app.'
  },
  {
    question: 'Can I remove the app later?',
    answer: 'Yes, you can uninstall it like any other app at any time without affecting your 91 Club account.'
  },
  {
    question: 'Is the "91club download" the same file as "91 Club download"?',
    answer:
      'Yes. Both terms lead to the identical, official installation file on this page. There is no separate "91club" version.'
  }
];

const downloadSteps = [
  { title: 'Visit the Download Page', text: 'Open this page on the mobile device you plan to play from.' },
  { title: 'Tap Download', text: 'Start the file transfer and allow it to finish over a stable connection.' },
  { title: 'Allow Installation', text: 'Approve the one-time permission to install apps from this source.' },
  { title: 'Open and Log In', text: 'Launch the installed app and sign in with your existing account.' }
];

export default function Download() {
  return (
    <>
      <SEO
        title="91 Club Download (91club Download) - Get the App for Android"
        description="Download 91 Club (91club download) to your device for a faster, home-screen gaming experience. Follow our step-by-step download and installation guide."
        path="/91-club-download"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Download (91club Download) - Get the App for Android',
            description: 'Everything you need to download and install 91 Club, also searched as 91club download, on your device.',
            path: '/91-club-download'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs),
          buildSoftwareApplicationSchema({
            name: '91 Club',
            description: 'Download the 91 Club gaming platform for a faster, app-like experience.',
            path: '/91-club-download'
          }),
          buildHowToSchema({
            name: 'How to download and install 91 Club',
            description: 'Step-by-step instructions for downloading 91 Club to your device.',
            steps: downloadSteps
          })
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Get The App"
        title="91 Club Download: A Faster Way to Play"
        intro="While 91 Club works great in any mobile browser, downloading the app gives you a one-tap home-screen shortcut, quicker load times and smoother navigation between games."
        primaryLabel="Register Now"
        primaryHref="/91-club-register"
        secondaryLabel="View APK Details"
        secondaryHref="/91-club-apk"
      />

      <Section eyebrow="Why Download" title="What changes once you install the app">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Quicker Launch</h3>
            <p>Open 91 Club directly from your home screen without typing a web address.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Smoother Transactions</h3>
            <p>Deposit and withdrawal screens load faster on the installed app experience.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Same Account Security</h3>
            <p>Every security measure that protects your browser session carries over to the app.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Download Guide" title="How to download and install 91 Club">
        <div className={shared.stepGrid}>
          {downloadSteps.map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Choose Your Platform"
        title="Browser vs. installed app: how they compare"
      >
        <ComparisonTable
          caption="91 Club access methods compared"
          columns={['Aspect', 'Mobile Browser', 'Installed App']}
          rows={[
            ['Setup time', 'Instant, no install needed', 'Under two minutes'],
            ['Home screen icon', 'Optional shortcut', 'Included automatically'],
            ['Load speed', 'Good', 'Slightly faster'],
            ['Storage used', 'None', 'Small, a few megabytes'],
            ['Updates', 'Automatic on refresh', 'Occasional manual update']
          ]}
        />
      </Section>

      <Section eyebrow="Safety Note" title="Only ever download from an official source">
        <div className={shared.prose}>
          <p>
            Because 91 Club deals with real account balances, it is a target for imitation
            websites offering fake "download" links. Before installing anything, double-check
            that the web address matches our official domain and that the download originates
            from this page rather than a shared file or third-party app store listing.
          </p>
          <p>
            If you are ever unsure whether a link is genuine, do not install it. Instead, come
            back to this page directly or contact <Link to="/91-club-support">91 Club Support</Link>{' '}
            to confirm.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Download questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club App', href: '/91-club-app' },
            { label: '91 Club Login', href: '/91-club-login' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club APK', href: '/91-club-apk' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Ready to install 91 Club?"
          subtitle="Grab the app for faster access, or jump straight in through your browser right now."
          primaryLabel="Register Now"
          secondaryLabel="91 Club APK"
          secondaryHref="/91-club-apk"
        />
      </Section>
    </>
  );
}
