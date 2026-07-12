import { useState } from 'react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.list}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`${styles.item} ${isOpen ? styles.open : ''}`} key={faq.question}>
            <h3>
              <button
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {faq.question}
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            {isOpen && <div className={styles.answer}>{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
