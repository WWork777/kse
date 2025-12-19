import styles from './styles.module.scss';
import Image from 'next/image';

export default function Services() {
  return (
    <section className={styles.services__section}>
      <div className={styles.services}>
        <div className={styles.services__item}>
          <div className={styles.services__item__header}>
            <span>01</span>
            <h3>ПОЛИРОВКА СТЕКЛА</h3>
          </div>

          <Image
            src={'/images/services/service3.png'}
            alt='Полировка автомобильного стекла'
            width={803}
            height={240}
          />
        </div>
        <div className={styles.services__item}>
          <div className={styles.services__item__header}>
            <span>02</span>
            <h3>ВОССТАНОВЛЕНИЕ прозрачности ФАР</h3>
          </div>

          <Image
            src={'/images/services/service1.jpg'}
            alt='Восстановление автомобильных фар'
            width={803}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}
