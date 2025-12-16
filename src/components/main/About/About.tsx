import styles from "./styles.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.about}>
        <div className={styles.about__image}>
          <Image
            src={"/images/about/1.JPG"}
            width={620}
            height={720}
            alt="About"
          />
        </div>
        <div className={styles.about__content}>
          <span className={styles.about__content__span}>О нас</span>
          <h2 className={styles.about__content__title}>
            К.С,Е, — студия профессиональной полировки автомобильных стёкол, где
            каждая деталь работает на вашу безопасность, комфорт и внешний вид
            автомобиля.
          </h2>
          <p className={styles.about__content__description}>
            Наша специализация — восстановление прозрачности лобовых, боковых и
            задних стёкол без замены. Мы эффективно устраняем царапины,
            потёртости от дворников, следы пескоструя и мелкие повреждения,
            которые мешают обзору и портят внешний вид авто. Результат —
            кристально чистое стекло, улучшенная видимость в любое время суток и
            аккуратный, ухоженный вид автомобиля.
          </p>
          <div className={styles.about__content__items}>
            <div className={styles.about__content__item}>
              <span className={styles.about__content__item__number}>99+</span>
              <span className={styles.about__content__item__text}>
                Услуг выполнено
              </span>
            </div>
            <div className={styles.about__content__item}>
              <span className={styles.about__content__item__number}>200+</span>
              <span className={styles.about__content__item__text}>
                Довольных клиентов
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
