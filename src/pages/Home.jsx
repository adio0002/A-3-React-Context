import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Est. MMXXIV — Art Discovery Platform</p>
          <h1 className={styles.headline}>
            Where Great<br />
            <em>Art Lives</em>
          </h1>
          <p className={styles.body}>
            Explore the permanent collection of the Art Institute of Chicago —
            one of the oldest and largest art museums in the United States. From
            impressionist masterworks to ancient artefacts, every piece tells a story
            that transcends time.
          </p>
          <div className={styles.cta}>
            <Link to="/gallery" className={styles.ctaPrimary}>
              Browse the Gallery →
            </Link>
            <Link to="/contact" className={styles.ctaSecondary}>
              Get in Touch
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageFrame}>
            <img
              src="https://www.artic.edu/iiif/2/a6b1cdb3-accf-2b09-8e7c-d4b83bbd0252/full/843,/0/default.jpg"
              alt="Georges Seurat – A Sunday on La Grande Jatte"
              className={styles.featuredImg}
            />
            <div className={styles.imageCaption}>
              <span>Georges Seurat</span>
              <span>A Sunday on La Grande Jatte, 1886</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature strip ────────────────────────────────── */}
      <section className={styles.features}>
        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>300K+</span>
          <span className={styles.featureLabel}>Works in the Collection</span>
        </div>
        <div className={styles.featureDivider} aria-hidden="true" />
        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>5,000+</span>
          <span className={styles.featureLabel}>Years of Art History</span>
        </div>
        <div className={styles.featureDivider} aria-hidden="true" />
        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>136</span>
          <span className={styles.featureLabel}>Years of Excellence</span>
        </div>
      </section>

      {/* ── About blurb ──────────────────────────────────── */}
      <section className={styles.about}>
        <div className={styles.aboutQuote}>
          <blockquote>
            "The purpose of art is washing the dust of daily life off our souls."
          </blockquote>
          <cite>— Pablo Picasso</cite>
        </div>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutHeading}>Our Mission</h2>
          <p>
            ARTEX is a passion project dedicated to making the world's finest art accessible
            to everyone. We pull live data directly from the Art Institute of Chicago's public
            API so you can discover new favourites, learn about the artists behind the works,
            and find pieces that move you.
          </p>
          <p>
            Whether you're a seasoned collector or seeing Monet for the first time, there's
            something here for you. Start exploring today.
          </p>
        </div>
      </section>
    </main>
  );
}
