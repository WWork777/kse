
import styles from './styles.module.scss';

export default function ProcessRepair() {
  return (
    <section className={styles.transformSection}>
        <div className={styles.processSection}>
          <h2 className={styles.processTitle}>Как проходит ремонт</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepText}>Диагностика повреждения — оцениваем глубину и риск распространения</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepText}>Очистка и подготовка зоны ремонта</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>3</span>
              <span className={styles.stepText}>Заполнение трещины/скола полимером профессионального уровня</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>4</span>
              <span className={styles.stepText}>Полимеризация под УФ-лампой</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>5</span>
              <span className={styles.stepText}>Финишная полировка — выравниваем оптику стекла</span>
            </div>
          </div>
          <p className={styles.resultText}>
            Результат: трещина перестаёт расти, стекло возвращает прозрачность и прочность, а повреждение становится почти незаметным.
          </p>
        </div>

        <div className={styles.whyUsSection}>
          <h2 className={styles.whyUsTitle}>Почему выбирают нас</h2>
          <ul className={styles.whyUsList}>
            <li>Специализированное оборудование, не «бытовые наборы»</li>
            <li>Качественные полимеры с высокой прозрачностью</li>
            <li>Аккуратная работа без сверления лишних отверстий</li>
            <li>Сохраняем родное стекло — без разбора салона и риска протечек</li>
            <li>Честная оценка: если ремонт невозможен, скажем сразу</li>
          </ul>
        </div>

        <div className={styles.impossibleSection}>
          <h2 className={styles.impossibleTitle}>Когда ремонт невозможен?</h2>
          <p className={styles.impossibleText}>
            Мы не обещаем невозможного. Замена стекла требуется, если:
          </p>
          <ul className={styles.impossibleList}>
            <li>Трещина вышла на кромку стекла</li>
            <li>Повреждение закрывает обзор водителю</li>
            <li>Скол больше 2–3 см без возможности восстановления</li>
            <li>Стекло уже сильно деформировано</li>
          </ul>
          <p className={styles.impossibleConclusion}>
            В остальных случаях ремонт — лучший вариант.
          </p>
        </div>
    </section>
    );
}