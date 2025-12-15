import styles from "./styles.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <Image src="/images/hero/hero.jpg" alt="Hero Image" fill priority />

        <div className={styles.content}>
          <p>
            Revitalize your vehicle’s look with our premier car wash.{" "}
            <span>We provide services that exceed expectations.</span>
          </p>
          <button>BOOK NOW</button>
        </div>

        <div className={styles.bottomText}>
          <span>CAR DETAILING</span>
        </div>
      </div>
    </section>
  );
}
