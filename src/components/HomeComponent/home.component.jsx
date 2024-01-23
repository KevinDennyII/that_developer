import React from 'react';
import { home, music, quote } from './home.module.scss';

const HomeComponent = () => (
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
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      <div
        style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%;">
        <iframe
          src="https://embed.tidal.com/playlists/c216b6a4-2bd8-4db0-b96b-6c905a455434?layout=gridify"
          frameBorder="0" allowFullScreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 1px; min-height: 100%; margin: 0 auto;"></iframe>
      </div>
    </div>
  </div>
);
export default HomeComponent;
