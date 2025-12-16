import styles from "./styles.module.scss";

export default function Contacts() {
  return (
    <section className={styles.contactsSection} id="contacts">
      <div className={styles.contactsContainer}>
        <div className={styles.contactsText}>
          <h2 className={styles.contactsTitle}>Контакты</h2>

          <div className={styles.contactsInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Телефон:</span>
              <a href="tel:+79235234423" className={styles.contactValue}>
                +7 (923) 523-44-23
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Адрес:</span>
              <span className={styles.contactValue}>
                г. Кемерово, ул. Терешковой, 41/3
              </span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Telegram:</span>
              <a
                href="https://t.me/kse_glass_polishing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactValue}
              >
                @kse_glass_polishing
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>VK:</span>
              <a
                href="https://vk.com/kse_glass_polishing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactValue}
              >
                kse_glass_polishing
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <a
                href="mailto:kse-polishglass@yandex.ru"
                className={styles.contactValue}
              >
                kse-polishglass@yandex.ru
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactsImage}>
          <img
            src="/images/specialist/2.jpg"
            alt="Наша студия полировки"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
