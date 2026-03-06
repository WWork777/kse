import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroRepair() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <Image src='/images/hero/hero-01.JPG' alt='Hero Image' fill priority />

        <div className={styles.content}>
          <p>
            Сохраним стекло — <span>сэкономим на замене</span>
          </p>
          <Link href='https://t.me/Fizik_Sergey'>Запишитесь сейчас</Link>
        </div>

        <div className={styles.bottomText}>
          <span>ремонт стекол</span>
        </div>
      </div>
    </section>
  );
}

