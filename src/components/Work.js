import React from "react";
import styles from "../styles/global.module.scss";

const Work = ({ data }) => (
  <section className={`${styles.portfolioWorkZ} ${styles.group}`}>
    <div
      className={`${styles.colMdFullZ} ${styles.portfolioPiece} ${styles.flix}`}
    >
      <a href="https://flix-app.firebaseapp.com/" target="_blank">
        <div className={`${styles.portfolioOverlay} ${styles.flixOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/flix/flix_logo.png"
            alt="Flix"
          />
        </div>
      </a>
    </div>

    <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.ups}`}
    >
      <a href="https://zipcodes-ups.herokuapp.com/" target="_blank">
        <div className={`${styles.portfolioOverlay} ${styles.upsOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/ups/logo.svg"
            alt="UPS"
          />
        </div>
      </a>
    </div>

    <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.mywilkes}`}
    >
      <a
        href="https://xd.adobe.com/embed/8b7ca2aa-9aab-4c23-b1b0-a43838623e8f/"
        target="_blank"
      >
        <div className={`${styles.portfolioOverlay} ${styles.wilkesOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/mywilkes/logo.png"
            alt="My Wilkes"
          />
        </div>
      </a>
    </div>

    <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.diced}`}
    >
      <a href="https://diced.netlify.app/" target="_blank">
        <div className={`${styles.portfolioOverlay} ${styles.dicedOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/diced/logo_white.png"
            alt="Diced"
          />
        </div>
      </a>
    </div>

    <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.cqa}`}
    >
      <a href="https://www.cqainstitute.com/" target="_blank">
        <div className={`${styles.portfolioOverlay} ${styles.cqaOverlay}`}>
          <img
            className={`${styles.portfolioBrand}`}
            src="/img/work/cqa/cqa_logo_white.png"
            alt="CQA Institute"
          />
        </div>
      </a>
    </div>

    <div
      className={`${styles.colMdFullZ} ${styles.portfolioPiece} ${styles.speedwaycollective}`}
    >
      <a href="https://speedwaycollective.com/" target="_blank">
        <div className={`${styles.portfolioOverlay} ${styles.scOverlay}`}>
          <img
            className={`${styles.portfolioBrand}`}
            id="sc-img-overlay"
            src="/img/work/speedway/sc_white.png"
            alt="Speedway Collective"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Work;
