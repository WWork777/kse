import styles from "./styles.module.scss";
import Image from "next/image";

export default function Transform() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transform}>
        <h2 className={styles.transform__title}>
          Transforming your car care experience
        </h2>
        <span className={styles.transform__subtitle}>
          We deliver top-notch services for you
        </span>
        <div className={styles.transform__items}>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/1.jpg"
              alt="Transform"
              width={581}
              height={730}
            />
            <h3>Suspension setup</h3>
            <span>Vehicle Customization</span>
          </div>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/2.jpg"
              alt="Transform"
              width={581}
              height={730}
            />
            <h3>Suspension setup</h3>
            <span>Vehicle Customization</span>
          </div>
          <div className={styles.transform__item}>
            <Image
              src="/images/transform/3.jpg"
              alt="Transform"
              width={581}
              height={730}
            />
            <h3>Suspension setup</h3>
            <span>Vehicle Customization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
