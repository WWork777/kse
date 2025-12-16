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
        "Услуга позволяет удалить водный камень и незначительные царапины. После полировки стекло приобретает более свежий и аккуратный вид",
    },
    {
      title: "Шлифовка + полировка стекла",
      description:
        "Надоели постоянные блики в темное время суток? Тогда вам к нам! Данная услуга подразумевает под собой удаление более серьезных царапин. Позволяет вернуть стеклу первозданный вид без замены.",
    },
    {
      title: "Полировка фар",
      description:
        "Возвращаем прозрачность вашим фарам. После полировки они вновь будут не только приятно выглядеть, но и ярче светить, что напрямую влияет на вашу безопасность.",
    },
    {
      title: "Нанесение антидождя",
      description:
        "Наносим специальный состав, который позволяет воде скатываться без образования водяной пленки. Благодаря антидождю улучшается видимость в уловиях ливня, а в зимний период стекло меньше замерзает.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Функция для открытия Telegram
  const openTelegram = () => {
    // Замените на ваш реальный Telegram username или ссылку
    const telegramUrl = "https://t.me/ваш_username";

    // Можно добавить предзаполненное сообщение
    // const message = encodeURIComponent("Здравствуйте! Хочу записаться на услугу:");
    // const telegramUrl = `https://t.me/ваш_username?start=${message}`;

    window.open(telegramUrl, "_blank");
  };

  // Функция для открытия WhatsApp (альтернатива)
  const openWhatsApp = () => {
    const phoneNumber = "79991234567"; // Ваш номер телефона в международном формате
    const message = encodeURIComponent(
      "Здравствуйте! Хочу записаться на услугу:"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className={styles.servicesSecond} id="services">
      <div className={styles.container}>
        <div className={styles.servicesSecond__header}>
          <h2>Восстановление и защита стекол и фар для вашей безопасности</h2>
          <div className={styles.headerActions}>
            <span className={styles.headerText}>
              Хотите вернуть стеклу вашего автомобиля первоначальный блеск и
              прозрачность?
            </span>
          </div>
        </div>
        <div className={styles.servicesSecond__content}>
          <div className={styles.servicesSecond__content__item}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceHeader}>
                  <span
                    className={`${styles.serviceTitle} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Описание услуги (видно только для активного элемента) */}
                <div
                  className={`${styles.serviceDescription} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <p>{service.description}</p>
                  <button
                    className={styles.serviceButton}
                    onClick={openTelegram}
                    aria-label={`Записаться на услугу: ${service.title}`}
                  >
                    Записаться
                  </button>
                </div>

                {/* картинка под span только если активный и экран <1200px */}
                <div className={styles.image_mobile}>
                  {activeIndex === index && (
                    <Image
                      src={images[index]}
                      width={1920}
                      height={1080}
                      alt={service.title}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* десктопная картинка */}
          <div className={styles.servicesSecond__content__image}>
            <div className={styles.imageWrapper}>
              <Image
                src={images[activeIndex]}
                width={850}
                height={550}
                alt="Services Image"
                className={styles.image_desktop}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
