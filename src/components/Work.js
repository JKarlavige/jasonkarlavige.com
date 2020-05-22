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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Front-End Web Development</li>
              <li>React Web App</li>
            </ul>
          </div> */}
        </div>
      </a>
    </div>

    {/* <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.pyggbank}`}
    >
      <a href="../work/pyggbank">
        <div className={`${styles.portfolioOverlay} ${styles.pyggOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/pyggbank/logo.png"
            alt="Pyggbank"
          />
          <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Frontend/Backend Web Development</li>
            </ul>
          </div>
        </div>
      </a>
    </div> */}

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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>JavaScript MERN Stack Web App</li>
            </ul>
          </div> */}
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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Mobile UX Design</li>
              <li>Photography</li>
            </ul>
          </div> */}
        </div>
      </a>
    </div>

    {/* <div
      className={`${styles.colSmHalfZ} ${styles.portfolioPiece} ${styles.roverkayaks}`}
    >
      <a href="../work/roverkayaks">
        <div className={`${styles.portfolioOverlay} ${styles.roverOverlay}`}>
          <img
            className={`${styles.portfolioBrandLg}`}
            src="/img/work/roverkayaks/rover_brand_mobile_w.svg"
            alt="Rover Kayaks"
          />
          <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Marketing</li>
              <li>Social Media</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </a>
    </div> */}

    {/* <div className="col-sm-half-z portfolio-piece skyliners">
        <a href="../work/skyliners">
            <div className={`${styles.portfolioOverlay} skyliners-overlay">
				<img className={`${styles.portfolioBrand}`} src="/img/work/skyliners/sky_brand.png" alt="Skyliners" />
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Responsive Web Design &amp; Development</li>
                    </ul>
                </div>
        	</div>
        </a>
    </div>

    <div className="col-sm-half-z portfolio-piece quinns">
    	<a href="../work/quinns">
        	<div className={`${styles.portfolioOverlay} quinns-overlay">
				<img className={`${styles.portfolioBrandLg}`} src="/img/work/quinns/logo.png" alt="Quinns" />
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Branding</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
        	</div>
        </a>
    </div> */}

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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>React Web Application</li>
              <li>Front-End Development</li>
            </ul>
          </div> */}
        </div>
      </a>
    </div>

    {/* <div className="col-sm-half-z col-md-full-z portfolio-piece cccafe">
        <a href="../work/centercitycafe">
            <div className={`${styles.portfolioOverlay} cccafe-overlay">
                <img className={`${styles.portfolioBrandLg}`} src="/img/work/centercitycafe/text_white.png" alt="Center City Cafe" />
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Branding</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
            </div>
        </a>
    </div> */}

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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Web Design</li>
              <li>Wordpress Development</li>
            </ul>
          </div> */}
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
          {/* <div className={`${styles.descriptionContent}`}>
            <ul className={`${styles.descriptionDetailsList}`}>
              <li>Dynamic Web Application</li>
              <li>LAMP Stack</li>
            </ul>
          </div> */}
        </div>
      </a>
    </div>

    {/* <div className="col-sm-half-z portfolio-piece trally">

    	<a href="../work/trally">
        	<div className={`${styles.portfolioOverlay} trally-overlay">
									<img className={`${styles.portfolioBrand}`} src="/img/work/trally/trally_brand.png" alt="Trally" />
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Mobile</li>
                        <li>UX/UI</li>
                        <li>Branding</li>
                    </ul>
                </div>
        	</div>
        </a>

    </div>

    <div className="col-sm-half-z portfolio-piece coastal">

        <a href="../work/coastalcraft">
        	<div className={`${styles.portfolioOverlay} coastal-overlay">
									<img className={`${styles.portfolioBrand}`} src="/img/work/coastal_craft/brand.png" alt="Coastal Craft" />
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Web Development</li>
                        <li>Social Media</li>
                    </ul>
                </div>
            </div>
        </a>

    </div>

    <div className="col-sm-half-z portfolio-piece photography">

        <a href="https://www.flickr.com/photos/109620903@N02/" target="_blank">
            <h2 className="portfolio-brand-text">Photography</h2>
        	<div className={`${styles.portfolioOverlay} photography-overlay">
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Lighting</li>
                        <li>Adobe Lightroom</li>
                    </ul>
                </div>
            </div>
        </a>

    </div>

    <div className="col-sm-half-z portfolio-piece ps">

        <a href="../work/popularspeed">
        	<div className={`${styles.portfolioOverlay} ps-overlay">
									<h2 className="portfolio-brand-text">Popular Speed</h2>
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Sports Journalism</li>
                    </ul>
                </div>
            </div>
        </a>

    </div>

    
    <div className="col-sm-half-z col-md-third portfolio-piece wellington">
        <a href="../work/wellington">
    		<img className={`${styles.portfolioBrand}`} src="/img/work/wellington/ws_brand.png" alt="Wellington and Strauss" />

        	<div className={`${styles.portfolioOverlay} wellington-overlay">
                <div className={`${styles.descriptionContent}`}>
                    <ul className={`${styles.descriptionDetailsList}`}>
                        <li>Web</li>
                        <li>UX/UI</li>
                        <li>Mobile</li>
                    </ul>
                </div>
            </div>
        </a>
    </div> */}
  </section>
);

export default Work;
