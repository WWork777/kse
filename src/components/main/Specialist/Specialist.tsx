import styles from "./styles.module.scss";

export default function Specialist() {
  return (
    <section className={styles.specialistSection}>
      <div className={styles.specialistContainer}>
        <div className={styles.specialistText}>
          <p className={styles.specialistSubtitle}>
            Auto Clean transformed my vehicle! Their detailing is remarkable,
            and the repair service was quick, transparent, and highly
            professional.
          </p>
          <div className={styles.specialistInfo}>
            <span className={styles.specialistName}>Ava Thompson</span>
            <span className={styles.specialistLocation}>Seattle, WA</span>
          </div>
        </div>
        <div className={styles.specialistImage}>
          <img
            src="/images/specialist/1.jpg"
            alt="Specialist"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
