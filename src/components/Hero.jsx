import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.classList.add(styles.loaded));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg} ref={bgRef} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          Curated Travel Experiences
          <span className={styles.line} />
        </div>
        <h1 className={styles.title}>
          Discover Your<br /><em>Next Adventure</em>
        </h1>
        <p className={styles.sub}>
          Hand-picked destinations, beautifully planned — from hidden gems to iconic escapes, crafted for every kind of traveler.
        </p>
        <div className={styles.search}>
          <input type="text" placeholder="Search a destination…" aria-label="Search destinations" />
          <button>Explore →</button>
        </div>
        <p className={styles.searchNote}>Explore more</p>
      </div>

      <div className={styles.stats}>
        {[['240+', 'Destinations'], ['1–2', 'Day Itineraries'], ['50k+', 'Happy Travelers']].map(
          ([num, label]) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          )
        )}
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
