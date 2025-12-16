import styles from "./styles.module.scss";
import Image from "next/image";

export default function Transform() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transform}>
        <h2 className={styles.transform__title}>
          Превращаем ваше авто в идеал прозрачности
        </h2>
        <span className={styles.transform__subtitle}>
          Профессиональный подход к восстановлению и защите стёкол
        </span>
        <div className={styles.transform__items}>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/2.JPEG"
              alt="Полировка стекла"
              width={1920}
              height={1080}
            />
            <h3>Полировка стекла</h3>
            <span>Удаление мелких царапин и потёртостей</span>
          </div>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/3.JPEG"
              alt="Шлифовка стекла"
              width={1920}
              height={1080}
            />
            <h3>Шлифовка стекла</h3>
            <span>Устранение глубоких повреждений</span>
          </div>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/3.jpg"
              alt="Восстановление фар"
              width={581}
              height={730}
            />
            <h3>Восстановление фар</h3>
            <span>Возвращение прозрачности и яркости</span>
          </div>
        </div>
      </div>
    </section>
  );
}
