import React from 'react';
import whatidoData from './whatido.data';
import styles from './whatido.module.scss';
import type { ExpertiseColorVariant, WhatidoItem } from './whatido.data';

const cardClassForVariant = (v: ExpertiseColorVariant): string => {
  if (v === 'gold') return styles.serviceCardGold;
  if (v === 'teal') return styles.serviceCardTeal;
  return '';
};

const ExpertiseCard: React.FC<{ item: WhatidoItem }> = ({ item }) => {
  const variantClass = cardClassForVariant(item.colorVariant);
  return (
    <article
      className={[styles.serviceCard, variantClass].filter(Boolean).join(' ')}
    >
      <div className={styles.iconHex} aria-hidden>
        <i className={item.icon} />
      </div>
      <div className={styles.desc}>
        <h3>{item.title}</h3>
        {/* HTML is authored in whatido.data.ts (static module); not user-supplied. */}
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
      </div>
    </article>
  );
};

const WhatIDoComponent: React.FC = () => {
  return (
    <section className={styles.whatIDoSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.heading}>
            <span className={styles.headingMeta}>What I Do?</span>
            <h2 className={styles.colorlibHeading}>Here are some of my expertise</h2>
          </div>
        </div>
        <div className={styles.itemsRow}>
          {whatidoData.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoComponent;
