import Footer from '@/components/layout/Footer/Footer';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header/Header';
import YandexMetrika from '@/components/YandexMetrika/YandexMEtrika';

const bebasNeue = localFont({
  src: [
    {
      path: './fonts/Bebas-Neue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Bebas-Neue-Bold.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const metadata = {
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/favicon-96x96.png',
      },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <YandexMetrika />
        <Footer />
      </body>
    </html>
  );
}
