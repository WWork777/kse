import type { Metadata } from "next";
import About from "@/components/main/About/About";
import Blog from "@/components/main/Blog/Blog";
import Hero from "@/components/main/Hero/Hero";
import Services from "@/components/main/Services/Services";
import ServicesSecond from "@/components/main/ServicesSecond/ServicesSecond";
import Specialist from "@/components/main/Specialist/Specialist";
import Transform from "@/components/main/Transform/Transform";

// Базовый URL сайта
const baseUrl = "https://полировка-кемерово.рф";

export const metadata: Metadata = {
  title: "Профессиональная полировка автомобильных стекол и фар | К.С.Е.",
  description:
    "Студия полировки автомобильных стекол в Москве. Устраняем царапины, восстанавливаем прозрачность, наносим антидождь. Гарантия качества. Работаем с 2015 года.",

  // Каноническая ссылка
  alternates: {
    canonical: baseUrl,
  },

  keywords: [
    "полировка стекла автомобиля",
    "восстановление фар",
    "антидождь на стекло",
    "удаление царапин со стекла",
    "шлифовка лобового стекла",
    "гидрофобное покрытие",
    "полировка автостекол Москва",
    "профессиональная полировка стекол",
    "ремонт стекла без замены",
    "восстановление прозрачности фар",
  ],

  openGraph: {
    title: "К.С.Е. | Профессиональная полировка автомобильных стекол и фар",
    description:
      "Устраняем царапины, восстанавливаем прозрачность стекол и фар без замены. Гарантия качества. Москва.",
    type: "website",
    url: baseUrl,
    siteName: "К.С.Е. Студия полировки",
    images: [
      {
        url: `${baseUrl}/images/og-main.jpg`, // Создайте это изображение 1200x630px
        width: 1200,
        height: 630,
        alt: "К.С.Е. - Профессиональная полировка автомобильных стекол",
      },
    ],
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "К.С.Е. | Профессиональная полировка автомобильных стекол",
    description:
      "Устраняем царапины, восстанавливаем прозрачность стекол и фар без замены",
    images: [`${baseUrl}/images/og-main.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Верификация сайта (добавьте свои коды)
  verification: {
    // google: "ваш-google-verification-code",
    // yandex: "ваш-yandex-verification-code",
  },

  // Дополнительные метатеги
  authors: [{ name: "К.С.Е. Студия полировки" }],
  creator: "К.С.Е.",
  publisher: "К.С.Е. Студия полировки",

  // Форматирование для мобильных
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: false,
  },

  // Viewport настройки
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",

  // Apple specific
  appleWebApp: {
    title: "К.С.Е.",
    statusBarStyle: "black-translucent",
  },

  // Manifest
  manifest: "/manifest.json",
};

// Структурированные данные для главной страницы
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#organization`,
  name: "К.С.Е. Студия полировки автомобильных стекол",
  description:
    "Профессиональная полировка и восстановление автомобильных стекол и фар в Москве",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/images/og-main.jpg`,
  telephone: "+7 (923) 523-44-23",
  email: "kse-polishglass@yandex.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Терешковой, 41/3",
    addressLocality: "Кемерово",
    postalCode: "650000",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.355198",
    longitude: "86.086847",
  },
  openingHours: "Mo-Fr 09:00-21:00, Sa-Su 10:00-20:00",
  priceRange: "₽₽",
  sameAs: [
    // "https://vk.com/kse_polish",
    // "https://instagram.com/kse_polish",
    // "https://youtube.com/@kse_polish",
  ],
  areaServed: {
    "@type": "City",
    name: "Кемерово",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги полировки стекол",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Полировка стекла",
          description:
            "Удаление мелких царапин и потёртостей с автомобильного стекла",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Восстановление фар",
          description:
            "Полировка и восстановление прозрачности автомобильных фар",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Нанесение антидождя",
          description: "Гидрофобное покрытие для защиты стекла от воды",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Структурированные данные для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />
      <Services />
      <ServicesSecond />
      <About />
      <Transform />
      <Specialist />
      <Blog />
    </>
  );
}
