// styles
import styles from "./footer.module.css";

import Logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.massanger}>
        <img src={Logo} alt="Logo" />
        <span>Facebook</span>
        <span>Telegram</span>
        <span>Instagram</span>
      </div>

      <div className={styles.started}>
        <h5>Getting started</h5>
        <span>Release Notes</span>
        <span>Upgrade Guide</span>
        <span>Browser Support</span>
      </div>

      <div className={styles.started}>
        <h5>Explore</h5>
        <span>Prototyping</span>
        <span>Design systems</span>
        <span>Pricing</span>
      </div>

      <div className={styles.started}>
        <h5>Community</h5>
        <span>Discussion Forums</span>
        <span>Code of Conduct</span>
        <span>Contributing</span>
      </div>
    </div>
  );
};

export default Footer;
