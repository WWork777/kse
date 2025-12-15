import styles from "./styles.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.about}>
        <div className={styles.about__image}>
          <Image
            src={"/images/about/about.jpg"}
            width={620}
            height={720}
            alt="About"
          />
        </div>
        <div className={styles.about__content}>
          <span className={styles.about__content__span}>
            Enhancing your car’s performance
          </span>
          <h2 className={styles.about__content__title}>
            We prioritize your vehicle’s care and safety
          </h2>
          <p className={styles.about__content__description}>
            At Auto Clean, we ensure your vehicle receives quality care and
            maintenance. Our services keep your car in peak condition.
          </p>
          <div className={styles.about__content__items}>
            <div className={styles.about__content__item}>
              <span className={styles.about__content__item__number}>99+</span>
              <span className={styles.about__content__item__text}>
                Services provided
              </span>
            </div>
            <div className={styles.about__content__item}>
              <span className={styles.about__content__item__number}>200+</span>
              <span className={styles.about__content__item__text}>
                Happy customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
