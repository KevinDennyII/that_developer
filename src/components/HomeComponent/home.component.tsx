import React from 'react';
import styles from './home.module.scss';
import LazyIframe from '../LazyIframe/LazyIframe';

function HomeComponent() {
  return (
    <section className={styles.home} aria-labelledby="home-quote-heading">
      <h2 id="home-quote-heading" className="sr-only">
        Featured quote
      </h2>
      <blockquote className={styles.quote}>
        <span className={styles.quoteFirstPhrase}>
          &quot;When you change your perspective,
        </span>
        <br />
        you tend to hear things differently.&quot;
        <br />
        <span>— DJ LookUp</span>
      </blockquote>
      <p className={styles.embedLabel}>Featured playlist — TIDAL</p>
      <div className={styles.embedCard}>
        <div className={styles.music}>
          <LazyIframe
            src="https://embed.tidal.com/playlists/c389461c-5076-4a42-8897-4d4c87cdb8a9"
            width="100%"
            height="380"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            title="TIDAL playlist: No Lyrics, Just Listen"
          />
        </div>
      </div>
    </section>
  );
}
export default HomeComponent;
