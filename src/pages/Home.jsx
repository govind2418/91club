import { Link } from 'react-router-dom';
import SEO, { buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import Section from '../components/ui/Section.jsx';
import StatCounter from '../components/ui/StatCounter.jsx';
import Testimonials from '../components/ui/Testimonials.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
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
  UsersIcon
} from '../components/illustrations/Icons.jsx';
import { TELEGRAM_URL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import styles from './Home.module.css';

const faqs = [
  {
    question: 'What is 91 Club?',
    answer:
      '91 Club is an online gaming platform built around fast, round-based games such as colour prediction, lottery draws, an aviator-style crash game and slot titles. Every round is short, results are transparent, and the interface is designed for quick, mobile-first play.'
  },
  {
    question: 'Is 91 Club safe to use?',
    answer:
      'Yes. Accounts are protected with encrypted sessions, and every deposit and withdrawal request passes through a verification layer before it is processed. We recommend enabling all available account protections and never sharing your login details with anyone.'
  },
  {
    question: 'How do I create a 91 Club account?',
    answer:
      'Open the register page, enter your mobile number, choose a password, and confirm the verification code sent to you. The whole process takes under a minute and does not require any documents to get started.'
  },
  {
    question: 'Can I play 91 Club on both Android and iOS?',
    answer:
      'Yes. 91 Club runs directly in your mobile browser on any device, and an installable APK is also available for Android users who prefer a home-screen app experience.'
  },
  {
    question: 'How fast are withdrawals processed?',
    answer:
      'Most withdrawal requests are reviewed and released within minutes during standard support hours, though processing times can vary depending on your payment provider and verification status.'
  },
  {
    question: 'Is "91club" the same as "91 Club"?',
    answer:
      'Yes. "91club" is simply how many players type our name into search bars without the space. Both refer to the same platform, the same account system, and the same games.'
  }
];

const testimonials = [
  {
    name: 'Rohit M.',
    role: 'Player since 2023',
    rating: 5,
    quote:
      'The interface feels premium and everything loads instantly. Withdrawals have always landed in my account without any drama.'
  },
  {
    name: 'Ayesha K.',
    role: 'VIP Member',
    rating: 5,
    quote:
      'I switched from a couple of other apps and the difference in speed and clarity is obvious from the first session.'
  },
  {
    name: 'Deepak S.',
    role: 'Daily Player',
    rating: 4,
    quote:
      'Support actually replies quickly. Small thing, but it makes a real difference when you have a question about a round.'
  }
];

export default function Home() {
  return (
    <>
      <SEO
        title="91 Club (91club) - Premium Colour Prediction & Gaming Platform"
        description="91 Club (91club) is a premium online gaming platform offering colour prediction, lottery, aviator and slot games with fast withdrawals, VIP rewards and 24/7 support."
        path="/"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club (91club) - Premium Colour Prediction & Gaming Platform',
            description:
              '91 Club, often searched as 91club, is a premium online gaming platform offering colour prediction, lottery, aviator and slot games.',
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
              <span className={styles.heroBadge}>★ India&apos;s Growing Gaming Community</span>
              <h1 className={styles.heroTitle}>
                91 Club <span className="gradient-text">Premium Gaming</span> Experience
              </h1>
              <p className={styles.heroSubtitle}>
                Join thousands of players enjoying a fast, secure and exciting gaming experience
                with modern features and smooth performance.
              </p>
              <div className={styles.heroActions}>
                <Button href="/91-club-register" variant="primary" size="lg">
                  Register
                </Button>
                <Button href="/91-club-login" variant="outline" size="lg">
                  Login
                </Button>
                <Button href={TELEGRAM_URL} variant="gold" size="lg">
                  Join Telegram
                </Button>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>2M+</strong>
                  <span>Registered Players</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>24/7</strong>
                  <span>Live Support</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>90s</strong>
                  <span>Avg. Withdrawal Review</span>
                </div>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why Players Choose Us"
        title="Built for speed, security and a genuinely premium feel"
        subtitle="Every part of 91 Club is designed around three things: how fast you can play, how safe your account is, and how good the experience feels while you do it."
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
        eyebrow="Popular Categories"
        title="Explore the games our community plays most"
        subtitle="From quick prediction rounds to fast-paced crash multipliers, pick the category that matches your style."
        id="features"
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
        eyebrow="Community Snapshot"
        title="Numbers that describe our platform today"
      >
        <StatCounter
          stats={[
            { value: 2000000, suffix: '+', label: 'Registered Players' },
            { value: 500000, suffix: '+', label: 'Rounds Played Daily' },
            { value: 98, suffix: '%', label: 'Support Satisfaction' },
            { value: 24, suffix: '/7', label: 'Platform Availability' }
          ]}
        />
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

      <Section eyebrow="Player Reviews" title="What the community is saying">
        <Testimonials items={testimonials} />
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <CTABanner />
      </Section>
    </>
  );
}
