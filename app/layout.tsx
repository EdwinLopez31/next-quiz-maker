import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Next Boilerplate',
  description: 'NextJS Boilerplate',
};

// sample usage of next fonts for tailwindcss
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-emerald-800`}>
        {children}
      </body>
    </html>
  );
}
