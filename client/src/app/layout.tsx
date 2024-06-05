import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import MainNav from '@/components/mainNav/MainNav';
import MainFooter from '@/components/mainFooter/MainFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Octopus',
  description: 'Octopus assignment for a frontend developer role',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
