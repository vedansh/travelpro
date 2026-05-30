import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const ref = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section className={styles.section} id="newsletter">
      <div className={styles.inner} ref={ref}>
        <h2>Get <em>Inspired</em> Weekly</h2>
        <p>Fresh destinations, seasonal picks, and hidden gems delivered to your inbox every Friday morning.</p>
        {sent ? (
          <div className={styles.thanks}>You're in! Check your inbox Friday. ✦</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
