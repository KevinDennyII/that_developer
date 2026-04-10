import React from 'react';
import ImageLazyLoader from './ImageLazyLoader';
import styles from './about.module.scss';
import type { AboutGalleryEntry } from './about.gallery.data';

interface AboutGalleryItemProps {
  item: AboutGalleryEntry;
  index: number;
}

const AboutGalleryItem: React.FC<AboutGalleryItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  const image = (
    <div className={styles.galleryImage}>
      <ImageLazyLoader src={item.image} width={200} height={200} alt={item.alt} />
    </div>
  );
  const copy = (
    <div className={styles.galleryCopy}>
      <p>{item.description}</p>
    </div>
  );

  return (
    <div className={styles.galleryRow}>
      {isEven ? (
        <>
          {image}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {image}
        </>
      )}
    </div>
  );
};

export default AboutGalleryItem;
