import { Link } from 'react-router-dom';
import SEO, { buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import HeroIllustration from '../components/illustrations/HeroIllustration.jsx';
import Particles from '../components/layout/Particles.jsx';
import {
  BoltIcon,
  ShieldIcon,
  TrophyIcon,
  CardIcon,
  WalletIcon,
  ChatIcon,
  ClockIcon,
  UsersIcon,
  GiftIcon
} from '../components/illustrations/Icons.jsx';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';
import styles from './Home.module.css';

const faqs = [
  {
    question: 'What is 91 Club?',
    answer:
      '91 Club is an online gaming platform built around a single account: one login for the website and the official app, one wallet for every deposit and withdrawal, and one place to reach colour prediction, lottery, aviator and slot games.'
  },
  {
    question: 'Where do I log into 91 Club?',
    answer:
      'Use the 91 Club Login page with your registered mobile number and password. It covers the full sign-in process along with fixes for common problems like a forgotten password or an unrecognized device prompt.'
  },
  {
    question: 'How do I register a 91 Club account?',
    answer:
      'Open the 91 Club Register page, enter your mobile number, choose a password, and confirm the verification code sent to you. The whole process takes under a minute and does not require any documents to get started.'
  },
  {
    question: 'Is there an official 91 Club app?',
    answer:
      'Yes. The 91 Club App gives you the full platform, games, wallet and support, from a home-screen shortcut. It uses the exact same account and balance as the website.'
  },
  {
    question: 'How do I download 91 Club?',
    answer:
      'Visit the 91 Club Download page from the device you plan to play on, start the file transfer, and allow installation once it finishes. Downloading is optional; everything also works directly in a mobile browser.'
  },
  {
    question: 'Is 91 Club safe to use?',
    answer:
      'Accounts are protected with encrypted sessions, and every withdrawal request passes through a verification step before it is processed. Full details are covered on the 91 Club Security page.'
  },
  {
    question: 'Is "91club" the same as "91 Club"?',
    answer:
      'Yes. "91club" is simply how many players type the name into search bars without the space. Both refer to the same platform, the same account system and the same games.'
  }
];

export default function Home() {
  return (
    <>
      <SEO
        title="91 Club (91club) - Login, Register, App & Download"
        description="91 Club (91club) is an online gaming platform built around one account. Log in, register, get the official app, and reach every game from a single dashboard."
        path="/"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club (91club) - Login, Register, App & Download',
            description:
              '91 Club, also searched as 91club, is an online gaming platform offering a single account for login, registration, the official app and every game category.',
            path: '/'
          }),
          buildFaqSchema(faqs)
        ]}
      />

      <section className={styles.hero}>
        <Particles />
        <div className={styles.heroGlowA} aria-hidden="true" />
        <div className={styles.heroGlowB} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroBadge}>The Official 91 Club Hub</span>
              <h1 className={styles.heroTitle}>
                91 Club <span className="gradient-text">Official Platform Hub</span>
              </h1>
              <p className={styles.heroSubtitle}>
                91 Club is an online gaming platform where one account covers login, games,
                deposits and rewards. This page is the starting point for signing in,
                registering, getting the official app, or downloading it to your device.
              </p>
              <div className={styles.heroActions}>
                <Button href="/91-club-register" variant="primary" size="lg">
                  Register
                </Button>
                <Button href="/91-club-login" variant="outline" size="lg">
                  Login
                </Button>
                <Button href="/91-club-download" variant="gold" size="lg">
                  Download the App
                </Button>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>4</strong>
                  <span>Game Categories</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>2</strong>
                  <span>Ways to Play — Web &amp; App</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>24/7</strong>
                  <span>Platform Access</span>
                </div>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </div>
      </section>

      <Section eyebrow="About The Platform" title="What Is 91 Club?">
        <div className={shared.twoCol}>
          <div className={shared.prose}>
            <p>
              91 Club is an online platform built around a single account system. You register
              once, then use that same login to play, deposit, withdraw, track rewards and reach
              support, whether you are on the website or the official app. Nothing about your
              account changes depending on which one you use.
            </p>
            <p>
              Because the name is often typed as &quot;91club&quot; without a space, both spellings lead
              to the exact same login, the same registration form and the same games. This
              homepage works as the main entry point for the platform: use the sections below to
              jump straight to login, registration, the app, the download page or the full game
              directory.
            </p>
          </div>
          <div className={shared.infoBox}>
            <h3>Start Here</h3>
            <ul className={shared.bulletList}>
              <li>
                <Link to="/91-club-login">91 Club Login</Link> — sign in to an existing account
              </li>
              <li>
                <Link to="/91-club-register">91 Club Register</Link> — create a new account
              </li>
              <li>
                <Link to="/91-club-app">91 Club App</Link> — see what the app includes
              </li>
              <li>
                <Link to="/91-club-download">91 Club Download</Link> — install it on your device
              </li>
              <li>
                <Link to="/91-club-games">91 Club Games</Link> — browse the full game directory
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Account Access"
        title="91 Club Login"
        subtitle="Every game, deposit and reward on 91 Club sits behind one account. Signing in only takes a registered mobile number and a password."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Secure Sign-In</h3>
            <p>Sessions are protected with device verification, so logging in from a new phone triggers an extra confirmation step.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Works On Any Device</h3>
            <p>Log in from a mobile browser, desktop browser or the installed app using the same credentials.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Help If You Get Locked Out</h3>
            <p>Password resets and account recovery steps are covered in detail on the login guide.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-login">
            <Button variant="outline">Read the Full 91 Club Login Guide</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Create An Account"
        title="91 Club Register"
        subtitle="Registration is free and takes under a minute. You only need an active mobile number to get started."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <GiftIcon />
            </div>
            <h3>Welcome Bonus</h3>
            <p>New accounts qualify for a first-deposit bonus credited automatically after registration.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>VIP From Day One</h3>
            <p>Every account starts climbing the VIP reward ladder from the first deposit onward.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UsersIcon />
            </div>
            <h3>Optional Invite Code</h3>
            <p>Add a friend&apos;s invite code at sign-up to unlock linked bonuses for both of you.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-register">
            <Button variant="outline">See the Full Registration Walkthrough</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Mobile Experience"
        title="91 Club App"
        subtitle="The 91 Club app brings games, your wallet, rewards and support into one home-screen shortcut."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CardIcon />
            </div>
            <h3>Every Game In One Place</h3>
            <p>Colour prediction, lottery, aviator and slots are all reachable from the same dashboard.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Manage Your Wallet</h3>
            <p>Deposit, withdraw and check transaction history without leaving the app.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Same Account, Faster Access</h3>
            <p>Your login and balance stay identical to the website, just one tap away.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-app">
            <Button variant="outline">Explore Everything Inside the App</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Get The App"
        title="91 Club Download"
        subtitle="Downloading is optional. 91 Club runs fully in a mobile browser, but installing it adds a quicker, app-like shortcut."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <BoltIcon />
            </div>
            <h3>Quicker Launch</h3>
            <p>Open 91 Club straight from your home screen without typing a web address.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Same Security</h3>
            <p>Every protection that covers your browser session carries over to the installed app.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Under Two Minutes</h3>
            <p>The install file is lightweight, so setup rarely takes more than a couple of minutes.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-download">
            <Button variant="outline">Get the Step-by-Step Download Guide</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Platform Features"
        title="What Every 91 Club Account Includes"
        subtitle="These apply the same way whether you play through the website or the app."
        id="features"
      >
        <div className={styles.cardsGrid}>
          {[
            {
              icon: <BoltIcon />,
              title: 'Lightning Fast Rounds',
              text: 'Short, round-based gameplay means you are never waiting long between results.'
            },
            {
              icon: <ShieldIcon />,
              title: 'Secured Accounts',
              text: 'Session encryption and verification steps protect your balance and personal details.'
            },
            {
              icon: <WalletIcon />,
              title: 'Smooth Payments',
              text: 'Multiple deposit options and a streamlined withdrawal review process.'
            },
            {
              icon: <TrophyIcon />,
              title: 'VIP Reward Tiers',
              text: 'Climb through membership levels to unlock better bonuses and perks over time.'
            },
            {
              icon: <ChatIcon />,
              title: 'Responsive Support',
              text: 'A dedicated support desk and Telegram community for quick answers.'
            },
            {
              icon: <ClockIcon />,
              title: 'Always Available',
              text: 'Play whenever you like, from your phone or desktop browser, no downtime.'
            }
          ].map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Game Directory"
        title="91 Club Games"
        subtitle="Four core categories, one shared account balance. Visit the full directory for details on every format."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.categoryCard}>
            <span className={styles.categoryTag}>Most Played</span>
            <h3>Colour Prediction</h3>
            <p>Predict the outcome of the next colour round and multiply your entry in seconds.</p>
            <Link to="/91-club-colour-prediction">
              <Button variant="outline" size="sm">
                Explore Colour Prediction
              </Button>
            </Link>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.categoryTag}>Classic</span>
            <h3>Lottery Draws</h3>
            <p>Pick your numbers and watch scheduled draws unfold with transparent results.</p>
            <Link to="/91-club-lottery">
              <Button variant="outline" size="sm">
                Explore Lottery
              </Button>
            </Link>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.categoryTag}>Trending</span>
            <h3>Aviator Crash Game</h3>
            <p>Cash out before the plane flies away in this fast, rising-multiplier format.</p>
            <Link to="/91-club-aviator">
              <Button variant="outline" size="sm">
                Explore Aviator
              </Button>
            </Link>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.categoryTag}>Casual</span>
            <h3>Slot Games</h3>
            <p>Spin through a themed slot library with a range of stake sizes and styles.</p>
            <Link to="/91-club-slots">
              <Button variant="outline" size="sm">
                Explore Slots
              </Button>
            </Link>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-games">
            <Button variant="outline">Browse the Full 91 Club Games Directory</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="How It Works"
        title="From sign-up to your first round in four simple steps"
      >
        <div className={styles.stepsGrid}>
          {[
            {
              title: 'Create Your Account',
              text: 'Register with your mobile number and set a secure password in under a minute.'
            },
            {
              title: 'Add Funds',
              text: 'Choose a supported payment method and top up your balance instantly.'
            },
            {
              title: 'Pick a Game',
              text: 'Browse colour prediction, lottery, aviator or slots and join the next round.'
            },
            {
              title: 'Withdraw Winnings',
              text: 'Request a withdrawal any time and track its status from your dashboard.'
            }
          ].map((step, index) => (
            <div className={styles.step} key={step.title}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Latest Promotions"
        title="Fresh bonuses added regularly"
        subtitle="Promotions rotate through the season, so check back often or follow our Telegram channel for instant alerts."
      >
        <div className={styles.promoGrid}>
          <div className={styles.promoCard}>
            <div className={styles.promoBanner}>
              <span>Welcome Bonus</span>
            </div>
            <div className={styles.promoBody}>
              <h3>First Deposit Boost</h3>
              <p>New members receive a first-deposit bonus credited automatically after registration.</p>
              <Link to="/91-club-bonus">
                <Button variant="outline" size="sm">
                  View Bonus Details
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.promoCard}>
            <div className={styles.promoBanner} style={{ background: 'var(--gradient-gold)' }}>
              <span style={{ color: '#1a1000' }}>Referral Reward</span>
            </div>
            <div className={styles.promoBody}>
              <h3>Invite &amp; Earn</h3>
              <p>Share your invite code and earn a commission whenever a friend joins and plays.</p>
              <Link to="/91-club-referral">
                <Button variant="outline" size="sm">
                  See Referral Program
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.promoCard}>
            <div className={styles.promoBanner}>
              <span>Gift Codes</span>
            </div>
            <div className={styles.promoBody}>
              <h3>Redeem Gift Codes</h3>
              <p>Redeem seasonal gift codes from our Telegram channel for instant balance top-ups.</p>
              <Link to="/91-club-gift-code">
                <Button variant="outline" size="sm">
                  Redeem a Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Winning Tips"
        title="Play smarter with a few grounded habits"
        subtitle="These are not guarantees of profit, just habits that help you stay in control of your sessions."
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CardIcon />
            </div>
            <h3>Set a Session Budget</h3>
            <p>Decide how much you are comfortable spending before you start, and stop once you reach it.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Take Regular Breaks</h3>
            <p>Short breaks between sessions help you make clearer decisions round after round.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UsersIcon />
            </div>
            <h3>Learn From the Community</h3>
            <p>Our Telegram channel shares strategy discussions and platform updates from other players.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-tips">
            <Button variant="outline">Read the Full Tips Guide</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Security First"
        title="Your account and balance are protected at every step"
      >
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Encrypted Sessions</h3>
            <p>All login sessions and transactions run over encrypted connections.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Verified Withdrawals</h3>
            <p>Every withdrawal passes through an identity and balance verification check.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Fraud Monitoring</h3>
            <p>Unusual account activity is flagged automatically for manual review.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-security">
            <Button variant="outline">Learn About Our Security</Button>
          </Link>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          title="Explore the 91 Club Platform"
          links={[
            { label: '91 Club Login', href: '/91-club-login' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: '91 Club App', href: '/91-club-app' },
            { label: '91 Club Download', href: '/91-club-download' },
            { label: '91 Club Games', href: '/91-club-games' },
            { label: 'About 91 Club', href: '/about-91-club' },
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club FAQ', href: '/91-club-faq' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner />
      </Section>
    </>
  );
}
