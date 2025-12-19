import { blogPosts } from '../data';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// Генерируем статические параметры для SSG
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Генерируем метаданные для каждой статьи
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  // Базовый URL вашего сайта (замените на ваш реальный домен)
  const baseUrl = 'https://полировка-кемерово.рф';
  const canonicalUrl = `https://полировка-кемерово.рф/blog/${slug}`;

  if (!post) {
    return {
      title: 'Статья не найдена | К.С.Е. - Полировка стекол',
      description: 'Запрошенная статья не существует или была удалена.',
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  const fullDescription =
    post.description.length > 160
      ? post.description.substring(0, 157) + '...'
      : post.description;

  return {
    title: `${post.title} | К.С.Е. - Полировка автомобильных стекол`,
    description: fullDescription,

    // Каноническая ссылка
    alternates: {
      canonical: canonicalUrl,
    },

    // Альтернативные языки (если есть мультиязычность)
    // alternates: {
    //   canonical: canonicalUrl,
    //   languages: {
    //     'ru-RU': canonicalUrl,
    //     'en-US': `${baseUrl}/en/blog/${slug}`,
    //   },
    // },

    keywords: [
      'полировка стекла',
      'автостекло',
      'ремонт стекла',
      'восстановление фар',
      'антидождь',
      'гидрофобное покрытие',
      'царапины на стекле',
      ...post.tag.toLowerCase().split(' '),
    ],

    openGraph: {
      title: post.title,
      description: fullDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['К.С.Е. Студия полировки'],
      url: canonicalUrl, // Добавляем URL в Open Graph
      images: [
        {
          url: post.image.startsWith('/')
            ? `${baseUrl}${post.image}`
            : post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: fullDescription,
      images: [
        post.image.startsWith('/') ? `${baseUrl}${post.image}` : post.image,
      ],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Дополнительные мета-теги
    verification: {
      // Добавьте сюда коды верификации, если нужно
      // google: "ваш-google-verification-code",
      // yandex: "ваш-yandex-verification-code",
    },

    // Для мобильных устройств
    viewport: 'width=device-width, initial-scale=1',

    // Иконки
    icons: {
      icon: [
        { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
      ],
      shortcut: '/favicon/favicon.svg',
      apple: '/favicon/apple-touch-icon.png',
    },
  };
}

// Определяем тип для параметров
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // Дожидаемся распаковки params
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Статья не найдена</h1>
        <p>Запрошенная статья не существует или была удалена.</p>
        <Link href='/blog' className={styles.backLink}>
          ← Вернуться к списку статей
        </Link>
      </div>
    );
  }

  // Создаем структурированные данные для SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'К.С.Е. Студия полировки',
      url: 'https://полировка-кемерово.рф',
    },
    publisher: {
      '@type': 'Organization',
      name: 'К.С.Е.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://полировка-кемерово.рф/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://полировка-кемерово.рф/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* Структурированные данные для поисковых систем */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className={styles.blogPost}>
        <div className={styles.container}>
          <article className={styles.article}>
            <header className={styles.articleHeader}>
              <div className={styles.meta}>
                <span className={styles.tag}>{post.tag}</span>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>

              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.description}>{post.description}</p>
            </header>

            <div className={styles.heroImage}>
              <Image
                src={post.image}
                alt={post.title}
                width={1920}
                height={1080}
                priority
              />
            </div>

            <div className={styles.content}>
              {post.fullContent.map((paragraph, index) => {
                // Проверяем, является ли параграф заголовком (начинается с цифры)
                const isHeading =
                  /^\d+\./.test(paragraph) || /^[А-Я].*:$/.test(paragraph);

                return (
                  <p
                    key={index}
                    className={
                      isHeading
                        ? styles.headingParagraph
                        : styles.regularParagraph
                    }
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <footer className={styles.articleFooter}>
              <div className={styles.tags}>
                <span>Теги:</span>
                <span className={styles.tagItem}>#полировка_стекла</span>
                <span className={styles.tagItem}>#автостекло</span>
                <span className={styles.tagItem}>#ремонт_авто</span>
              </div>
            </footer>
          </article>

          <section className={styles.relatedPosts}>
            <h2>Читайте также</h2>
            <div className={styles.relatedGrid}>
              {Object.values(blogPosts)
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.slug}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <span className={styles.relatedTag}>
                        {relatedPost.tag}
                      </span>
                      <h3 className={styles.relatedTitle}>
                        {relatedPost.title}
                      </h3>
                      <span className={styles.relatedDate}>
                        {relatedPost.date}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
