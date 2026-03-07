"use client";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ServicesSecondRepair() {
  const images = [
    "/images/secondServices/first.jpg",
    "/images/secondServices/second.jpeg",
    "/images/secondServices/three.jpg",
    "/images/secondServices/four.jpg",
    "/images/secondServices/5.jpg",
  ];

  const services = [
    {
      title: "Ремонт скола звездочка",
      description:
        "Ремонт скола типа звездочка на автостекле. Профессиональное восстановление скола с использованием качественных полимеров и специализированного оборудования.",
      price: "1000 руб",
    },
    {
      title: "Ремонт скола полумесяц",
      description:
        "Ремонт скола типа полумесяц на автостекле. Аккуратное восстановление повреждения без сверления лишних отверстий, сохранение родного стекла.",
      price: "1100 руб",
    },
    {
      title: "Ремонт скола бычий глаз",
      description:
        "Ремонт скола типа бычий глаз на автостекле. Качественное восстановление скола с гарантией результата, предотвращение дальнейшего распространения трещины.",
      price: "900 руб",
    },
    {
      title: "Ремонт скола до 5 мм",
      description:
        "Ремонт небольшого скола до 5 мм. Быстрое и эффективное восстановление мелких повреждений на лобовом, боковом или заднем стекле.",
      price: "от 300 руб",
    },
    {
      title: "Ремонт скола от 5 до 10 мм",
      description:
        "Ремонт скола от 5 до 10 мм. Профессиональное восстановление средних повреждений с использованием высококачественных материалов.",
      price: "от 400 руб",
    },
    {
      title: "Ремонт скола от 10 до 20 мм",
      description:
        "Ремонт скола от 10 до 20 мм. Восстановление более крупных повреждений с сохранением оптических свойств стекла и предотвращением распространения трещины.",
      price: "от 500 руб",
    },
    {
      title: "Ремонт скола от 20 до 25 мм",
      description:
        "Ремонт крупного скола от 20 до 25 мм. Комплексное восстановление значительных повреждений без необходимости замены стекла.",
      price: "от 1000 руб",
    },
    {
      title: "Ремонт сколов свыше 25 мм",
      description:
        "Ремонт сколов свыше 25 мм. Индивидуальный подход к каждому случаю. Оценка возможности ремонта и стоимости производится после диагностики.",
      price: "по договоренности",
    },
    {
      title: "Комбинированный вид скола",
      description:
        "Ремонт комбинированных повреждений на автостекле. Комплексное восстановление различных типов сколов и трещин.",
      price: "от 900 руб",
    },
  ];

  const openTelegram = () => {
    const telegramUrl = "https://t.me/Sergey_glass_polishing";
    window.open(telegramUrl, "_blank");
  };

  return (
    <section className={styles.servicesSecond} id="services">
      <div className={styles.container}>
        <div className={styles.servicesSecond__header}>
          <h2>Ремонт трещин и сколов на автостекле</h2>
          <div className={styles.headerActions}>
            <span className={styles.headerText}>
              Сохраним стекло — сэкономим на замене
            </span>
          </div>
        </div>
        <div className={styles.servicesSecond__content}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              {/* <div className={styles.imageWrapper}>
                <Image
                  src={images[index % images.length]}
                  width={850}
                  height={550}
                  alt={service.title}
                  className={styles.serviceImage}
                />
              </div> */}
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{service.price}</span>
                  <button
                    className={styles.serviceButton}
                    onClick={openTelegram}
                    aria-label={`Записаться на услугу: ${service.title}`}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
