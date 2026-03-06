import type { Metadata } from 'next';
import HeroRepair from '@/components/main/HeroRepair/HeroRepair';
import ServicesRepair from '@/components/main/ServicesRepair/ServicesRepair';
import ServicesSecondRepair from '@/components/main/ServicesSecondRepair/ServicesSecondRepair';
import AboutRepair from '@/components/main/AboutRepair/AboutRepair';
import TransformRepair from '@/components/main/TransformRepair/TransformRepair';
import Specialist from '@/components/main/Specialist/Specialist';

// Базовый URL сайта
const baseUrl = 'https://полировка-кемерово.рф';

export const metadata: Metadata = {
  title: 'Ремонт трещин и сколов на автостекле Кемерово | К.С.Е.',
  description:
    'Профессиональный ремонт трещин и сколов на лобовом и других автостеклах в Кемерово. Сохраним стекло — сэкономим на замене. Быстро, качественно, с гарантией. Ремонт лобового стекла от 300 руб.',
  alternates: {
    canonical: `${baseUrl}/remont-stekol`,
  },
  keywords: [
    'ремонт стекол Кемерово',
    'ремонт лобового стекла',
    'ремонт трещин на стекле',
    'ремонт сколов на стекле',
    'ремонт лобового стекла Кемерово',
    'ремонт трещин лобового стекла',
    'ремонт скола на лобовом стекле',
    'ремонт автостекла',
    'ремонт стекла без замены',
    'восстановление трещин на стекле',
    'стоимость ремонта скола',
    'цена ремонта трещины на стекле',
    'ремонт звездочки на стекле',
    'ремонт бычьего глаза',
    'ремонт паутинки на стекле',
  ],
  openGraph: {
    title: 'Ремонт трещин и сколов на автостекле Кемерово | К.С.Е.',
    description:
      'Профессиональный ремонт трещин и сколов на лобовом стекле без замены. Сохраним стекло — сэкономим на замене. Кемерово.',
    type: 'website',
    url: `${baseUrl}/remont-stekol`,
    siteName: 'К.С.Е. Ремонт стекол',
    images: [
      {
        url: `${baseUrl}/images/og-repair.jpg`,
        width: 1200,
        height: 630,
        alt: 'К.С.Е. - Ремонт трещин и сколов на автостекле',
      },
    ],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт трещин и сколов на автостекле | К.С.Е.',
    description:
      'Профессиональный ремонт трещин и сколов на лобовом стекле без замены',
    images: [`${baseUrl}/images/og-repair.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'К.С.Е. Студия полировки' }],
  creator: 'К.С.Е.',
  publisher: 'К.С.Е. Студия полировки',
};

// Структурированные данные для страницы ремонта
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/remont-stekol#service`,
  name: 'Ремонт трещин и сколов на автостекле',
  description:
    'Профессиональный ремонт трещин и сколов на лобовых, боковых и задних автостеклах в Кемерово без замены',
  provider: {
    '@type': 'ProfessionalService',
    name: 'К.С.Е. Студия полировки автомобильных стекол',
    url: baseUrl,
    telephone: '+7 (923) 523-44-23',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Терешковой, 41/3',
      addressLocality: 'Кемерово',
      postalCode: '650000',
      addressCountry: 'RU',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Кемерово',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Услуги ремонта стекол',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола звездочка',
          description: 'Ремонт скола типа звездочка на автостекле',
        },
        price: '1000',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола полумесяц',
          description: 'Ремонт скола типа полумесяц на автостекле',
        },
        price: '1100',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола бычий глаз',
          description: 'Ремонт скола типа бычий глаз на автостекле',
        },
        price: '900',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола до 5 мм',
          description: 'Ремонт небольшого скола до 5 мм',
        },
        price: '300',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола от 5 до 10 мм',
          description: 'Ремонт скола от 5 до 10 мм',
        },
        price: '400',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола от 10 до 20 мм',
          description: 'Ремонт скола от 10 до 20 мм',
        },
        price: '500',
        priceCurrency: 'RUB',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ремонт скола от 20 до 25 мм',
          description: 'Ремонт скола от 20 до 25 мм',
        },
        price: '1000',
        priceCurrency: 'RUB',
      },
    ],
  },
};

export default function RepairPage() {
  return (
    <>
      {/* Структурированные данные для SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroRepair />
      <ServicesRepair />
      <ServicesSecondRepair />
      <AboutRepair />
      <TransformRepair />
      <Specialist />
    </>
  );
}

