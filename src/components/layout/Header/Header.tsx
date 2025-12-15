"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>autoclean.</h1>
        </div>

        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Membership
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.mobileContent}>
            <div className={styles.mobileHeader}>
              <h2>autoclean.</h2>
            </div>

            <nav className={styles.mobileNav}>
              <ul>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Membership
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
              <a href="tel:+1234567890" className={styles.phoneNumber}>
                +1 (234) 567-890
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
