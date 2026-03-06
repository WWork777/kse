import styles from './styles.module.scss';
import Image from 'next/image';

export default function ServicesRepair() {
  return (
    <section className={styles.services__section}>
      <div className={styles.services}>
        <div className={styles.services__item}>
          <div className={styles.services__item__header}>
            <span>01</span>
            <h3>ЗВЕЗДОЧКА</h3>
          </div>
          <Image
            src={'/images/services/service3.png'}
            alt='Ремонт скола типа звездочка'
            width={803}
            height={240}
          />
        </div>
        <div className={styles.services__item}>
          <div className={styles.services__item__header}>
            <span>02</span>
            <h3>ПОЛУМЕСЯЦ</h3>
          </div>
          <Image
            src={'/images/services/service1.jpg'}
            alt='Ремонт скола типа полумесяц'
            width={803}
            height={240}
          />
        </div>
        <div className={styles.services__item}>
          <div className={styles.services__item__header}>
            <span>03</span>
            <h3>БЫЧИЙ ГЛАЗ</h3>
          </div>
          <Image
            src={'/images/services/service2.jpg'}
            alt='Ремонт скола типа бычий глаз'
            width={803}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}

