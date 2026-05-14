import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
    slug: "scratches-polishing-guide",
    title: "Какие царапины на стекле можно убрать полировкой, а какие нет?",
    tag: "Советы",
    date: "14 мая 2026",
    image: "/images/blog/14.jpg",
  },
  {
    slug: "dangerous-windshield-signs",
    title: "Как понять, что ваше лобовое стекло уже опасно для вождения",
    tag: "Безопасность",
    date: "11 мая 2026",
    image: "/images/blog/12.webp",
  },
  {
    slug: "driver-eye-fatigue-worn-glass",
    title:
      "Усталость за рулем: как затертое лобовое стекло незаметно перегружает зрение",
    tag: "Советы",
    date: "11 мая 2026",
    image: "/images/blog/13.webp",
  },
  {
    slug: "polish-signs",
    title: "Почему ночью слепят фары встречных машин: 7 скрытых причин",
    tag: "Безопасность",
    date: "29 апреля 2026",
    image: "/images/blog/10.jpg",
  },
  {
    slug: "hydrophobic-coating",
    title: "Почему в дождь стало плохо видно дорогу даже с новыми дворниками",
    tag: "Советы",
    date: "29 апреля 2026",
    image: "/images/blog/11.jpg",
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
