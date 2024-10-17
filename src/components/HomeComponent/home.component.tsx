import React from 'react';
import { home, music, quote } from './home.module.scss';

function HomeComponent() {

  return (
    <div className={home}>
      <div className={quote}>
        &quot;When you change your perspective,
        <br />
        you tend to hear things differently.&quot;
        <br />
        - DJ LookUp
      </div>
      <div className={music}>
        <iframe
          title="DJ LookUp's No Lyrics Just Listen Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/5c4WKwIIouBRNZclEqvM62?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </div>
  );
}
export default HomeComponent;
