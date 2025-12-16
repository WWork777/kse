"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

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
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="kse logo" width={75} height={50} />
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <a href="/" onClick={() => setMenuOpen(false)}>
                Главная
              </a>
            </li>
            <li>
              <a href="/#services" onClick={() => setMenuOpen(false)}>
                Услуги
              </a>
            </li>
            <li>
              <a href="/#about" onClick={() => setMenuOpen(false)}>
                О нас
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Fizik_Sergey"
                onClick={() => setMenuOpen(false)}
              >
                Оставить заявку
              </a>
            </li>
            <li>
              <a href="/#contacts" onClick={() => setMenuOpen(false)}>
                Контакты
              </a>
            </li>
            <li>
              <a
                href="tel:+7 (923) 523-44-23"
                onClick={() => setMenuOpen(false)}
              >
                +7 (923) 523-44-23
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
                  <a href="/" onClick={() => setMenuOpen(false)}>
                    Главная
                  </a>
                </li>
                <li>
                  <a href="/#services" onClick={() => setMenuOpen(false)}>
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="/#about" onClick={() => setMenuOpen(false)}>
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/Fizik_Sergey"
                    onClick={() => setMenuOpen(false)}
                  >
                    Оставить заявку
                  </a>
                </li>
                <li>
                  <a href="/#contacts" onClick={() => setMenuOpen(false)}>
                    Контакты
                  </a>
                </li>
              </ul>
              <a href="tel:+7 (923) 523-44-23" className={styles.phoneNumber}>
                +7 (923) 523-44-23
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
