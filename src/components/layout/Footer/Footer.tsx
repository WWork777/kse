import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_top}>
        <div className={styles.item}>
          <h3>autoclean.</h3>
          <p className={styles.description}>
            Auto Clean is a premier car repair shop committed to delivering
            high-quality automotive services and customer satisfaction.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Contact</h3>
          <span>info@autoclean.com</span>
          <span>USA — 123 Auto Lane, Springfield, IL 62701</span>
        </div>
        <div className={styles.item}>
          <h3>Links</h3>
          <span>Home</span>
          <span>Services</span>
          <span>About Us</span>
          <span>Membership</span>
          <span>Contact</span>
        </div>
        <div className={styles.item}>
          <h3>Get in touch</h3>
          <div className={styles.socials}></div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <span>© 2024 Auto Clean. All rights reserved.</span>
        <span>Site by AncoraThemes.</span>
      </div>
    </footer>
  );
}
