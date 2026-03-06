import styles from "./styles.module.scss";
import Image from "next/image";

export default function AboutRepair() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.about}>
        <div className={styles.about__image}>
          <Image
            src={"/images/about/1.JPG"}
            width={620}
            height={720}
            alt="О ремонте стекол"
          />
        </div>
        <div className={styles.about__content}>
          <span className={styles.about__content__span}>Ремонт стекол</span>
          <h2 className={styles.about__content__title}>
            На стекле появился скол или трещина? Не тяните. Любое повреждение растёт: от скачков температуры, мойки, кочек и даже хлопающих дверей. То, что сегодня выглядит как точка, завтра превращается в «паутину» по всему стеклу и необходимость полной замены.
          </h2>
          <p className={styles.about__content__description}>
            Мы профессионально восстанавливаем стекла — быстро, аккуратно и с гарантией результата. Работаем с лобовыми, боковыми и задними стёклами. Сохраняем родное стекло — без разбора салона и риска протечек. Честная оценка: если ремонт невозможен, скажем сразу.
          </p>
          <div className={styles.about__content__items}>
            <div className={styles.about__content__item}>
              <span className={styles.about__content__item__number}>👉</span>
              <span className={styles.about__content__item__text}>
                Ремонт скола сегодня стоит в разы дешевле, чем замена стекла завтра
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

