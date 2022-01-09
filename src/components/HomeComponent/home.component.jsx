import React from 'react';
import { home, music, quote } from './home.module.scss';

const HomeComponent = () => (
  <div className={home}>
    <div className={quote}>
      "When you change your perspective,
      <br />
      you tend to hear things differently."
      <br />
      - DJ LookUp
    </div>
    <div className={music}>
      This is my go to list whenever I need to get in the zone!
      <br />
      <iframe
        title="DJ LookUp's No Lyrics Just Listen Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/5c4WKwIIouBRNZclEqvM62?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  </div>
);
export default HomeComponent;
