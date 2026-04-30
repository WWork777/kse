"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ServicesSecond() {
  const images = [
    "/images/secondServices/first.jpg",
    "/images/secondServices/second.jpeg",
    "/images/secondServices/three.jpg",
    "/images/secondServices/four.jpg",
    "/images/secondServices/5.jpg",
  ];

  const services = [
    {
      title: "Полировка стекла",
      description:
        "Удаляем водный камень, мелкие царапины и затертости от дворников. Стоимость зависит от типа стекла (лобовое, боковое или заднее) и габаритов автомобиля.",
      price: "5 000 — 13 000 ₽",
    },
    {
      title: "Шлифовка + полировка",
      description:
        "Глубокое восстановление стекла. Позволяет убрать серьезные царапины и вернуть идеальную прозрачность без дорогостоящей замены.",
      price: "от 8 000 ₽",
    },
    {
      title: "Полировка фар",
      description:
        "Возвращаем прозрачность и яркость света. Это напрямую влияет на безопасность и комфорт при вождении в темное время суток.",
      price: "2 000 ₽ (за шт)",
    },
    {
      title: "Нанесение антидождя",
      description:
        "Специальный гидрофобный состав. Вода скатывается каплями, улучшая видимость в ливень, а зимой стекло гораздо меньше обмерзает.",
      price: "2 000 ₽ (лобовое)",
    },
    {
      title: "Ночная полировка",
      description:
        "Специальное предложение: вы отдаете авто вечером, а утром забираете с готовым результатом. Идеально для тех, кто всегда должен быть за рулем. Стоимость зависит от типа стекла (лобовое, боковое или заднее) и габаритов автомобиля.",
      price: "от 5 000 ₽",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const openTelegram = () => {
    const telegramUrl = "https://t.me/Sergey_glass_polishing";
    window.open(telegramUrl, "_blank");
  };

  return (
    <section className={styles.servicesSecond} id="services">
      <div className={styles.container}>
        <div className={styles.servicesSecond__header}>
          <h2>Восстановление и защита стекол для вашей безопасности</h2>
          <div className={styles.headerActions}>
            <span className={styles.headerText}>
              Хотите вернуть стеклу вашего автомобиля первоначальный блеск?
            </span>
          </div>
        </div>

        <div className={styles.servicesSecond__content}>
          <div className={styles.servicesSecond__content__item}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div
                  className={styles.serviceHeader}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    className={`${styles.serviceTitle} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    {service.title}
                    {/* Иконка стрелочки для мобильных устройств */}
                    <svg
                      className={`${styles.arrowIcon} ${activeIndex === index ? styles.arrowActive : ""}`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>

                <div
                  className={`${styles.serviceDescription} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <p>{service.description}</p>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{service.price}</span>
                  </div>
                  <button
                    className={styles.serviceButton}
                    onClick={openTelegram}
                  >
                    Записаться
                  </button>
                </div>

                {/* Мобильная картинка */}
                <div className={styles.image_mobile}>
                  {activeIndex === index && (
                    <Image
                      src={images[index]}
                      width={800}
                      height={500}
                      alt={service.title}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Десктопная картинка */}
          <div className={styles.servicesSecond__content__image}>
            <div className={styles.imageWrapper}>
              <Image
                src={images[activeIndex]}
                width={850}
                height={550}
                alt="Service preview"
                className={styles.image_desktop}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
