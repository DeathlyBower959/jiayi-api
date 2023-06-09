import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'api.jiayi.software',
  description: 'Jiayi Software API',
  openGraph: {
    title: 'api.jiayi.software',
    description: 'API routes for Jiayi Software',
    url: 'https://api.jiayi.software/docs',
    type: 'website',
    images:
      'https://cdn.discordapp.com/icons/1076188174407176212/c42955c501c842e06248b294a81bd0ab.png',
  },
  themeColor: '#FF0000',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
