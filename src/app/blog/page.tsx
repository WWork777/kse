import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from './data';
import styles from './page.module.scss';
import type { Metadata } from 'next';

import HeroBlog from '@/components/BlogPage/Hero/Hero';
import BlogDarkBlock from '@/components/BlogPage/BlogDarkBlock/BlogDarkBlock';

const baseUrl = 'https://полировка-кемерово.рф';

export const metadata: Metadata = {
  title: 'Блог | К.С.Е. - Статьи о полировке и ремонте автостекол',
  description:
    'Полезные статьи, советы и обзоры технологий по уходу за автомобильными стеклами и фарами от студии К.С.Е. в Кемерово.',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: 'Блог | К.С.Е. - Статьи о полировке и ремонте автостекол',
    description:
      'Полезные статьи, советы и обзоры технологий по уходу за автомобильными стеклами и фарами.',
    url: `${baseUrl}/blog`,
    type: 'website',
    siteName: 'К.С.Е. Студия полировки',
    images: [
      {
        url: `${baseUrl}/images/og-blog.jpg`, // Рекомендуется создать это изображение 1200x630
        width: 1200,
        height: 630,
        alt: 'Блог студии полировки К.С.Е.',
      },
    ],
  },
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export default function BlogPage() {
  const posts = Object.values(blogPosts).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <HeroBlog />
      <BlogDarkBlock />
      <section className={styles.blogSection}>
        <div className={styles.blogContent}>
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className={styles.blogCardLink}
            >
              <article className={styles.blogCard}>
                <Image src={post.image} alt={post.title} width={400} height={350} />
                <span className={styles.blogCardSpanTag}>{post.tag}</span>
                <h3 className={styles.blogCardSpanTitle}>{post.title}</h3>
                <span className={styles.blogCardSpanDate}>
                  {formatDate(post.date)}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}