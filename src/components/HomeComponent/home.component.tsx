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
          src="https://embed.tidal.com/playlists/c389461c-5076-4a42-8897-4d4c87cdb8a9"
          width="100%"
          height="380"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player"
        />
      </div>
    </div>
  );
}
export default HomeComponent;
