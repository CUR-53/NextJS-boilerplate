import './globals.css';
import { oswaldFont } from '@/utils/fonts';

// app/layout.js
export const metadata = {
  title: 'BOILERPLATE',
  description: 'A pure NextJS template with everything needed to get started with creating a new website.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favIcon/favicon-dark.svg',
        href: '/favIcon/favicon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favIcon/favicon-light.svg',
        href: '/favIcon/favicon-light.svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>{children}</body>
    </html>
  );
}
