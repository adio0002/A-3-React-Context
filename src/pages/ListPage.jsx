import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import styles from '../styles/ListPage.module.css';

const API_URL =
  'https://api.artic.edu/api/v1/artworks?limit=12&fields=id,title,artist_display,date_display,image_id,medium_display,dimensions';

const IMG_BASE = 'https://www.artic.edu/iiif/2';

function ArtCard({ artwork }) {
  const imgSrc = artwork.image_id
    ? `${IMG_BASE}/${artwork.image_id}/full/400,/0/default.jpg`
    : null;

  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        {imgSrc ? (
          <img src={imgSrc} alt={artwork.title} loading="lazy" />
        ) : (
          <div className={styles.noImage}>
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{artwork.title}</h2>
        <p className={styles.cardArtist}>{artwork.artist_display}</p>
        {artwork.date_display && (
          <p className={styles.cardMeta}>
            <span className={styles.metaLabel}>Date</span>
            {artwork.date_display}
          </p>
        )}
        {artwork.medium_display && (
          <p className={styles.cardMeta}>
            <span className={styles.metaLabel}>Medium</span>
            {artwork.medium_display}
          </p>
        )}
      </div>
    </article>
  );
}

export default function ListPage() {
  const [artworks, setArtworks]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArtworks() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const json = await res.json();
        setArtworks(json.data ?? []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchArtworks();
    return () => controller.abort();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>Art Institute of Chicago — Public Collection</p>
          <h1 className={styles.heading}>The Gallery</h1>
          <p className={styles.subheading}>
            A curated selection of works from over 300,000 pieces in the permanent collection.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {loading && <Spinner message="Fetching artworks…" />}

        {error && (
          <div className={styles.errorBox} role="alert">
            <p className={styles.errorTitle}>Unable to load artworks</p>
            <p className={styles.errorMessage}>{error}</p>
            <p className={styles.errorHint}>
              Check your internet connection or try again later.
            </p>
          </div>
        )}

        {!loading && !error && artworks.length === 0 && (
          <p className={styles.empty}>No artworks found.</p>
        )}

        {!loading && !error && artworks.length > 0 && (
          <>
            <p className={styles.count}>
              Showing <strong>{artworks.length}</strong> works
            </p>
            <div className={styles.grid}>
              {artworks.map((artwork) => (
                <ArtCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
