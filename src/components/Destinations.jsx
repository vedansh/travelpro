import { useState } from 'react';
import { destinations, filters } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './Destinations.module.css';

function DestinationCard({ dest, featured }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img src={dest.img} alt={dest.name} loading="lazy" className={styles.img} />
      <div className={styles.cardOverlay} />
      <button className={styles.cardBtn}>View Itinerary →</button>
      <div className={styles.cardBody}>
        <div className={styles.chips}>
          {dest.tags.map(t => <span key={t} className={styles.chip}>{t}</span>)}
        </div>
        <div className={styles.name}>{dest.name}</div>
        <div className={styles.foot}>
          <span className={styles.country}>{dest.flag} {dest.country}</span>
          <span className={styles.dur}>{dest.days} days</span>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  const [active, setActive] = useState('all');
  const headerRef = useReveal();
  const filtersRef = useReveal();
  const gridRef = useReveal();

  const visible = destinations.filter(d => active === 'all' || d.region === active);

  return (
    <section className={styles.section} id="destinations">
      <div className={styles.header} ref={headerRef}>
        <span className={styles.tag}>Trending Now</span>
        <h2 className={styles.title}>Curated <em>Destinations</em></h2>
        <p className={styles.sub}>Each itinerary is built from thousands of traveler reviews, local expert insights, and real-time data.</p>
      </div>

      <div className={styles.pills} ref={filtersRef}>
        {filters.map(f => (
          <button
            key={f.value}
            className={`${styles.pill} ${active === f.value ? styles.pillActive : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid} ref={gridRef}>
        {destinations.map((dest, i) => (
          <div
            key={dest.id}
            className={styles.cardWrap}
            style={{
              opacity: active === 'all' || dest.region === active ? 1 : 0.18,
              transform: active === 'all' || dest.region === active ? '' : 'scale(0.97)',
              pointerEvents: active === 'all' || dest.region === active ? 'auto' : 'none',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              gridRow: i === 0 ? 'span 2' : undefined,
            }}
          >
            <DestinationCard dest={dest} featured={i === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
