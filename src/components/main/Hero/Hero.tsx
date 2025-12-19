import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <Image src='/images/hero/hero-01.JPG' alt='Hero Image' fill priority />

        <div className={styles.content}>
          <p>
            Сделайте ваши поездки безопаснее с помощью полировки{' '}
            <span>и сэкономьте на замене стекла</span>
          </p>
          <Link href='https://t.me/Fizik_Sergey'>Запишитесь сейчас</Link>
        </div>

        <div className={styles.bottomText}>
          <span>полировка стекол</span>
        </div>
      </div>
    </section>
  );
}
