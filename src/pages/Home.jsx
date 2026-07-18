import { Link } from 'react-router-dom';
import SEO, {
  buildFaqSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildItemListSchema
} from '../components/seo/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import HeroIllustration from '../components/illustrations/HeroIllustration.jsx';
import Particles from '../components/layout/Particles.jsx';
import Screenshot from '../components/ui/Screenshot.jsx';
import gameLobbyHome from '../assets/screenshots/91club-game-lobby-home-screen.jpg';
import loginScreen from '../assets/screenshots/91club-login-screen.jpg';
import registerScreen from '../assets/screenshots/91club-register-screen.jpg';
import accountDashboard from '../assets/screenshots/91club-account-dashboard-features.jpg';
import walletOverview from '../assets/screenshots/91club-wallet-overview-screen.jpg';
import bonusCollection from '../assets/screenshots/91club-bonus-collection-rewards.jpg';
import lotteryGamesLobby from '../assets/screenshots/91club-lottery-games-lobby.jpg';
import gameLibraryProviders from '../assets/screenshots/91club-game-library-providers.jpg';
import wheelSpinPrize from '../assets/screenshots/91club-wheel-spin-prize-wheel.jpg';
import wheelOfFortune from '../assets/screenshots/91club-wheel-of-fortune-spin.jpg';
import supportCenterHelp from '../assets/screenshots/91club-support-center-help.jpg';
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

const breadcrumbItems = [{ label: 'Home', href: '/' }];

const gameCategories = [
  { name: 'Colour Prediction', href: '/91-club-colour-prediction' },
  { name: 'Lottery', href: '/91-club-lottery' },
  { name: 'Aviator', href: '/91-club-aviator' },
  { name: 'Slots', href: '/91-club-slots' }
];

const relatedSearches = [
  { label: '91club', href: '/' },
  { label: '91 Club Login', href: '/91-club-login' },
  { label: '91 Club App', href: '/91-club-app' },
  { label: '91 Club APK', href: '/91-club-apk' },
  { label: '91 Club Download', href: '/91-club-download' },
  { label: '91 Club Register', href: '/91-club-register' }
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
            path: '/',
            image: '/og-image.png'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildItemListSchema({ name: '91 Club Games', items: gameCategories }),
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
        <Screenshot
          src={gameLobbyHome}
          alt="91club game lobby home screen showing the anniversary banner, wheel of fortune, VIP privileges and recommended games"
        />
        <div className={shared.twoCol}>
          <div className={shared.prose}>
            <p>
              Type &quot;91 Club&quot; into a search bar and you will find a mix of login pages, download
              links and forum threads, which is exactly why a single reference page is useful.
              What follows is a plain description of what the platform actually is, how its parts
              connect to each other, and where to go next if you already know what you are
              looking for.
            </p>

            <h3>A single account behind everything</h3>
            <p>
              At its core, 91 Club is a round-based gaming platform: short, repeatable rounds
              across a handful of formats, all sitting behind one login. That single-account
              design is deliberate. Instead of separate profiles for each game type, a player{' '}
              <Link to="/91-club-register">registers once</Link> and that same credential set —
              mobile number and password — carries across colour prediction, lottery draws, the
              aviator-style crash format and the slot library. Balance, history and rewards move
              with the account rather than being split across different game lobbies.
            </p>

            <h3>Why &quot;91club&quot; shows up in search bars</h3>
            <p>
              Search habits and mobile keyboards both explain the second spelling. Autocomplete
              defaults to no-space suggestions, and plenty of players simply type the name the
              way it sounds rather than the way it is styled. &quot;91club&quot; and &quot;91 Club&quot; are not two
              competing products or two different sign-in systems; they resolve to the same
              platform, the same account database and the same support channel. Treat the two
              spellings as interchangeable rather than as separate brands.
            </p>

            <h3>Logging in and setting up an account</h3>
            <p>
              <Link to="/91-club-register">Registration</Link> asks for very little: an active
              mobile number, a password, and confirmation of a one-time code. There is no
              document upload at the sign-up stage, which keeps the process under a minute for
              most people. Once an account exists,{' '}
              <Link to="/91-club-login">logging back in</Link> uses the same two fields, with an
              added device-verification prompt if the sign-in attempt comes from a phone or
              browser the system has not seen before. That extra prompt is a security measure, not
              a bug — it is the main thing standing between a stolen password and an actual
              account takeover.
            </p>

            <h3>Getting the app onto a phone</h3>
            <p>
              91 Club is fully usable through a mobile browser, so installing anything is
              optional rather than required. What the{' '}
              <Link to="/91-club-app">official app</Link> adds is convenience: a home-screen
              icon, slightly faster navigation between screens, and — on Android — an installable
              file rather than a browser tab that has to be found again each session. iPhone
              users get the same functionality by adding the site to their home screen, since
              there is not a separate iOS build. Either route, including the full{' '}
              <Link to="/91-club-download">download</Link> steps, lands on the identical account
              and balance.
            </p>

            <h3>Games, wallet and where rewards fit in</h3>
            <p>
              The game library is organised into a small number of formats rather than an
              overwhelming catalogue: colour prediction rounds that settle in under a minute,
              scheduled lottery draws, a rising-multiplier crash game, and a themed slot section —
              all covered in more depth on the <Link to="/91-club-games">games directory</Link>.
              Every format draws from the same wallet, so a deposit made for one is available to
              all the others immediately. Rewards layer on top of that wallet rather than existing
              separately: a first-deposit bonus for new accounts, ongoing{' '}
              <Link to="/91-club-vip">VIP perks</Link> tied to activity level, and periodic{' '}
              <Link to="/91-club-gift-code">gift codes</Link> distributed through the platform&apos;s
              Telegram channel.
            </p>

            <h3>Support and the security layer underneath it</h3>
            <p>
              Every login session and transaction runs over an encrypted connection, and
              withdrawal requests pass through a verification step before funds move — standard
              practice for any platform handling real balances, and explained in full on the{' '}
              <Link to="/91-club-security">security page</Link>. Support is reachable through an
              in-account channel and a Telegram community, and both exist mainly to handle the two
              things that come up most often: a forgotten password and a delayed withdrawal.
              Neither requires escalation beyond that first contact on the{' '}
              <Link to="/91-club-support">support page</Link> in most cases.
            </p>

            <h3>One ecosystem, two entry points</h3>
            <p>
              Website and app are best thought of as two doors into the same room rather than two
              different products. Switching between a desktop browser session and the installed
              app mid-session does not split the account or reset progress — VIP tier, wallet
              balance and game history are shared in real time. That is the practical reason this
              page treats login, registration, the app and the download as parts of one connected
              system instead of four separate topics: they all point back to the same underlying
              account. The sections below cover each of those topics in turn, followed by a closer
              look at platform features, the game directory, rewards and security.
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
        subtitle="Signing in is the one action every other part of the platform depends on — no separate logins for games, wallet or rewards, just a single set of credentials."
      >
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            Most sign-in problems trace back to one of three things: a mistyped password, a
            verification code that arrived late, or a session that expired after a period of
            inactivity. None of them require starting over. A password reset takes about as long
            as the original <Link to="/91-club-register">registration</Link> did, delayed codes
            usually arrive within a minute if you wait rather than request a second one
            immediately, and an expired session just needs a fresh sign-in rather than any kind of
            account recovery. If you have not created an account yet, that process is covered on
            the register page; once you are in, the{' '}
            <Link to="/91-club-security">security page</Link> explains how sessions and device
            verification work in more detail.
          </p>
          <p>
            Because a 91 Club account is tied to a single mobile number, losing access to that
            number is the one scenario worth planning for in advance. Keeping the registered
            number current, and knowing that <Link to="/91-club-support">support</Link> can verify
            identity through account history rather than the phone alone, removes most of the
            anxiety around this. It is also why the platform asks you to confirm device
            recognition on unfamiliar hardware rather than skipping straight to a balance screen —
            that one extra step is what keeps a compromised password from turning into a
            compromised wallet.
          </p>
        </div>
        <div className={shared.mediaSplit}>
          <div>
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
          </div>
          <Screenshot src={loginScreen} alt="91club login screen with phone number and password fields" />
        </div>
      </Section>

      <Section
        eyebrow="Create An Account"
        title="91 Club Register"
        subtitle="Registration is free and takes under a minute. You only need an active mobile number to get started."
      >
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            The only two fields that matter at sign-up are a working mobile number and a password
            you have not reused elsewhere — everything else, including profile details and
            payment preferences, can be filled in later from account settings. An invite code is
            optional rather than required; entering one links your account to whoever shared it
            and can unlock a linked bonus for both sides, but skipping that field does not affect
            your ability to register or play. If a friend already sent you a code, the{' '}
            <Link to="/91-club-invite-code">invite code page</Link> explains exactly where it
            goes and what changes once it is applied.
          </p>
          <p>
            Age and identity checks are handled lightly at this stage — you confirm you are 18 or
            older, and no documents are requested unless a later withdrawal is large enough to
            trigger a routine review. That is a deliberate trade-off: keeping the sign-up form
            short means more people finish it, while pushing verification to the withdrawal stage
            means it only affects the minority of accounts moving larger amounts. How withdrawals
            and verification work together is covered on the{' '}
            <Link to="/91-club-security">security page</Link>, and once your account exists, the{' '}
            <Link to="/91-club-login">login page</Link> has the exact steps for getting back in on
            any later visit.
          </p>
        </div>
        <div className={shared.mediaSplit}>
          <div>
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
          </div>
          <Screenshot src={registerScreen} alt="91club register screen for creating a new account with an optional invite code" />
        </div>
      </Section>

      <Section
        eyebrow="Mobile Experience"
        title="91 Club App"
        subtitle="The 91 Club app brings games, your wallet, rewards and support into one home-screen shortcut."
      >
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            Nothing inside the app is exclusive to it — every game, every wallet function and
            every support channel is equally reachable through a mobile browser. What changes is
            friction: opening an installed app is one tap from the home screen, while a browser
            session usually means finding a bookmark or retyping an address first. For anyone who
            checks in on a prediction round or a lottery draw more than once a day, that
            difference adds up over a week even though it does not change what you can actually
            do.
          </p>
          <p>
            Notifications are the other practical reason players install it. The app can alert
            you to a credited bonus, a resolved withdrawal, or a promotion window without you
            needing to check manually, whereas the browser version has no real equivalent since
            push permissions behave inconsistently across mobile browsers. None of this is
            required, though — if you would rather not install anything, the{' '}
            <Link to="/91-club-download">download page</Link> explains the browser-only route in
            more detail, and the <Link to="/91-club-games">games directory</Link> works
            identically either way.
          </p>
          <p>
            Storage footprint is small enough that it rarely decides anything either way — the
            installed app takes up a few megabytes, comparable to a handful of photos, and updates
            happen quietly in the background rather than through manual app-store downloads. If
            you are switching between a shared family phone and your own device, the app and the
            website draw from the same account and balance, so there is no risk of fragmenting
            your history by using both.
          </p>
        </div>
        <div className={shared.mediaSplit}>
          <div>
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
          </div>
          <Screenshot
            src={accountDashboard}
            alt="91club account dashboard showing wallet, deposit, withdraw and VIP features inside the app"
          />
        </div>
      </Section>

      <Section
        eyebrow="Get The App"
        title="91 Club Download"
        subtitle="Downloading is optional. 91 Club runs fully in a mobile browser, but installing it adds a quicker, app-like shortcut."
      >
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            The installation file itself is small, and the process rarely takes more than a
            couple of minutes on a normal connection. Android handles it through a standard
            one-time permission to install from outside the Play Store, which is routine for many
            apps distributed directly rather than through an official store listing — it is not
            specific to 91 Club and does not indicate anything unusual about the file. iPhone
            does not need this step at all, since the equivalent there is adding the site to the
            home screen rather than installing a separate package, covered in more detail on the{' '}
            <Link to="/91-club-app">app page</Link>.
          </p>
          <p>
            The one habit worth building is checking the address bar before starting any
            download. Because 91 Club deals with real account balances, it is the kind of
            platform that attracts imitation pages offering a faster or &quot;exclusive&quot; download
            link, usually through messaging apps or ads rather than search results. The safest
            pattern is boring but reliable: reach this page directly, confirm the domain matches,
            and treat any download link received through chat as something to verify with{' '}
            <Link to="/91-club-support">support</Link> rather than click immediately.
          </p>
          <p>
            None of this changes what is on the other side of the install.{' '}
            <Link to="/91-club-login">Logging in</Link> afterward uses the same credentials as
            the browser version, and anything covered on the app page — wallet access, game
            selection, notification settings — is identical whether you got there through a fresh
            install or a bookmark you have had for months.
          </p>
        </div>
        <div className={shared.mediaSplit}>
          <div>
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
          </div>
          <Screenshot src={walletOverview} alt="91club wallet overview screen showing the main wallet balance after installing the app" />
        </div>
      </Section>

      <Section
        eyebrow="Platform Features"
        title="What Every 91 Club Account Includes"
        subtitle="These apply the same way whether you play through the website or the app."
        id="features"
      >
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            None of the six items below are exclusive to a particular game or a particular VIP
            tier — they are baseline behaviour for every account from the moment it is created.
            Session encryption and withdrawal verification are covered in more depth on the{' '}
            <Link to="/91-club-security">security page</Link>, and the{' '}
            <Link to="/91-club-vip">VIP page</Link> breaks down exactly how the reward tiers
            mentioned here scale as an account stays active over time. What is worth noting is how
            these pieces interact rather than function in isolation: fast rounds only feel fast if
            payments keep pace, and payments only feel trustworthy if the account behind them is
            genuinely hard to break into. The list below is really describing one connected
            experience rather than six separate selling points.
          </p>
        </div>
        <div className={shared.mediaSplit}>
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
          <Screenshot src={bonusCollection} alt="91club bonus collection screen listing attendance and deposit rewards" />
        </div>
      </Section>

      <Section
        eyebrow="Game Directory"
        title="91 Club Games"
        subtitle="Four core categories, one shared account balance. Visit the full directory for details on every format."
      >
        <div className={shared.mediaPair}>
          <Screenshot src={lotteryGamesLobby} alt="91club lottery games lobby featuring Win Go, K3, 5D and TRX Wingo" />
          <Screenshot src={gameLibraryProviders} alt="91club game library showing casino and fishing game providers" />
        </div>
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
        <div className={shared.prose} style={{ marginTop: 28 }}>
          <p>
            Picking a starting format usually comes down to pace rather than any real difference
            in how fair or safe each one is — colour prediction and aviator both reward quick,
            repeated decisions, lottery suits a slower pick-and-wait rhythm, and slots sit
            somewhere in between as a lower-pressure option. Whichever format you settle into, the
            bonuses covered on the <Link to="/91-club-bonus">bonus page</Link> and the periodic
            codes on the <Link to="/91-club-gift-code">gift code page</Link> apply across all four
            rather than being tied to one game type, and consistent play in any of them counts
            toward the progress described on the <Link to="/91-club-vip">VIP page</Link>.
          </p>
        </div>
        <div style={{ marginTop: 20 }}>
          <Link to="/91-club-games">
            <Button variant="outline">Browse the Full 91 Club Games Directory</Button>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="91 Club Rewards"
        title="How rewards accumulate across the platform"
        subtitle="Bonuses, VIP status and gift codes are three different mechanics that all feed the same wallet."
      >
        <div className={shared.prose}>
          <p>
            Three separate systems feed into the same balance, and it is easy to conflate them
            since they all show up as credited amounts in the same wallet. A welcome bonus is a
            one-time, first-deposit event. VIP perks are cumulative and permanent, rising with
            total activity rather than any single action. Gift codes are one-off and
            time-limited, released periodically through the platform&apos;s Telegram channel and
            redeemed manually rather than applied automatically.
          </p>
          <p>
            The distinction matters mainly for expectations. A welcome bonus will not reappear on
            a second account in most cases, since it is tied to a first deposit rather than a
            recurring event — the <Link to="/91-club-bonus">bonus page</Link> covers exactly what
            conditions apply before that amount becomes withdrawable. VIP progress, by contrast,
            does not reset with inactivity the way a promotional bonus might; it reflects
            long-term standing, and the <Link to="/91-club-vip">VIP page</Link> maps out what
            unlocks at each tier, from faster withdrawal review to a more direct support contact.
          </p>
          <p>
            Gift codes are the least predictable of the three by design — they are seasonal, tied
            to platform milestones, and expire if unredeemed within their stated window. Checking
            the <Link to="/91-club-gift-code">gift code page</Link> after a code is announced,
            rather than assuming it will still work a week later, is the only real habit worth
            building around them. Referral activity adds a fourth, ongoing layer on top of all
            this, and the <Link to="/91-club-referral">referral page</Link> explains how
            commission from an invited friend&apos;s activity compounds over time rather than paying
            out once.
          </p>
        </div>
        <div className={styles.cardsGrid} style={{ marginTop: 8 }}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <GiftIcon />
            </div>
            <h3>Welcome Bonus</h3>
            <p>A one-time first-deposit boost, explained fully on the bonus page.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TrophyIcon />
            </div>
            <h3>VIP Perks</h3>
            <p>Permanent status that rises with cumulative activity over time.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <WalletIcon />
            </div>
            <h3>Gift Codes</h3>
            <p>Seasonal, time-limited codes released through the Telegram channel.</p>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/91-club-rewards">
            <Button variant="outline">See the Full Rewards Breakdown</Button>
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
        <div className={shared.mediaPair}>
          <Screenshot src={wheelSpinPrize} alt="91club wheel spin promotion screen with a prize wheel" />
          <Screenshot src={wheelOfFortune} alt="91club wheel of fortune spin screen with cash prizes" />
        </div>
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
        <div className={shared.prose} style={{ marginBottom: 28 }}>
          <p>
            Security on 91 Club works in layers rather than as a single feature, which is why it
            is easy to undersell in a short list. Encrypted sessions stop a network intercept from
            being useful even on a shared connection. Withdrawal verification stops a stolen
            password from being cashed out instantly, since a request has to clear a check before
            funds actually move. Fraud monitoring catches the pattern in between — logins from
            unfamiliar locations, or a sudden change in usual activity — and flags it before
            either of the first two layers is even tested. None of this needs manual setup; it
            runs in the background by default. What is worth doing on your end is covered on the{' '}
            <Link to="/91-club-support">support page</Link>, mainly around what to do if something
            looks wrong rather than how to configure anything.
          </p>
        </div>
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
        <Screenshot src={supportCenterHelp} alt="91club self service support center screen" />
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section eyebrow="91 Club Searches" title="People also search for">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {relatedSearches.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button variant="outline" size="sm">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <p
          style={{
            maxWidth: 720,
            margin: '0 auto 28px',
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: 15.5,
            lineHeight: 1.8
          }}
        >
          Every page linked below connects back to this one, and the reverse is also true — this
          homepage is meant to work as a hub you return to, not a page you land on once and leave.
        </p>
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
