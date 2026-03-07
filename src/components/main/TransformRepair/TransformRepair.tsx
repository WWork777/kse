import styles from './styles.module.scss';

export default function TransformRepair() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transform}>
        <h2 className={styles.transform__title}>
          Почему важно отремонтировать скол сейчас
        </h2>
        <span className={styles.transform__subtitle}>
          Трещина растёт, безопасность падает
        </span>
        <div className={styles.transform__items}>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Трещина распространяется</h3>
              <span>От малейшего удара повреждение может разрастись по всему стеклу</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Ухудшается обзор</h3>
              <span>И падает безопасность — особенно в плохую погоду и ночью</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Может не пройти техосмотр</h3>
              <span>Повреждения на лобовом стекле могут стать причиной отказа в техосмотре</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Потеря качества</h3>
              <span>При замене стекла вы теряете в заводском качестве и герметичности</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}

