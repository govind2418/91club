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
import { ShieldIcon } from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club APK', href: '/91-club-apk' }
];

const faqs = [
  {
    question: 'What exactly is the 91 Club APK?',
    answer:
      'It is the Android installation file for 91 Club, allowing you to install the platform as a standalone app instead of playing through a browser tab.'
  },
  {
    question: 'Do I need to enable anything special to install it?',
    answer:
      'Android will ask for one-time permission to install apps from outside the official Play listing. This is a standard Android security prompt, not a 91 Club requirement.'
  },
  {
    question: 'Will the APK version get updates?',
    answer:
      'Yes, you will occasionally be notified in-app when a newer version is available, and updating takes only a minute.'
  },
  {
    question: 'Is the APK the same as the mobile website?',
    answer:
      'It uses the same account and game systems as the website, just packaged as an installable app for quicker access and a more native feel.'
  },
  {
    question: 'Can I install the APK on any Android phone?',
    answer:
      'It works on the large majority of modern Android devices. Very old operating system versions may have compatibility limitations.'
  }
];

const installSteps = [
  { title: 'Download the File', text: 'Get the APK directly from the official 91 Club download page.' },
  { title: 'Allow Unknown Sources', text: 'Approve the one-time Android prompt for this installation only.' },
  { title: 'Run the Installer', text: 'Open the downloaded file and tap install, which takes under a minute.' },
  { title: 'Log In and Play', text: 'Launch the app and sign in with your existing 91 Club account.' }
];

export default function Apk() {
  return (
    <>
      <SEO
        title="91 Club APK (91clubapk) - Download the Android Installation File"
        description="Understand what the 91 Club APK is, how to install it safely on Android, and how it compares to playing directly in your browser."
        path="/91-club-apk"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club APK - Download the Android Installation File',
            description: 'A safety-first guide to the 91 Club Android APK file and installation process.',
            path: '/91-club-apk'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs),
          buildSoftwareApplicationSchema({
            name: '91 Club APK',
            description: 'Android installation file for the 91 Club gaming platform.',
            path: '/91-club-apk'
          }),
          buildHowToSchema({
            name: 'How to install the 91 Club APK',
            description: 'Step-by-step instructions for downloading and installing the 91 Club Android APK.',
            steps: installSteps
          })
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Android Installation File"
        title="91 Club APK: What It Is and How to Install It Safely"
        intro="An APK is simply the file format Android uses to install apps outside of a traditional app store listing. Here is what the 91 Club APK actually contains, how to install it, and how to make sure the copy you have is genuine."
        primaryLabel="Register Now"
        secondaryLabel="Full Download Guide"
        secondaryHref="/91-club-download"
      />

      <Section eyebrow="Understanding APK Files" title="Why 91 Club offers a direct APK">
        <div className={shared.prose}>
          <p>
            Some app stores restrict real-money gaming platforms from being listed, so many
            gaming and prediction apps distribute an APK file directly from their own website
            instead. This does not make the app any less legitimate; it simply means the
            installation step looks slightly different than installing an app from an official
            store listing.
          </p>
          <p>
            The 91 Club APK contains the exact same interface, games and account system as the
            browser version. Installing it does not create a new account or require you to
            register again if you already have one.
          </p>
        </div>
      </Section>

      <Section eyebrow="Installation Guide" title="How to install the 91 Club APK">
        <div className={shared.stepGrid}>
          {installSteps.map((step, index) => (
            <div className={shared.step} key={step.title}>
              <div className={shared.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Safety Checklist" title="Before you install anything">
        <div className={shared.infoBox}>
          <h3>
            <ShieldIcon /> Confirm You Have the Genuine File
          </h3>
          <ul className={shared.bulletList}>
            <li>Only download the APK from this official page, never from a forwarded chat link.</li>
            <li>Check that the file size and version match what is listed here before installing.</li>
            <li>Avoid APKs shared through unofficial forums or unrelated file-sharing sites.</li>
            <li>
              If anything about a download looks unusual, stop and check with{' '}
              <Link to="/91-club-support">91 Club Support</Link> first.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Comparison" title="APK install vs. Play Store style apps">
        <ComparisonTable
          caption="How direct APK installs differ from typical app store installs"
          columns={['Aspect', 'Direct APK', 'Typical App Store App']}
          rows={[
            ['Installation source', 'Official 91 Club website', 'App store listing'],
            ['One-time permission needed', 'Yes, for unknown sources', 'No'],
            ['Update method', 'In-app notification', 'Automatic store updates'],
            ['Account system', 'Same as browser version', 'Same as browser version'],
            ['File verification', 'Match version shown on this page', 'Handled by the store']
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="APK questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Download', href: '/91-club-download' },
            { label: '91 Club App', href: '/91-club-app' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Get the app installed in minutes"
          subtitle="Once installed, log in with your existing details and pick up right where you left off."
        />
      </Section>
    </>
  );
}
