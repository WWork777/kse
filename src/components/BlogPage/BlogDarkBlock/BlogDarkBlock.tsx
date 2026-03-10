import styles from './styles.module.scss';

export default function BlogDarkBlock() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transform}>
        <h2 className={styles.transform__title}>
          Полезные статьи для каждого автовладельца
        </h2>
        <span className={styles.transform__subtitle}>
          Узнайте, как сохранить идеальный вид вашего автомобиля
        </span>
        <div className={styles.transform__items}>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Экспертные советы</h3>
              <span>Практические рекомендации от наших специалистов по уходу за стеклами и фарами.</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Обзоры технологий</h3>
              <span>Будьте в курсе последних инноваций в области полировки и защиты автостекол.</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Решение проблем</h3>
              <span>Найдите ответы на частые вопросы о повреждениях стекол и способах их устранения.</span>
            </div>
          </div>
          <div className={styles.transform__item}>
            <div className={styles.reasonBox}>
              <h3>Экономия средств</h3>
              <span>Узнайте, как правильный уход поможет избежать дорогостоящей замены деталей.</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}

