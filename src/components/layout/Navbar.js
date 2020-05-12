import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styles from "../../styles/global.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className={`${styles.container} ${styles.flexWrapper}`}>
        <div className={styles.logo}>
          <Link to="/" className="navbar-item" title="Logo">
            <img src="img/logo-light.svg" alt="Jason Karlavige" />
          </Link>
        </div>
        <div className={`${styles.navItems} ${styles.flexWrapper}`}>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link> */}
          <OutboundLink
            className={styles.navbarSocial}
            href="https://github.com/JKarlavige/jasonkarlavige.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaGithub />
            </span>
          </OutboundLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
