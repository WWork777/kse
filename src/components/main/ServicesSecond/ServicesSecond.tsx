"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ServicesSecond() {
  const images = [
    "/images/secondServices/1.jpg",
    "/images/secondServices/2.jpg",
    "/images/secondServices/3.jpg",
    "/images/secondServices/4.jpg",
    "/images/secondServices/5.jpg",
  ];

  const services = [
    "Suspension & steering services",
    "Engine diagnostics & maintenance",
    "Car wash & detailing",
    "Brake services & maintenance",
    "Oil Change & filter replacement",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.servicesSecond}>
      <div className={styles.container}>
        <div className={styles.servicesSecond__header}>
          <h2>
            Our company provides automotive services and care for your vehicle.
          </h2>
          <span>Ready to schedule your service?</span>
        </div>
        <div className={styles.servicesSecond__content}>
          <div className={styles.servicesSecond__content__item}>
            {services.map((service, index) => (
              <div key={index}>
                <span
                  className={activeIndex === index ? styles.active : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {service}
                </span>
                {/* картинка под span только если активный и экран <1200px */}
                <div className={styles.image_mobile}>
                  {activeIndex === index && (
                    <Image
                      src={images[index]}
                      width={850}
                      height={550}
                      alt={service}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* десктопная картинка */}
          <div className={styles.servicesSecond__content__image}>
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
    </section>
  );
}
