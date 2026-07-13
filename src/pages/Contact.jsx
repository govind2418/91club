import { useState } from 'react';
import SEO, { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '../components/seo/SEO.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import FAQAccordion from '../components/ui/FAQAccordion.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import CTABanner from '../components/ui/CTABanner.jsx';
import Button from '../components/ui/Button.jsx';
import { ChatIcon, ClockIcon, ShieldIcon } from '../components/illustrations/Icons.jsx';
import { TELEGRAM_URL, SUPPORT_EMAIL, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../data/siteConfig.js';
import shared from '../components/ui/PageSections.module.css';
import styles from './Contact.module.css';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: '91 Club Contact', href: '/91-club-contact' }
];

const faqs = [
  {
    question: 'What is the best way to contact 91 Club?',
    answer: 'For urgent account issues, live chat or Telegram are fastest. For detailed requests, email works well.'
  },
  {
    question: 'How long does it take to get a reply?',
    answer: 'Live chat and Telegram typically respond within minutes to a few hours, while email replies arrive within a day.'
  },
  {
    question: 'Can I contact 91 Club about a business or partnership inquiry?',
    answer: `Yes, send the details to ${SUPPORT_EMAIL} and our team will route it to the right department.`
  },
  {
    question: 'Is phone support available?',
    answer: 'Support is currently handled through live chat, Telegram and email rather than phone calls.'
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `Message from ${form.name || 'a 91 Club visitor'}`
  )}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`;

  return (
    <>
      <SEO
        title="91 Club Contact (91clubcontact) - Reach Our Team"
        description="Contact 91 Club through live chat, Telegram, email or our contact form. Find the right channel for your question."
        path="/91-club-contact"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          buildWebPageSchema({
            title: '91 Club Contact - Reach Our Team',
            description: 'Every way to contact the 91 Club team, including live chat, Telegram and email.',
            path: '/91-club-contact'
          }),
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqSchema(faqs)
        ]}
      />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Get in Touch"
        title="91 Club Contact: We're Easy to Reach"
        intro="Whether it is a quick account question or a detailed request, there is a contact channel built for it. Fill out the form below or reach us directly through Telegram or email."
        primaryLabel="Join Telegram"
        primaryHref={TELEGRAM_URL}
        secondaryLabel="Visit Support"
        secondaryHref="/91-club-support"
      />

      <Section eyebrow="Contact Channels" title="Pick the option that fits your question">
        <div className={shared.grid3}>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ChatIcon />
            </div>
            <h3>Live Chat</h3>
            <p>Available from your account dashboard for the fastest response.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ClockIcon />
            </div>
            <h3>Telegram</h3>
            <p>Join our official channel for community help and quick answers.</p>
          </div>
          <div className={shared.card}>
            <div className={shared.cardIcon}>
              <ShieldIcon />
            </div>
            <h3>Email</h3>
            <p>{SUPPORT_EMAIL}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Send a Message" title="Contact form">
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
        >
          <div className={styles.row}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" required value={form.name} onChange={handleChange('name')} />
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" required value={form.email} onChange={handleChange('email')} />
          </div>
          <div className={styles.row}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} required value={form.message} onChange={handleChange('message')} />
          </div>
          <Button type="submit" variant="primary" size="md">
            Send Message
          </Button>
          <p className={styles.note}>
            Submitting opens your email client with this message pre-filled, addressed to our
            support team.
          </p>
        </form>
      </Section>

      <Section eyebrow="FAQ" title="Contact questions, answered">
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { label: '91 Club Support', href: '/91-club-support' },
            { label: '91 Club FAQ', href: '/91-club-faq' },
            { label: '91 Club Security', href: '/91-club-security' },
            { label: 'About 91 Club', href: '/about-91-club' },
            { label: '91 Club Register', href: '/91-club-register' },
            { label: 'Home', href: '/' }
          ]}
        />
      </Section>

      <Section>
        <CTABanner
          title="Prefer to chat right away?"
          subtitle="Join our Telegram channel for the fastest response from our community and support team."
          primaryLabel="Join Telegram"
          primaryHref={TELEGRAM_URL}
        />
      </Section>
    </>
  );
}
