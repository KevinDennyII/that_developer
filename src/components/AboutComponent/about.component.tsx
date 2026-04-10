import React from 'react';
import { aboutGalleryData } from './about.gallery.data';
import AboutGalleryItem from './AboutGalleryItem';
import styles from './about.module.scss';

const AboutComponent: React.FC = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <div className={styles.gallery}>
                      {aboutGalleryData.map((item, index) => (
                        <AboutGalleryItem item={item} key={item.alt} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
