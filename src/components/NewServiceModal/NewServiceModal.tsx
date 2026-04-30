// components/NewServiceModal/NewServiceModal.tsx
"use client";
import { useEffect, useState } from "react";
import styles from "./NewServiceModal.module.scss";

const STORAGE_KEY = "night_polishing_modal_shown";
const CTA_URL =
  "https://max.ru/u/f9LHodD0cOI3ewZ_yl3NqhfOQKuGTOY17LxAIPADNx3fjL_iU7EGHxChywc";

export default function NewServiceModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setIsVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  const closeModal = () => setIsVisible(false);

  const handleCtaClick = () => {
    // Открываем ссылку в новой вкладке
    window.open(CTA_URL, "_blank", "noopener,noreferrer");
    // Закрываем модальное окно после клика
    closeModal();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={closeModal}
          aria-label="Закрыть"
        >
          ×
        </button>

        <div className={styles.content}>
          <span className={styles.badge}>Новая услуга</span>
          <h3 className={styles.title}>
            Заезжайте вечером — <span>забирайте утром</span>
          </h3>

          <div className={styles.body}>
            <p className={styles.highlight}>
              Не тратьте рабочее время на визит в сервис. Мы отполируем стёкла,
              пока вы отдыхаете.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>Безопасность:</strong> Уберем затертости от щеток и
                водный камень.
              </li>
              <li>
                <strong>Комфорт:</strong> Ваши глаза перестанут уставать от
                бликов ночью.
              </li>
              <li>
                <strong>Эффективность:</strong> Прозрачность стекла вернется к
                заводским параметрам.
              </li>
            </ul>

            <p className={styles.footerText}>Цена услуги от 5 тысяч рублей</p>
            <p className={styles.footerText}>
              Стоимость зависит от типа стекла (лобовое, боковое или заднее) и
              габаритов автомобиля.
            </p>
          </div>

          <button className={styles.cta} onClick={handleCtaClick}>
            Записаться
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
