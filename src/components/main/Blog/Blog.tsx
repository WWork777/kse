import styles from "./styles.module.scss";
import Image from "next/image";

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogHeader}>
        <span className={styles.blogHeaderSpan}>
          Explore Auto Clean's Services
        </span>
        <h2 className={styles.blogHeaderH2}>
          Your trusted local partner for expert car care
        </h2>
      </div>
      <div className={styles.blogContent}>
        <article className={styles.blogCard}>
          <Image
            src="/images/blog/1.jpg"
            alt="Blog Post"
            width={500}
            height={500}
          />
          <span className={styles.blogCardSpanTag}>Technology</span>
          <span className={styles.blogCardSpanTitle}>
            The role of customer service in a successful repair shop
          </span>
          <span className={styles.blogCardSpanDate}>May 23, 2025</span>
        </article>
        <article className={styles.blogCard}>
          <Image
            src="/images/blog/2.jpg"
            alt="Blog Post"
            width={500}
            height={500}
          />
          <span className={styles.blogCardSpanTag}>Technology</span>
          <span className={styles.blogCardSpanTitle}>
            The role of customer service in a successful repair shop
          </span>
          <span className={styles.blogCardSpanDate}>May 23, 2025</span>
        </article>
        <article className={styles.blogCard}>
          <Image
            src="/images/blog/3.jpg"
            alt="Blog Post"
            width={500}
            height={500}
          />
          <span className={styles.blogCardSpanTag}>Technology</span>
          <span className={styles.blogCardSpanTitle}>
            The role of customer service in a successful repair shop
          </span>
          <span className={styles.blogCardSpanDate}>May 23, 2025</span>
        </article>
        <article className={styles.blogCard}>
          <Image
            src="/images/blog/4.jpg"
            alt="Blog Post"
            width={500}
            height={500}
          />
          <span className={styles.blogCardSpanTag}>Technology</span>
          <span className={styles.blogCardSpanTitle}>
            The role of customer service in a successful repair shop
          </span>
          <span className={styles.blogCardSpanDate}>May 23, 2025</span>
        </article>
      </div>
    </section>
  );
}
