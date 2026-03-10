import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroBlog() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <Image src='/images/hero/hero_blog.webp' alt='Hero Image' fill priority />

        <div className={styles.content}>
          <p>
            Не гадай на дороге — <span>уточни вопрос у профессионалов</span>
          </p>
          <Link href='https://t.me/Fizik_Sergey'>Напишите сейчас</Link>
        </div>

        <div className={styles.bottomText}>
          <span>Статьи и советы</span>
        </div>
      </div>
    </section>
  );
}

