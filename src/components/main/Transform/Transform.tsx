import styles from './styles.module.scss';
import BeforeAfterSlider from './BeforeAfterSlider';

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
            <BeforeAfterSlider
              beforeImage='/images/transform/before-polirovka.JPG'
              afterImage='/images/transform/after-polirovka.png'
              beforeAlt='До полировки стекла'
              afterAlt='После полировки стекла'
              width={1920}
              height={1080}
            />
            <h3>Полировка стекла</h3>
            <span>Удаление мелких царапин и потёртостей</span>
          </div>
          <div className={styles.transform__item}>
            <BeforeAfterSlider
              beforeImage='/images/transform/before-shlifovka.JPG'
              afterImage='/images/transform/after-shlifovka.JPG'
              beforeAlt='До шлифовки стекла'
              afterAlt='После шлифовки стекла'
              width={1920}
              height={1080}
            />
            <h3>Шлифовка стекла</h3>
            <span>Устранение глубоких повреждений</span>
          </div>
          <div className={styles.transform__item}>
            <BeforeAfterSlider
              beforeImage='/images/transform/before-vosstanovlenie.png'
              afterImage='/images/transform/after-vosstanovlenie.png'
              beforeAlt='До восстановления фар'
              afterAlt='После восстановления фар'
              width={1920}
              height={1080}
            />
            <h3>Восстановление фар</h3>
            <span>Возвращение прозрачности и яркости</span>
          </div>
        </div>
      </div>
    </section>
  );
}
