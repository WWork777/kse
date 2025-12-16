import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "polish-signs",
    title: "5 признаков того, что вашему авто нужна полировка стекла",
    tag: "Советы",
    date: "16 декабря 2025",
    image: "/images/blog/1.jpg",
  },
  {
    slug: "hydrophobic-coating",
    title: "Как работает антидождь: гидрофобное покрытие для стекол",
    tag: "Технологии",
    date: "16 декабря 2025",
    image: "/images/blog/2.jpg",
  },
  {
    slug: "headlight-restoration",
    title: "Почему мутные фары опасны и как их восстановить",
    tag: "Безопасность",
    date: "16 декабря 2025",
    image: "/images/blog/3.jpg",
  },
  {
    slug: "polish-vs-replacement",
    title: "Полировка vs замена: когда выгоднее восстановить стекло",
    tag: "Сравнение",
    date: "16 декабря 2025",
    image: "/images/blog/4.jpg",
  },
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogHeader}>
        <span className={styles.blogHeaderSpan}>Полезные статьи от К.С.Е.</span>
        <h2 className={styles.blogHeaderH2}>
          Всё о восстановлении и защите автомобильных стёкол
        </h2>
      </div>
      <div className={styles.blogContent}>
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={styles.blogCardLink} // Используем отдельный класс для ссылки
          >
            <article className={styles.blogCard}>
              <Image
                src={post.image} // Используем динамическое изображение
                alt={post.title}
                width={1920}
                height={1080}
              />
              <span className={styles.blogCardSpanTag}>{post.tag}</span>
              <span className={styles.blogCardSpanTitle}>{post.title}</span>
              <span className={styles.blogCardSpanDate}>{post.date}</span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
