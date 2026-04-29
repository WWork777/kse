// components/NewServiceModal/NewServiceModal.tsx
'use client';
import { useEffect, useState } from 'react';
import styles from './NewServiceModal.module.scss';
import Image from 'next/image';

const STORAGE_KEY = 'night_polishing_modal_shown';

export default function NewServiceModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setIsVisible(true);
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  }, []);

  const closeModal = () => setIsVisible(false);

  const handleCta = () => {
    // Здесь можно закрыть окно и проскроллить к форме, либо перейти на страницу записи
    closeModal();
    // Например: router.push('/#contact');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal} aria-label="Закрыть">
          ×
        </button>

        <div className={styles.content}>
          <span className={styles.badge}>Новая услуга</span>
          <h3 className={styles.title}>Ночная полировка</h3>
          <p className={styles.description}>
            Преобразите автомобиль, пока вы спите. Выездной сервис с 22:00 до 06:00, экономия времени и безупречный блеск к утру.
          </p>

          <button className={styles.cta} onClick={handleCta}>
            Записаться
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.illustration}>
          <Image
            src="/images/night-polishing.jpg"
            alt="Ночная полировка"
            width={400}
            height={300}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
}