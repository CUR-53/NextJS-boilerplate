import './globals.css';
import { oswaldFont } from '@/utils/fonts';

// app/layout.js
export const metadata = {
  title: 'M - BOILERPLATE',
  description: 'A pure NextJS template with everything needed to get started with creating a new website.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favIcon/m-favicon-dark.svg',
        href: '/favIcon/m-favicon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favIcon/m-favicon-light.svg',
        href: '/favIcon/m-favicon-light.svg',
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
